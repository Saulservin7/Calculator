import { View, Text } from 'react-native'
import React from 'react'
import { Colors } from '@/constants/Colors'
import { globalStyles } from '@/styles/global'
import ThemeText from '@/components/ThemeText'
import ThemeButton from '@/components/ThemeButton'
import { useCalculator } from '@/hooks/usecalculator'

export default function CalculatorApp() {

    const {buildNumber,prevNum,formula,calculateResult,clean,changeSign,divideOperation,multiplyOperation,addOperation,subtractOperation}=useCalculator();

  return (
    <View style={globalStyles.calculatorContainer}>
      
      <ThemeText variant='h1'>{formula}</ThemeText>
      {formula === prevNum ? (
          <ThemeText variant="h2"> </ThemeText>
        ) : (
          <ThemeText variant="h2">{prevNum}</ThemeText>
        )}

     <View style={globalStyles.buttonRow}>
      <ThemeButton onPress={()=>{clean()}} label='AC' color={Colors.lightGray}></ThemeButton>      
      <ThemeButton onPress={()=>{changeSign()}} label='+/-' color={Colors.lightGray}></ThemeButton>      
      <ThemeButton onPress={()=>{buildNumber('%')}} label='%' color={Colors.lightGray}></ThemeButton>      
      <ThemeButton onPress={()=>{divideOperation()}} label='÷' color={Colors.orange}></ThemeButton>        
    </View> 
     <View style={globalStyles.buttonRow}>
      <ThemeButton onPress={()=>{buildNumber('7')}}label='7' color={Colors.lightGray}></ThemeButton>      
      <ThemeButton onPress={()=>{buildNumber('8')}}label='8' color={Colors.lightGray}></ThemeButton>      
      <ThemeButton onPress={()=>{buildNumber('9')}}label='9' color={Colors.lightGray}></ThemeButton>      
      <ThemeButton onPress={()=>{multiplyOperation()}}label='x' color={Colors.orange}></ThemeButton>        
    </View> 
     <View style={globalStyles.buttonRow}>
      <ThemeButton onPress={()=>{buildNumber('4')}}label='4' color={Colors.lightGray}></ThemeButton>      
      <ThemeButton onPress={()=>{buildNumber('5')}}label='5' color={Colors.lightGray}></ThemeButton>      
      <ThemeButton onPress={()=>{buildNumber('6')}}label='6' color={Colors.lightGray}></ThemeButton>      
      <ThemeButton onPress={()=>{subtractOperation()}}label='-' color={Colors.orange}></ThemeButton>        
    </View> 
     <View style={globalStyles.buttonRow}>
      <ThemeButton onPress={()=>{buildNumber('1')}}label='1' color={Colors.lightGray}></ThemeButton>      
      <ThemeButton onPress={()=>{buildNumber('2')}}label='2' color={Colors.lightGray}></ThemeButton>      
      <ThemeButton onPress={()=>{buildNumber('3')}}label='3' color={Colors.lightGray}></ThemeButton>      
      <ThemeButton onPress={()=>{addOperation()}}label='+' color={Colors.orange}></ThemeButton>        
    </View> 
     <View style={globalStyles.buttonRow}>
      <ThemeButton onPress={()=>{buildNumber('0')}}label='0' doubleSize color={Colors.lightGray}></ThemeButton>      
      <ThemeButton onPress={()=>{buildNumber('.')}}label='.' color={Colors.lightGray}></ThemeButton>      
      <ThemeButton onPress={()=>{calculateResult()}}label='=' color={Colors.orange}></ThemeButton>        
    </View> 
    
    </View>
  )
}