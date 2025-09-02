import BottomTabBar from "./BottomTabBar"

export default function TabBarAdapter({ state, navigation }) {
  const activeTab = state.routeNames[state.index]
  return <BottomTabBar activeTab={activeTab} onTabChange={(routeName) => navigation.navigate(routeName)} />
}
