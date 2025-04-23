import { Stack } from 'expo-router'
export default function AppLayout() {
  return (
    <Stack>
      <Stack.Screen name='(protected)' options={{ headerShown: false }} />
    </Stack>
  )
}
