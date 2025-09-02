import { View, Text, Image } from "react-native"
import { Ionicons, Feather, MaterialCommunityIcons } from "@expo/vector-icons"

function MetaRow({ icon, children }) {
  return (
    <View className="flex-row items-center gap-2">
      {icon}
      <Text className="text-[12px] text-zinc-700">{children}</Text>
    </View>
  )
}

function StatusPill({ variant = "cta", children }) {
  const styles = variant === "cta" ? "bg-black" : variant === "requested" ? "bg-rose-100" : "bg-emerald-100"
  const textStyles = variant === "cta" ? "text-white" : variant === "requested" ? "text-rose-700" : "text-emerald-700"

  return (
    <View className={`px-4 py-3 rounded-full self-end ${styles}`}>
      <Text className={`text-[12px] font-semibold ${textStyles}`}>{children}</Text>
    </View>
  )
}

export default function JammCard({
  title,
  hostName,
  description,
  hostAvatar,
  category,
  start,
  end,
  location,
  people,
  price,
  status = "cta", // 'cta' | 'requested' | 'attending'
  style,
}) {
  return (
    <View className="bg-white rounded-2xl p-4 border border-zinc-200" style={style}>
      <Text className="text-[23px] font-bold text-zinc-900 mb-3">{title}</Text>

      <View className="flex-row items-center gap-3 mb-4">
        <Image source={{ uri: hostAvatar }} className="h-20 w-20 rounded-2xl" />
        <View>
          <Text className="text-[13px] text-zinc-500">Hosted by</Text>
          <Text className="text-[15px] font-semibold text-pink-600">{hostName}</Text>
        </View>
      </View>

      <View className="gap-2.5 mb-4">
        <MetaRow icon={<MaterialCommunityIcons name="compass-outline" size={16} color="#18181b" />}>{category}</MetaRow>
        <View className="flex-row items-start gap-2">
          <Ionicons name="calendar-outline" size={16} color="#18181b" style={{ marginTop: 2 }} />
          <View>
            <View>
              <Text className="text-[12px] text-zinc-700">{start.split("·")[0].trim()}</Text>
              <Text className="text-[12px] text-zinc-500">{start.split("·")[1].trim()}</Text>
            </View>
            <View className="h-4 w-px bg-zinc-300 my-1 ml-2" />
            <View>
              <Text className="text-[12px] text-zinc-700">{end.split("·")[0].trim()}</Text>
              <Text className="text-[12px] text-zinc-500">{end.split("·")[1].trim()}</Text>
            </View>
          </View>
        </View>
        <View className="flex-row items-center justify-between">
          <MetaRow icon={<MaterialCommunityIcons name="map-marker-outline" size={16} color="#18181b" />}>
            {location}
          </MetaRow>
          <Ionicons name="navigate-outline" size={16} color="#18181b" />
        </View>
        <MetaRow icon={<MaterialCommunityIcons name="account-outline" size={16} color="#18181b" />}>{people}</MetaRow>
        <MetaRow icon={<MaterialCommunityIcons name="ticket-confirmation-outline" size={16} color="#18181b" />}>
          {price}
        </MetaRow>
      </View>

      <Text numberOfLines={3} className="text-[12px] leading-5 text-zinc-700 mb-4">
        {description}
      </Text>

      {status === "cta" ? (
        <View className="self-end">
          <StatusPill variant="cta">
            <Text className="text-white font-medium">
              {"Request to "}
              <Text className="text-pink-400 font-semibold">JAMM</Text>
            </Text>
          </StatusPill>
        </View>
      ) : status === "requested" ? (
        <StatusPill variant="requested">Requested</StatusPill>
      ) : (
        <StatusPill variant="attending">Attending</StatusPill>
      )}
    </View>
  )
}
