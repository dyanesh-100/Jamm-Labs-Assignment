"use client"
import { useMemo, useState } from "react"
import { View, Text, Pressable, TextInput, ScrollView, Image } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import DateTimeWheelPicker from "./DateTimeWheelPicker"
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons"

function Chip({ label, selected, onPress, icon }) {
  return (
    <Pressable
      onPress={onPress}
      className={`mr-2 mb-2 rounded-full border px-3 py-2 ${
        selected ? "bg-pink-500 border-pink-500" : "bg-white border-neutral-200"
      }`}
    >
      <View className="flex-row items-center gap-2">
        {icon}
        <Text className={`${selected ? "text-white" : "text-neutral-700"} font-medium`}>{label}</Text>
      </View>
    </Pressable>
  )
}

const ICONS = {
  Breakfast: "egg-fried",
  Brunch: "silverware-fork-knife",
  Lunch: "silverware-fork-knife",
  Dinner: "silverware-fork-knife",
  Cafe: "coffee-outline",
  Barbeque: "fire",
  "Board Games": "puzzle-outline",
  "House Party": "home-outline",
  Potluck: "food-variant",
  "Bike Ride": "bike",
  Movie: "movie-outline",
  "Road Trip": "car-outline",
  Karaoke: "microphone-variant",
  "Outdoor Event": "weather-sunny",
  Concert: "music",
  Party: "party-popper",
  "Live Music": "music-circle-outline",
  "Art & Craft": "palette-outline",
  Volunteer: "hand-heart",
  Cooking: "chef-hat",
  "Health & Fitness": "dumbbell",
  Therapy: "leaf",
  "Book Reading": "book-open-page-variant-outline",
  Gaming: "gamepad-variant-outline",
  Shopping: "shopping-outline",
  Running: "run",
  "Nature Walking": "pine-tree",
  "Standup Comedy": "emoticon-excited-outline",
  Sightseeing: "binoculars",
  "Pet Meetup": "paw-outline",
  Camping: "campfire",
  Sports: "basketball",
  Workshops: "briefcase-outline",
}

const ACTIVITIES = Object.keys(ICONS)
const GUEST_COUNTS = [1, 2, 3, 4, 5, 6, 7]
const PAYING = ["Free", "Go Dutch", "Split the bill", "It's on me"]

