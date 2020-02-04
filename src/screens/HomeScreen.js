import React from 'react';
import { Text,View, StyleSheet, TouchableOpacity, Button } from 'react-native';

const HomeScreen = props => {
  //console.log({props})
  const {Container, text,buttonContainer,buttonColor} = styles;
  return (
    <View style={Container}>
      <Text style={text}>
        Home Screen - My name is Kunle Babatunde. I am learning react native.
      </Text>
      <Button 
      title="Counter"
      onPress={()=>props.navigation.navigate('CounterScreen')}
      />
      <Button 
      title="Color Screen"
      onPress={()=>props.navigation.navigate('ColorScreen')}
      />
     <Button 
      title="Square Screen"
      onPress={()=>props.navigation.navigate('SquareScreen')}
      />
      <TouchableOpacity  onPress={()=>props.navigation.navigate('ListS')} style={buttonContainer}>
        <Text style={text,buttonColor}>List</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    flexDirection:'column',
    display:"flex",
    justifyContent:"flex-start",
    alignContent:"center",
    minHeight:"100%"
  },
  text:{
    fontSize: 20,
    margin:5
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

export default HomeScreen;
