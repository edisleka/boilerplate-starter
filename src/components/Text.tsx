import { Text as RNText } from 'react-native'
import { cn } from '@/utils/cn'
import { TextProps } from '@/types'
import { textSize, colors, textFont } from '@/constants'

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
