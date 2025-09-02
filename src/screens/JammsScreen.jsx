"use client"
import { useState } from "react"
import { View, FlatList, Pressable, Text } from "react-native"
import TopBarJamms from "../components/header/TopBarJamms"
import SegmentTabs from "../components/jamms/SegmentTabs"
import JammCard from "../components/jamms/JammCard"
import { openPostJammModal } from "../components/post/PostJammModalContext"

export default function JammsScreen({ jamms }) {
  const [segment, setSegment] = useState("Upcoming")

  return (
    <View className="flex-1 bg-zinc-50">
      <FlatList
        data={jamms}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <JammCard
            title={item.title}
            hostName={item.hostName}
            hostAvatar={item.hostAvatar}
            description={item.description}
            category={item.category}
            start={item.start}
            end={item.end}
            location={item.location}
            people={item.people}
            price={item.price}
            status={item.status}
            style={{ marginHorizontal: 16, marginBottom: 12 }}
          />
        )}
        ListHeaderComponent={
          <View>
            <TopBarJamms />
            <SegmentTabs value={segment} onChange={setSegment} />
          </View>
        }
        contentContainerStyle={{ paddingTop: 4, paddingBottom: 140, gap: 12 }}
        showsVerticalScrollIndicator={false}
      />

      <Pressable
        accessible
        accessibilityRole="button"
        accessibilityLabel="Post a JAMM"
        onPress={openPostJammModal}
        className="absolute bottom-20 self-center bg-black rounded-full px-6 py-3.5 shadow-lg"
      >
        <Text className="text-white font-medium">
          {"Post a "}
          <Text className="text-pink-500 font-semibold">{"JAMM"}</Text>
        </Text>
      </Pressable>
    </View>
  )
}
