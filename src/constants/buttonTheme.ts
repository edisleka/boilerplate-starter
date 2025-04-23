import { ButtonThemeTypes } from '@/types/button/buttonThemeType'

export const buttonTheme: Record<ButtonThemeTypes, string> = {
  primary: 'bg-primary border-primary',
  secondary: 'bg-secondary border-secondary',
  tertiary: 'bg-tertiary border-tertiary',
  accent: 'bg-accent border-accent',
  danger: 'bg-danger border-danger',
  success: 'bg-success border-success',
  warning: 'bg-warning border-warning',
  info: 'bg-info border-info',
  muted: 'bg-muted border-muted',
}
