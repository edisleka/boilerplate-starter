import { Stack } from 'expo-router'
import '../../global.css'
import * as SplashScreen from 'expo-splash-screen'
import { useFontLoader } from '@/hooks/useFontLoader'

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync()

const InitialLayout = () => {
  const { fontsLoaded } = useFontLoader()

  if (!fontsLoaded) {
    return null
  }

  return (
    <Stack>
      <Stack.Screen name='(app)' options={{ headerShown: false }} />
      <Stack.Screen name='(auth)' options={{ headerShown: false }} />
    </Stack>
  )
}

const RootLayout = () => {
  return <InitialLayout />
}

export default RootLayout
