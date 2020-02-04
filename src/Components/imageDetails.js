import React from 'react';
import { Text,View, StyleSheet, Image } from 'react-native';

const BigImage = props =>{
  return(
    <Image 
    source={props.imageSrc} 
    style={imageContainer} />
  )
}

const ImageDetails = props =>{
  const {textStyle,viewContainer,imageContainer} = styles;
  return(
    <View style={viewContainer}>
      <Image source={props.imageSrc} style={imageContainer} />
      
      <Text style={textStyle}>
       {props.description}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  textStyle:{
    fontSize:20
  },
  imageContainer:{
    width:50,
    height:50,
    marginRight:5,
    marginBottom:5,
    marginTop:5
  },
  viewContainer:{
    display:'flex',
    flexDirection:"row",
    justifyContent:"flex-start",
    alignItems:"center"
  }
});

export default ImageDetails;