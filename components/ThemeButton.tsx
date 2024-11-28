import {  Pressable,Text } from 'react-native'
import React from 'react'
import { globalStyles } from '@/styles/global';
import { Colors } from '@/constants/Colors';
import * as Haptics from 'expo-haptics';

interface Props{
    label:string,
    color:string,
    doubleSize?:boolean,

    onPress:()=>void;
}

const ThemeButton = ({label,color,doubleSize=false,onPress}:Props) => {
  return (
    <Pressable 
    style={({pressed})=>({
        ...globalStyles.buttonCalculator,
        backgroundColor:color,
        opacity:pressed? 0.8:1,
        width:doubleSize?180:80
    })
    }

    onPress={()=>{
        Haptics.selectionAsync();
        onPress();
    }}
    >
    <Text style={globalStyles.textButton}>{label}</Text>
    </Pressable >
    
    
  )
}

export default ThemeButton