import React from 'react'
import { View, Text } from 'react-native'

export default function FilterChip({ label, value, count, selected, icon }) {
  const base = 'flex-row items-center gap-1.5 px-4 py-2 rounded-full border'
  const selectedClasses = selected ? "bg-black border-black" : "bg-white border-zinc-200"
  const textClasses = selected ? "text-white" : "text-zinc-900"

  return (
    <View className={`${base} ${selectedClasses}`}>
      {typeof count === "number" && (
        <View
          className={`h-4 w-4 rounded-full items-center justify-center ${
            selected ? "bg-white" : "bg-zinc-200"
          }`}
        >
          <Text className={`text-[10px] ${selected ? "text-black" : "text-zinc-700"}`}>{count}</Text>
        </View>
      )}

      <Text className={`text-[12px] font-semibold ${textClasses}`}>{label}</Text>

      {icon ? <View className="ml-0.5">{icon}</View> : null}

      {value ? <Text className={`text-[12px] font-semibold ${textClasses}`}>{` ${value}`}</Text> : null}
    </View>
  )
}
