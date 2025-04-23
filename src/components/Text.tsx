import { Text as RNText } from 'react-native'
import { cn } from '@/utils/cn'
import { TextProps } from '@/types/text/textProps'
import { textSize } from '@/constants/textSize'
import { colors } from '@/constants/colors'
import { textFont } from '@/constants/textFont'

export const Text = ({
  children,
  size = 'medium',
  bold = false,
  color = 'primary',
  font = 'regular',
  className,
}: TextProps) => {
  return (
    <RNText
      className={cn(
        textSize[size],
        textFont[font],
        bold && 'font-rubik-bold',
        colors[color],
        className
      )}
    >
      {children}
    </RNText>
  )
}
