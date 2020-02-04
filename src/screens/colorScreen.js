import React, { useState } from 'react';
import { View,Text, StyleSheet, TouchableOpacity, Button,FlatList } from 'react-native';

const ColorSelect = props =>{
  let [colour, setColour] = useState('rgb(0,255,0)');
  let [colours, setColours] = useState([]);
  const {textStyle,buttonColor,buttonContainer} = styles;
  return(
    <View>
      <Button 
      title="Random Color"
      onPress = {()=>setColour(randomRGB())}
      />
      <View 
      style={{width:100,height:100,backgroundColor:colour}}></View>
      <Button 
          title="Add a Color"
          onPress = {()=>setColours([...colours, randomRGB()])}
          />
      <FlatList
        data={colours}
        keyExtractor ={item=>item}
        renderItem={({item})=>{
          return(
            <View 
              style={{width:50,height:50,backgroundColor:item}}></View>
          )
        }}
      />

      <TouchableOpacity  onPress={()=>props.navigation.navigate('Home')} style={buttonContainer}>
        <Text style={textStyle,buttonColor}>Home Page</Text>
      </TouchableOpacity>
    </View>
  )
}
const randomRGB = ()=>{
  const red = Math.floor(Math.random()*256);
  const green = Math.floor(Math.random()*256);
  const blue =Math.floor(Math.random()*256);
  return `rgb(${red},${green},${blue})`
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
export default ColorSelect;