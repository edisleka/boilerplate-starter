import { Tabs } from 'expo-router'
import { MaterialCommunityIcons } from '@expo/vector-icons'
export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: 'teal',
      }}
    >
      <Tabs.Screen
        name='index'
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name='numeric-1-box-outline'
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name='second'
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name='numeric-2-box-outline'
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name='third'
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name='numeric-3-box-outline'
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name='fourth'
        options={{
          headerShown: false,
          tabBarBadge: 2,
          tabBarBadgeStyle: {
            backgroundColor: 'teal',
            color: 'white',
          },
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name='numeric-4-box-outline'
              size={size}
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  )
}
