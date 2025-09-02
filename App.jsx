import "./global.css"
import { useState } from "react"
import { StatusBar } from "expo-status-bar"
import { GestureHandlerRootView } from "react-native-gesture-handler"
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context"
import { NavigationContainer } from "@react-navigation/native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"

import PeopleScreen from "./src/screens/PeopleScreen"
import JammsScreen from "./src/screens/JammsScreen"
import PlaceholderScreen from "./src/screens/PlaceholderScreen"
import TabBarAdapter from "./src/components/navigation/TabBarAdapter"
import { PostJammModalProvider } from "./src/components/post/PostJammModalContext"
import initialJamms from "./src/data/jamms"

const Tab = createBottomTabNavigator()

export default function App() {
  const [jamms, setJamms] = useState(initialJamms)

  const addJamm = (newJamm) => {
    setJamms((prevJamms) => [newJamm, ...prevJamms])
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider>
        <StatusBar style="dark" />
        <PostJammModalProvider addJamm={addJamm}>
          <NavigationContainer>
            <SafeAreaView style={{ flex: 1 }}>
              <Tab.Navigator screenOptions={{ headerShown: false }} tabBar={(props) => <TabBarAdapter {...props} />}>
                <Tab.Screen name="People" component={PeopleScreen} />
                <Tab.Screen name="Jamms">
                  {(props) => <JammsScreen {...props} jamms={jamms} />}
                </Tab.Screen>
                <Tab.Screen name="Requests" component={PlaceholderScreen} />
                <Tab.Screen name="Chats" component={PlaceholderScreen} />
              </Tab.Navigator>
            </SafeAreaView>
          </NavigationContainer>
        </PostJammModalProvider>
        
      </SafeAreaProvider>
    </GestureHandlerRootView>
  )
}
