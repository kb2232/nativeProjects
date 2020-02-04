import React, { useState } from 'react';
import { View,Text, StyleSheet, TouchableOpacity, Button,FlatList } from 'react-native';
import ColorCounter from '../Components/colorCounter'
const COLOR_INCR = 15;

const SquareScreen = ()=>{

  let [red,setRed] = useState(0);
  let [blue,setBlue] = useState(0);
  let [green,setGreen] = useState(0);

  const colorChange=(color, clrchange)=>{
    if(color==='red'){
      if(red+clrchange>255 || red+clrchange<0) return;
      else setRed(red+clrchange);
    }
    if(color==='green'){
      if(green+clrchange>255 || green+clrchange<0) return;
      else setGreen(green+clrchange);
    }
    if(color==='blue'){
      if(blue+clrchange>255 || blue+clrchange<0) return;
      else setBlue(blue+clrchange);
    }
  }


  const {textStyle,buttonColor,buttonContainer} = styles;
  return (
  <View>
    <View style={{width:100, height:100, backgroundColor:`rgb(${red},${green},${blue})`}}></View>
    <ColorCounter 
    onIncrease={()=>colorChange('red', COLOR_INCR)}
    onDecrease={()=>colorChange('red', -1*COLOR_INCR)}
    color="red" />
    <ColorCounter 
     onIncrease={()=>colorChange('green',COLOR_INCR)}
     onDecrease={()=>colorChange('green',-1*COLOR_INCR)}
      color="green" />
    <ColorCounter 
    onIncrease={()=>colorChange('blue',COLOR_INCR)}
    onDecrease={()=>colorChange('blue',-1*COLOR_INCR)}
    color="blue" />

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
export default SquareScreen;