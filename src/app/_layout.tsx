import { Stack } from 'expo-router'
import '../../global.css'
import { StatusBar } from 'expo-status-bar'

import * as SplashScreen from 'expo-splash-screen'
import { useFontLoader } from '@/hooks/useFontLoader'
import { useEffect } from 'react'

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync()

const InitialLayout = () => {
  const { fontsLoaded } = useFontLoader()

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync()
    }
  }, [fontsLoaded])

  if (!fontsLoaded) {
    return null
  }

  return (
    <>
      <StatusBar style='auto' />
      <Stack>
        <Stack.Screen name='(app)' options={{ headerShown: false }} />
        <Stack.Screen name='(auth)' options={{ headerShown: false }} />
      </Stack>
    </>
  )
}

const RootLayout = () => {
  return <InitialLayout />
}

export default RootLayout
