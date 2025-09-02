import React from 'react'
import { Image, View } from 'react-native'

export default function Avatar({ uri, size = 32 }) {
  return (
    <View
      style={{ width: size, height: size }}
      className="rounded-full overflow-hidden border border-white"
    >
      <Image
        source={{ uri }}
        style={{ width: size, height: size }}
        resizeMode="cover"
      />
    </View>
  )
}