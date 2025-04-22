import { useFonts } from 'expo-font'

export const useFontLoader = () => {
  const [fontsLoaded] = useFonts({
    'Rubik-Regular': require('../../assets/fonts/Rubik-Regular.ttf'),
    'Rubik-Bold': require('../../assets/fonts/Rubik-Bold.ttf'),
    'Rubik-Medium': require('../../assets/fonts/Rubik-Medium.ttf'),
    'Rubik-Light': require('../../assets/fonts/Rubik-Light.ttf'),
  })

  return { fontsLoaded }
}
