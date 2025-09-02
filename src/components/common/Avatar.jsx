import React from 'react'
import { Image, View, Text } from 'react-native'

export default function Avatar({ uri, size = 32, percentage }) {
  return (
    <View className="relative" style={{ width: size, height: size }}>
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

      {percentage !== undefined && (
        <View
          style={{
            position: 'absolute',
            bottom: -10,          
            right: 2,           
            paddingHorizontal: 6,
            paddingVertical: 0.5,
            borderRadius: 9999,
            backgroundColor: '#dc2626', 
            minWidth: size * 0.5,       
            alignItems: 'center',
            justifyContent: 'center',
            borderWidth: 2,
            borderColor: '#ffffff',
          }}
        >
          <Text
            style={{
              color: 'white',
              fontSize: size * 0.28, 
              fontWeight: '500',
            }}
          >
            {percentage}%
          </Text>
        </View>
      )}
    </View>
  )
}
