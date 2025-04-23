import { TextSize } from '@/types/text/textSizeTypes'
import { ColorType } from '@/types/colorType'
import { TextFont } from '@/types/text/textFontTypes'

export interface TextProps {
  children: React.ReactNode
  size?: TextSize
  bold?: boolean
  color?: ColorType
  font?: TextFont
  className?: string
}
