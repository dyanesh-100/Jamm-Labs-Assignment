import { ScrollView, Pressable, Text } from "react-native"

const tabs = ["Upcoming", "My Jamms", "This week", "This month"]

export default function SegmentTabs({ value = "Upcoming", onChange = () => {} }) {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingHorizontal: 16, paddingBottom: 5,paddingTop: 10, gap: 12 }}
    >
      {tabs.map((t) => {
        const active = t === value
        return (
          <Pressable
            key={t}
            onPress={() => onChange(t)}
            className={`px-4 py-2 rounded-full border ${active ? "bg-black border-black" : "bg-white border-zinc-200"}`}
            accessibilityRole="button"
            accessibilityState={{ selected: active }}
            accessibilityLabel={t}
          >
            <Text className={`text-[12px] font-semibold ${active ? "text-white" : "text-zinc-900"}`}>{t}</Text>
          </Pressable>
        )
      })}
    </ScrollView>
  )
}
