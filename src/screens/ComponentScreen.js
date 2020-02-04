import React from 'react';
import { Text,View, StyleSheet, Button } from 'react-native';

const ComponentScreen = (props)=>{
  return(
    <View>
      <Button 
        title="image screen"
        onPress={()=>props.navigation.navigate('ImageList')}
      />
      <Text style={styles.textStyle}>
        This the component Section 0
      </Text>
      <Text style={styles.textStyle}>
        This the component Section 1
      </Text>
    </View>
  )
}
const styles = StyleSheet.create({
  textStyle:{
    fontSize:20
  },
  Button:{
    width:50
  }
})
export default ComponentScreen;