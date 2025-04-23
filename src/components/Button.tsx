import { Pressable, PressableProps, Text } from 'react-native'
import { cn } from '../utils/cn'
import React from 'react'
import { ButtonProps } from '@/types/button/buttonProps'
import { buttonTheme } from '@/constants/buttonTheme'
import { textButtonTheme } from '@/constants/textButtonTheme'
export const Button = React.forwardRef<
  React.ComponentRef<typeof Pressable>,
  ButtonProps
>(
  (
    { title, theme = 'primary', disabled, className, textClassName, ...rest },
    ref
  ) => {
    return (
      <Pressable
        ref={ref}
        className={cn(
          'flex-row items-center justify-center rounded-md px-5 py-3 mb-4 border',
          buttonTheme[theme],
          disabled && 'opacity-50',
          className
        )}
        disabled={disabled}
        {...rest}
      >
        <Text
          className={cn(
            'font-semibold text-lg tracking-wider font-rubik-regular',
            textButtonTheme[theme],
            textClassName
          )}
        >
          {title}
        </Text>
      </Pressable>
    )
  }
)
