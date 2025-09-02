import { View, Text, Pressable } from "react-native"
import { Ionicons, Feather } from "@expo/vector-icons"

function TabItem({ icon, label, active, badge, onPress }) {
  return (
    <Pressable
      className="items-center justify-center flex-1"
      onPress={onPress}
      accessibilityRole="button"
      accessibilityLabel={label}
    >
      <View className="relative">
        {icon}
        {badge ? (
          <View className="absolute -top-1 -right-2 min-w-[16px] h-4 px-1 rounded-full bg-rose-500 items-center justify-center">
            <Text className="text-[10px] text-white font-semibold">{badge}</Text>
          </View>
        ) : null}
      </View>
      <Text className={`text-[11px] mt-1 ${active ? "text-zinc-900 font-semibold" : "text-zinc-500"}`}>{label}</Text>
    </Pressable>
  )
}

export default function BottomTabBar({ activeTab = "People", onTabChange = () => {} }) {
  return (
    <View className="absolute bottom-0 left-0 right-0 bg-white border-t border-zinc-200 h-16 flex-row">
      <TabItem
        icon={<Ionicons name="people" size={22} color={activeTab === "People" ? "#18181b" : "#71717a"} />}
        label="People"
        active={activeTab === "People"}
        onPress={() => onTabChange("People")}
      />
      <TabItem
        icon={<Ionicons name="calendar-outline" size={22} color={activeTab === "Jamms" ? "#18181b" : "#71717a"} />}
        label="Jamms"
        active={activeTab === "Jamms"}
        onPress={() => onTabChange("Jamms")}
      />
      <TabItem
        icon={
          <Ionicons name="star-outline" size={22} color={activeTab === "Requests" ? "#18181b" : "#71717a"} />
        }
        label="Requests"
        badge="8"
        active={activeTab === "Requests"}
        onPress={() => onTabChange("Requests")}
      />
      <TabItem
        icon={<Ionicons name="chatbubbles-outline" size={22} color={activeTab === "Chats" ? "#18181b" : "#71717a"} />}
        label="Chats"
        active={activeTab === "Chats"}
        onPress={() => onTabChange("Chats")}
      />
    </View>
  )
}
