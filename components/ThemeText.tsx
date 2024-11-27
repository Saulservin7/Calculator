import { View, Text, TextProps } from 'react-native'
import React, { Children } from 'react'
import { globalStyles } from '@/styles/global'

interface Props extends TextProps{
variant?:'h1' |'h2'

}

const ThemeText = ({children,variant='h1', ... rest}:Props) => {
  return (

      <Text
      style={[
        variant==='h1' && globalStyles.mainResult,
        variant==='h2' && globalStyles.secondaryResult]
    }
      numberOfLines={1}
      adjustsFontSizeToFit
        >
        {children}
        
        </Text>

  )
}

export default ThemeText