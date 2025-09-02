import React from 'react'
import { View, FlatList, Pressable, Text } from 'react-native'
import TopBar from '../components/header/TopBar'
import FilterBar from '../components/filters/FilterBar'
import PersonCard from '../components/people/PersonCard'
import BottomTabBar from '../components/navigation/BottomTabBar'
import people from '../data/people';
import { openPostJammModal } from "../components/post/PostJammModalContext"

export default function PeopleScreen() {
  return (
    <View className="flex-1 bg-zinc-50">
      <FlatList
        data={people}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <PersonCard person={item} />}
          ListHeaderComponent={
            <View>
              <TopBar />
              <FilterBar />
            </View>
          }
          contentContainerStyle={{ paddingBottom: 140, paddingTop: 4, gap: 12  }}
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
            {'Post a '}
            <Text className="text-pink-500 font-semibold">{'JAMM'}</Text>
          </Text>
        </Pressable>
        
        <BottomTabBar />
      </View>
    );
}
