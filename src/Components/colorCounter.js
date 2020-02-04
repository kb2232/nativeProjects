import React, { useState } from 'react';
import { View,Text, StyleSheet, TouchableOpacity, Button,FlatList } from 'react-native';

const ColorCounter = ()=>{
  const {textStyle,buttonColor,buttonContainer} = styles;
  return (
    <View>
      <View 
      style={{width:50,height:50,backgroundColor:'rgb(0,255,250)'}}></View>
      <Button 
        title="increase red"
      />
      <Button 
        title="decrease red"
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