export default function PostJammModal({ onClose }) {
  const [name, setName] = useState("")
  const [activities, setActivities] = useState(["Breakfast"])
  const [guests, setGuests] = useState(3)
  const [paying, setPaying] = useState("Free")
  const [location, setLocation] = useState("")
  const [desc, setDesc] = useState("")
  const [fromAt, setFromAt] = useState(null)
  const [toAt, setToAt] = useState(null)
  const [pickerTarget, setPickerTarget] = useState(null)
  const [mapUrl, setMapUrl] = useState("")
  const [hideRequested, setHideRequested] = useState(false)
  const [hideNextPlans, setHideNextPlans] = useState(false)

  const nameCount = `${name.length}/35`
  const descCount = `${desc.length}/150`

  function toggleActivity(a) {
    setActivities((prev) => (prev.includes(a) ? prev.filter((x) => x !== a) : [...prev, a]))
  }

  const activityChips = useMemo(
    () =>
      ACTIVITIES.map((a) => (
        <Chip
          key={a}
          label={a}
          selected={activities.includes(a)}
          onPress={() => toggleActivity(a)}
          icon={
            <MaterialCommunityIcons name={ICONS[a]} size={16} color={activities.includes(a) ? "white" : "#6b7280"} />
          }
        />
      )),
    [activities],
  )

  return (
    <SafeAreaView className="flex-1 bg-black/30">
      <View className="flex-1 justify-end">
        <View className="h-[92%] rounded-t-3xl bg-white px-4 pb-4 pt-3">
          <View className="mb-4 flex-row items-center justify-between">
            <View className="w-10" />
            <Text className="flex-1 text-center text-lg font-semibold">Create your Jamm</Text>
            <Pressable
              accessibilityLabel="Close"
              onPress={onClose}
              className="h-10 w-10 items-center justify-center rounded-full border border-neutral-200 bg-white"
            >
              <Ionicons name="close" size={20} color="#111" />
            </Pressable>
          </View>

          <ScrollView
            contentContainerStyle={{ paddingBottom: 96 }}
            showsVerticalScrollIndicator={false}
          >
            <View className="mb-4">
              <Text className="mb-2 text-sm text-neutral-500">Jamm Name</Text>
              <View className="rounded-xl border border-neutral-200 bg-white px-3 py-3">
                <View className="flex-row items-center justify-between">
                  <TextInput
                    placeholder="Type here"
                    value={name}
                    onChangeText={setName}
                    className="flex-1 text-base text-neutral-900"
                  />
                  <Text className="text-xs text-neutral-400">Me {nameCount}</Text>
                </View>
              </View>
            </View>

            <View className="mb-4">
              <Text className="mb-2 text-sm text-neutral-500">Activity</Text>
              <View className="rounded-xl border border-neutral-200 bg-white p-3">
                <View className="flex-row flex-wrap">{activityChips}</View>
              </View>
            </View>

            <View className="mb-4">
              <Text className="mb-2 text-sm text-neutral-500">Number of guests</Text>
              <View className="rounded-xl border border-neutral-200 bg-white p-3">
                <View className="flex-row flex-wrap">
                  {GUEST_COUNTS.map((n) => (
                    <Chip key={n} label={String(n)} selected={guests === n} onPress={() => setGuests(n)} />
                  ))}
                </View>
              </View>
            </View>

            <View className="mb-4">
              <Text className="mb-2 text-sm text-neutral-500">Who’s paying</Text>
              <View className="rounded-xl border border-neutral-200 bg-white p-3">
                <View className="flex-row flex-wrap">
                  {PAYING.map((p) => (
                    <Chip key={p} label={p} selected={paying === p} onPress={() => setPaying(p)} />
                  ))}
                </View>
                {paying === "It's on me" ? (
                  <View className="mt-3 self-start rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1">
                    <Text className="text-xs text-neutral-600">Attendance fee not applicable</Text>
                  </View>
                ) : null}
              </View>
            </View>

            <View className="mb-4">
              <Text className="mb-2 text-sm text-neutral-500">Location</Text>
              <View className="rounded-xl border border-neutral-200 bg-white px-3 py-3">
                <TextInput
                  placeholder="Type here"
                  value={location}
                  onChangeText={setLocation}
                  className="text-base text-neutral-900"
                />
              </View>
            </View>

            <View className="mb-4">
              <Text className="mb-2 text-sm text-neutral-500">Description</Text>
              <View className="rounded-xl border border-neutral-200 bg-white px-3 py-3">
                <TextInput
                  placeholder="Type here"
                  value={desc}
                  onChangeText={setDesc}
                  multiline
                  numberOfLines={5}
                  className="text-base text-neutral-900"
                  style={{ minHeight: 120, textAlignVertical: "top" }}
                />
                <View className="mt-2 items-end">
                  <Text className="text-xs text-neutral-400">Me: {descCount}</Text>
                </View>
              </View>
            </View>

            <View className="mb-4">
              <Text className="mb-2 text-sm text-neutral-500">Date & Time</Text>
              <View className="rounded-xl border border-neutral-200 bg-white p-3">
                <Pressable
                  onPress={() => setPickerTarget("from")}
                  className="mb-3 flex-row items-center justify-between rounded-lg border border-neutral-200 px-3 py-3"
                >
                  <Text className={fromAt ? "text-neutral-700" : "text-neutral-400"}>
                    {fromAt
                      ? fromAt.toLocaleString(undefined, {
                          weekday: "short",
                          day: "2-digit",
                          month: "short",
                          hour: "2-digit",
                          minute: "2-digit",
                          hour12: true,
                        })
                      : "DD MM, HH:MM"}
                  </Text>
                  <Ionicons name="chevron-forward" size={18} color="#9ca3af" />
                </Pressable>

                <View className="mb-3 flex-row items-center justify-center">
                  <Ionicons name="arrow-down" size={16} color="#9ca3af" />
                </View>

                <Pressable
                  onPress={() => setPickerTarget("to")}
                  className="flex-row items-center justify-between rounded-lg border border-neutral-200 px-3 py-3"
                >
                  <Text className={toAt ? "text-neutral-700" : "text-neutral-400"}>
                    {toAt
                      ? toAt.toLocaleString(undefined, {
                          weekday: "short",
                          day: "2-digit",
                          month: "short",
                          hour: "2-digit",
                          minute: "2-digit",
                          hour12: true,
                        })
                      : "DD MM, HH:MM"}
                  </Text>
                  <Ionicons name="chevron-forward" size={18} color="#9ca3af" />
                </Pressable>
              </View>
            </View>

            <View className="mb-4">
              <Text className="mb-2 text-sm text-neutral-500">Map URL (Optional)</Text>
              <View className="rounded-xl border border-neutral-200 bg-white px-3 py-3">
                <TextInput
                  placeholder="Paste here"
                  value={mapUrl}
                  onChangeText={setMapUrl}
                  className="text-base text-neutral-900"
                  autoCapitalize="none"
                  autoCorrect={false}
                />
              </View>
            </View>
            <View className="mb-4">
              <View className="flex-row items-center mb-2">
                <Text className="text-sm text-neutral-500">Hide from the Circles (Optional)</Text>
                <Ionicons name="information-circle-outline" size={16} color="#a3a3a3" style={{ marginLeft: 4 }} />
              </View>
              <View className="rounded-xl border border-neutral-200 bg-white p-3">
                <View className="flex-row flex-wrap">
                  <Chip
                    label="Requested"
                    selected={hideRequested}
                    onPress={() => setHideRequested((v) => !v)}
                    icon={
                      <Image
                        source={{ uri: "https://i.pravatar.cc/40?img=12" }}
                        className="h-6 w-6 rounded-full"
                        accessibilityIgnoresInvertColors
                      />
                    }
                  />
                  <Chip
                    label="Next plans"
                    selected={hideNextPlans}
                    onPress={() => setHideNextPlans((v) => !v)}
                    icon={
                      <Image
                        source={{ uri: "https://i.pravatar.cc/40?img=45" }}
                        className="h-6 w-6 rounded-full"
                        accessibilityIgnoresInvertColors
                      />
                    }
                  />
                </View>
              </View>
            </View>
          </ScrollView>
       
          <Pressable
              accessible
              accessibilityRole="button"
              accessibilityLabel="Post a JAMM"
            
              className="absolute bottom-8 self-center bg-black rounded-full px-6 py-3.5 shadow-lg"
            >
              <Text className="text-white font-medium">
                {"Post a "}
                <Text className="text-pink-500 font-semibold">{"JAMM"}</Text>
              </Text>
          </Pressable>
          
        </View>
      </View>

      {pickerTarget ? (
        <DateTimeWheelPicker
          initial={pickerTarget === "from" ? fromAt || new Date() : toAt || new Date()}
          onCancel={() => setPickerTarget(null)}
          onConfirm={(d) => {
            if (pickerTarget === "from") setFromAt(d)
            else setToAt(d)
            setPickerTarget(null)
          }}
        />
      ) : null}
    </SafeAreaView>
  )
}
