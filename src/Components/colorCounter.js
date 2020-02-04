import React, { useState } from 'react';
import { View,Text, StyleSheet, TouchableOpacity, Button,FlatList } from 'react-native';

const ColorCounter = ({color, onIncrease, onDecrease})=>{
  const {textStyle,buttonColor,buttonContainer} = styles;
  return (
    <View>
      <Text>{color}</Text>
      <Button 
        onPress={()=>onIncrease()}
        title={`increase ${color}`}
      />
      <Button 
        onPress={()=>onDecrease()}
        title={`decrease ${color}`}
      />
    </View>
  )
}
const styles = StyleSheet.create({
  textStyle:{
    fontSize:20
  },
  buttonColor:{
    color:'blue',
    borderColor:'black',
    borderWidth:1,
    width:100,
    textAlign:'center'
  },
  buttonContainer:{
    marginTop:10,
    display:"flex",
    flexDirection:'row',
    justifyContent:"center",
    alignContent:"center"
  }
});
export default ColorCounter;