import { View, Text } from "react-native"
import LocationPill from "../header/LocationPill"
import Avatar from "../common/Avatar"

export default function TopBarJamms() {
  return (
    <View className="flex-row items-center justify-between px-4 pt-2 pb-3 bg-zinc-50">
      <LocationPill />
      <Text className="text-lg font-semibold text-zinc-900">Jamms</Text>
      <Avatar
        size={32}
        uri="https://images.unsplash.com/photo-1607746882042-944635dfe10e?q=80&w=200&auto=format&fit=crop"
      />
    </View>
  )
}
