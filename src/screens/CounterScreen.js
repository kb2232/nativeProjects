import React, { useState } from 'react';
import { Text,View, StyleSheet, TouchableOpacity } from 'react-native';

const CounterScreen = props =>{

  let [counter,setCounter] = useState(0);

  const {textStyle,buttonContainer,buttonColor} = styles;
  return(
    <View>
      <Text style={textStyle}>{counter}</Text>
      <TouchableOpacity  
      onPress={()=>setCounter(counter+1)} 
      style={buttonContainer}>
        <Text style={textStyle,buttonColor}>add one</Text>
      </TouchableOpacity>
      <TouchableOpacity  
      onPress={()=>setCounter(counter-1)} 
      style={buttonContainer}>
        <Text style={textStyle,buttonColor}>minus one</Text>
      </TouchableOpacity>
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

export default CounterScreen;