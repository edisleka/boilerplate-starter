import { ButtonThemeTypes } from './buttonThemeType'
import { PressableProps } from 'react-native'

export interface ButtonProps extends PressableProps {
  title: string
  theme?: ButtonThemeTypes
  disabled?: boolean
  className?: string
  textClassName?: string
}
