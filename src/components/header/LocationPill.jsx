import React from 'react'
import { View, Text } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

export default function LocationPill() {
  return (
    <View className="flex-row items-center self-start gap-1.5 pl-3 pr-2 py-1.5 rounded-full border border-zinc-200 bg-white">
      <Text className="text-base">{'₹'}</Text>
      <Text className="text-[13px] font-medium text-zinc-900">BLR</Text>
      <Ionicons name="chevron-down" size={14} color="#3f3f46" />
    </View>
  )
}
