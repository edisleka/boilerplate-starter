import { TextSize } from '@/types/text/textSizeTypes'
import { TextColor } from '@/types/text/textColorTypes'
import { TextFont } from '@/types/text/textFontTypes'

export interface TextProps {
  children: React.ReactNode
  size?: TextSize
  bold?: boolean
  color?: TextColor
  font?: TextFont
  className?: string
}
