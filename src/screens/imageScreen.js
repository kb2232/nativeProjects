import React from 'react';
import { Text,View, StyleSheet } from 'react-native';
import ImageDetail from '../Components/imageDetails';
const ImageScreen = props =>{
  const {textStyle} = styles;
  return(
    <View>
      <ImageDetail description="Forest" imageSrc={require('../../assets/forest.jpg')} />
      <ImageDetail description="Food" imageSrc={require('../../assets/beach.jpg')} />
      <ImageDetail description="Money" imageSrc={require('../../assets/mountain.jpg')} />
    </View>
  )
}

const styles = StyleSheet.create({
  textStyle:{
    fontSize:20
  },
});

export default ImageScreen;