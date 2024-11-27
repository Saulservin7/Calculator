import { View, Text } from 'react-native'
import React from 'react'
import { Colors } from '@/constants/Colors'
import { globalStyles } from '@/styles/global'
import ThemeText from '@/components/ThemeText'
import ThemeButton from '@/components/ThemeButton'

export default function CalculatorApp() {
  return (
    <View style={globalStyles.calculatorContainer}>
      
      <ThemeText variant='h1'>10+10</ThemeText>
      <ThemeText variant='h2'>20</ThemeText>

     <View style={globalStyles.buttonRow}>
      <ThemeButton label='AC' color={Colors.lightGray}></ThemeButton>      
      <ThemeButton label='+/-' color={Colors.lightGray}></ThemeButton>      
      <ThemeButton label='%' color={Colors.lightGray}></ThemeButton>      
      <ThemeButton label='÷' color={Colors.orange}></ThemeButton>        
    </View> 
     <View style={globalStyles.buttonRow}>
      <ThemeButton label='7' color={Colors.lightGray}></ThemeButton>      
      <ThemeButton label='8' color={Colors.lightGray}></ThemeButton>      
      <ThemeButton label='9' color={Colors.lightGray}></ThemeButton>      
      <ThemeButton label='x' color={Colors.orange}></ThemeButton>        
    </View> 
     <View style={globalStyles.buttonRow}>
      <ThemeButton label='4' color={Colors.lightGray}></ThemeButton>      
      <ThemeButton label='5' color={Colors.lightGray}></ThemeButton>      
      <ThemeButton label='6' color={Colors.lightGray}></ThemeButton>      
      <ThemeButton label='-' color={Colors.orange}></ThemeButton>        
    </View> 
     <View style={globalStyles.buttonRow}>
      <ThemeButton label='1' color={Colors.lightGray}></ThemeButton>      
      <ThemeButton label='2' color={Colors.lightGray}></ThemeButton>      
      <ThemeButton label='3' color={Colors.lightGray}></ThemeButton>      
      <ThemeButton label='+' color={Colors.orange}></ThemeButton>        
    </View> 
     <View style={globalStyles.buttonRow}>
      <ThemeButton label='0' doubleSize color={Colors.lightGray}></ThemeButton>      
      <ThemeButton label='.' color={Colors.lightGray}></ThemeButton>      
      <ThemeButton label='=' color={Colors.orange}></ThemeButton>        
    </View> 
    
    </View>
  )
}