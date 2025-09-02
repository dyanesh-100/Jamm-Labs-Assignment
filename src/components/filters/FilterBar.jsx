import React from 'react'
import { ScrollView, View } from 'react-native'
import FilterChip from './FilterChip'
import { Ionicons } from '@expo/vector-icons'

export default function FilterBar() {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingHorizontal: 16, paddingBottom: 5, paddingTop: 10, gap: 12 }}
    >
      <FilterChip label="Interests" count={0} />
      <FilterChip label="Age" value="18–29" selected />
      <FilterChip
        label="Gender"
        icon={<Ionicons name="male" size={14} color="#18181b" />}
      />
      <FilterChip label="Under" value="15 km" />
    </ScrollView>
  )
}
