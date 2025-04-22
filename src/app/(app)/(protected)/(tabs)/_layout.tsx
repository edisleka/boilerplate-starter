import { Tabs } from 'expo-router'
import { View, Text } from 'react-native'
export default function TabsLayout() {
  return (
    <Tabs>
      <Tabs.Screen name='index' />
      <Tabs.Screen name='second' />
      <Tabs.Screen name='third' />
      <Tabs.Screen name='fourth' />
    </Tabs>
  )
}
