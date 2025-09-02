"use client"
import { useMemo, useRef, useState, useEffect } from "react"
import { View, Text, Pressable, FlatList } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

const ITEM_HEIGHT = 36

function Wheel({ data, value, onChange, width = 90 }) {
  const listRef = useRef(null)
  const index = Math.max(
    0,
    data.findIndex((d) => d.value === value),
  )

  useEffect(() => {
    if (listRef.current && index >= 0) {
      listRef.current.scrollToIndex({ index, animated: false })
    }
  }, [index])

  return (
    <FlatList
      ref={listRef}
      data={data}
      keyExtractor={(item) => String(item.value)}
      renderItem={({ item }) => (
        <View style={{ height: ITEM_HEIGHT, alignItems: "center", justifyContent: "center", width }}>
          <Text className={item.value === value ? "text-black font-medium" : "text-neutral-400"}>{item.label}</Text>
        </View>
      )}
      getItemLayout={(_, i) => ({ length: ITEM_HEIGHT, offset: ITEM_HEIGHT * i, index: i })}
      showsVerticalScrollIndicator={false}
      snapToInterval={ITEM_HEIGHT}
      decelerationRate="fast"
      onMomentumScrollEnd={(e) => {
        const y = e.nativeEvent.contentOffset.y
        const i = Math.round(y / ITEM_HEIGHT)
        const item = data[i]
        if (item) onChange(item.value)
      }}
      style={{ width }}
    />
  )
}

function buildDateOptions(days = 30) {
  const now = new Date()
  const opts = []
  for (let i = 0; i < days; i++) {
    const d = new Date(now)
    d.setDate(now.getDate() + i)
    const weekday = d.toLocaleDateString(undefined, { weekday: "short" })
    const day = d.toLocaleDateString(undefined, { day: "numeric" })
    const month = d.toLocaleDateString(undefined, { month: "short" })
    opts.push({
      value: d.toISOString(),
      label: `${weekday} ${day} ${month}`,
      date: d,
    })
  }
  return opts
}

const hourOptions = Array.from({ length: 12 }, (_, i) => ({ value: i + 1, label: String(i + 1) }))
const minuteOptions = Array.from({ length: 60 }, (_, i) => ({ value: i, label: i.toString().padStart(2, "0") }))
const ampmOptions = [
  { value: "AM", label: "AM" },
  { value: "PM", label: "PM" },
]

export default function DateTimeWheelPicker({ initial, onConfirm, onCancel }) {
  const dateOptions = useMemo(() => buildDateOptions(30), [])
  const init = initial ? new Date(initial) : new Date()
  const initHours = init.getHours()
  const [dateIso, setDateIso] = useState(
    dateOptions.find((o) => o.date.toDateString() === init.toDateString())?.value || dateOptions[0].value,
  )
  const [hour12, setHour12] = useState(((initHours + 11) % 12) + 1)
  const [minute, setMinute] = useState(init.getMinutes())
  const [ampm, setAmPm] = useState(initHours >= 12 ? "PM" : "AM")

  function toDate() {
    const base = new Date(dateIso)
    let h = hour12 % 12
    if (ampm === "PM") h += 12
    base.setHours(h, minute, 0, 0)
    return base
  }

  return (
    <View className="absolute inset-0 bg-black/50 items-center justify-center px-6">
      <SafeAreaView className="w-full">
        <View className="mx-auto w-full rounded-2xl bg-white px-4 py-6" style={{ maxWidth: 360 }}>
          <View
            pointerEvents="none"
            className="absolute left-4 right-4 rounded-lg bg-neutral-100"
            style={{ top: 6 + ITEM_HEIGHT * 1.5, height: ITEM_HEIGHT }}
          />
          <View className="flex-row items-center justify-between mb-2">
            <Pressable onPress={onCancel} className="px-2 py-1">
              <Text className="text-neutral-500">Cancel</Text>
            </Pressable>
            <Pressable onPress={() => onConfirm(toDate())} className="rounded-full bg-black px-4 py-2">
              <Text className="text-white">Done</Text>
            </Pressable>
          </View>

          <View className="mt-1 flex-row items-stretch justify-center gap-2">
            <Wheel data={dateOptions} value={dateIso} onChange={setDateIso} width={140} />
            <Wheel data={hourOptions} value={hour12} onChange={setHour12} width={56} />
            <Wheel data={minuteOptions} value={minute} onChange={setMinute} width={64} />
            <Wheel data={ampmOptions} value={ampm} onChange={setAmPm} width={70} />
          </View>
        </View>
      </SafeAreaView>
    </View>
  )
}
