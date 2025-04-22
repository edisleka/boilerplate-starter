import { Stack } from 'expo-router'
import { useFonts } from 'expo-font'
import '../../global.css'
import * as SplashScreen from 'expo-splash-screen'
import { useEffect } from 'react'

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync()

const InitialLayout = () => {
  const [fontsLoaded] = useFonts({
    'Rubik-Regular': require('../../assets/fonts/Rubik-Regular.ttf'),
    'Rubik-Bold': require('../../assets/fonts/Rubik-Bold.ttf'),
    'Rubik-Medium': require('../../assets/fonts/Rubik-Medium.ttf'),
    'Rubik-SemiBold': require('../../assets/fonts/Rubik-SemiBold.ttf'),
    'Rubik-Light': require('../../assets/fonts/Rubik-Light.ttf'),
    'Rubik-ExtraBold': require('../../assets/fonts/Rubik-ExtraBold.ttf'),
    'Rubik-Black': require('../../assets/fonts/Rubik-Black.ttf'),
  })

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync()
    }
  }, [fontsLoaded])

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
