import React, { useState } from 'react';
import { View,Text, StyleSheet, TouchableOpacity, Button,FlatList } from 'react-native';
import ColorCounter from '../Components/colorCounter'
const SquareScreen = ()=>{
  const {textStyle,buttonColor,buttonContainer} = styles;
  return <View>
    <ColorCounter />
    <ColorCounter />
    <ColorCounter />
  </View>
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
export default SquareScreen;