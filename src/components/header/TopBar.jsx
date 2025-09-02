import React from 'react'
import { View, Text } from 'react-native'
import LocationPill from './LocationPill'
import Avatar from '../common/Avatar'

export default function TopBar() {
  return (
    <View className="flex-row items-center px-4 pt-2 pb-3 bg-zinc-50">
      <View className="flex-1">
        <LocationPill />
      </View>
      <View className="flex-1">
        <Text className="text-2xl font-bold text-zinc-900 text-center">People</Text>
      </View>
      <View className="flex-1 items-end">
        <Avatar
          size={50}
          uri="https://images.unsplash.com/photo-1607746882042-944635dfe10e?q=80&w=200&auto=format&fit=crop"
          percentage={42}
        />
      </View>
    </View>
  );
}
