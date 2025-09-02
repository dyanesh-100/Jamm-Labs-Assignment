import React from 'react'
import { View, Text, Image } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'

export default function PersonCard({ person }) {
  return (
    <View className="bg-white rounded-2xl p-4 mx-4 mb-4">
      <View className="flex-row items-center gap-1">
        <Text className="text-lg font-bold text-zinc-900">{person.name}</Text>
        <Text className="text-lg font-medium text-zinc-900">{person.age}</Text>
        {person.verified ? (
          <MaterialCommunityIcons name="check-decagram" size={16} color="#F5C443" />
        ) : null}
      </View>

      <Text className="text-xs text-zinc-500 mt-0.5">Associate Product Manager</Text>

      <Image
        source={{ uri: person.photo }}
        className="w-full h-96 mt-3 rounded-2xl"
        resizeMode="cover"
      />

      <Text className="text-sm text-zinc-600 mt-3" numberOfLines={2}>
        {person.bio}
      </Text>
    </View>
  )
}
