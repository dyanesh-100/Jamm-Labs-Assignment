import { View, Text, Image } from "react-native"
import { Ionicons, Feather } from "@expo/vector-icons"

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
    <View className={`px-3 py-1.5 rounded-full self-start ${styles}`}>
      <Text className={`text-[12px] font-semibold ${textStyles}`}>{children}</Text>
    </View>
  )
}

export default function JammCard({
  title,
  hostName,
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
      <Text className="text-[18px] font-semibold text-zinc-900 mb-3">{title}</Text>

      <View className="flex-row items-center gap-2 mb-3">
        <Image source={{ uri: hostAvatar }} className="h-7 w-7 rounded-full" />
        <View className="flex-row gap-1">
          <Text className="text-[12px] text-zinc-500">Hosted by</Text>
          <Text className="text-[12px] font-semibold text-rose-600">{hostName}</Text>
        </View>
      </View>

      <View className="flex-row items-center gap-2 mb-3">
        <Feather name="zap" size={14} color="#18181b" />
        <Text className="text-[12px] text-zinc-900">{category}</Text>
      </View>

      <View className="gap-2.5 mb-3">
        <MetaRow icon={<Ionicons name="calendar-outline" size={14} color="#18181b" />}>{start}</MetaRow>
        <MetaRow icon={<Ionicons name="calendar-outline" size={14} color="#18181b" />}>{end}</MetaRow>
        <MetaRow icon={<Ionicons name="location-outline" size={14} color="#18181b" />}>
          {location}
          <Ionicons name="navigate-outline" size={12} color="#18181b" />
        </MetaRow>
        <MetaRow icon={<Ionicons name="people-outline" size={14} color="#18181b" />}>{people}</MetaRow>
        <MetaRow icon={<Ionicons name="card-outline" size={14} color="#18181b" />}>{price}</MetaRow>
      </View>

      <Text numberOfLines={3} className="text-[12px] leading-5 text-zinc-700 mb-3">
        I'm looking for some new travel buddies to join my bike trip! We'll explore nearby cities, sample local food,
        and make memories. If you're friendly and responsible, join us for a fun ride! DM to coordinate our routes!
      </Text>

      {status === "cta" ? (
        <View className="self-start">
          <StatusPill variant="cta">
            <Text className="text-white font-medium">
              {"Request a "}
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
