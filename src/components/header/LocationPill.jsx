import React from 'react'
import { View, Text } from 'react-native'

export default function LocationPill() {
  return (
    <View className="flex-row items-center self-start gap-1.5 pl-2 pr-3 py-1.5 rounded-full border border-zinc-200 bg-white">
      <View className="w-2.5 h-2.5 rounded-full bg-green-500" />
      <Text className="text-[13px] font-medium text-zinc-900">BLR</Text>
    </View>
  )
}
