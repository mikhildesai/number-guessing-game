import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function LogContainer({round, randomNumber}) {
  return (
    <View style={styles.logContainer}>
      <Text>#{round}</Text>
      <Text>Opponent's Guess {randomNumber}</Text>
    </View>
  )
}

const styles=StyleSheet.create({
    logContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        backgroundColor:'white',
        color:'black',
        
        borderRadius:100,
        marginHorizontal:20,
        marginVertical:5,
        
        padding:20
    }
})