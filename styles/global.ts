import { Colors } from "@/constants/Colors";
import { Button, StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
    background:{
        flex:1,
        backgroundColor:Colors.background
    },

    calculatorContainer:{
        flex:1,
        justifyContent:'flex-end'
    },

    mainResult:{
        fontSize:50,
        color:Colors.textPrimary,
        textAlign:'right'
    },

    secondaryResult:{
        fontSize:48,
        color:Colors.textSecondary,
        textAlign:'right'
    },

    buttonRow:{
        flexDirection:'row',
        justifyContent:'center',
        marginBottom:18,
        paddingHorizontal:10
        
    },

    buttonCalculator:{
        width:80,
        height:80,
        borderRadius:100,
        justifyContent:'center',
        marginHorizontal:10,
        
    },    
    

    textButton:{
        fontSize:40,
        textAlign:'center',
        color:Colors.textPrimary,
        
        
    }

     
})