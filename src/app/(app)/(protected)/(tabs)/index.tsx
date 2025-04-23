import { View } from 'react-native'
import { Text } from '@/components/Text'
import { Button } from '@/components/Button'
export default function Index() {
  return (
    <View className='flex-1 justify-center'>
      <Text size='medium'>Edit app/index.tsx to edit this screen.</Text>
      <Button title='Button' onPress={() => console.log('Button pressed')} />
    </View>
  )
}
