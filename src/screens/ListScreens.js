import React from 'react';
import { Text,View, StyleSheet, FlatList, Button } from 'react-native';

const ListScreens = (props)=>{
  const friends = [
    {name:'friends 1'},
    {name:'friends 2'},
    {name:'friends 3'},
    {name:'friends 4'},
    {name:'friends 5'},
    {name:'friends 6'},
    {name:'friends 7'},
    {name:'friends 8'}, 
    {name:'friends 9'},
    {name:'friends 12'},
    {name:'friends 13'},
    {name:'friends 14'},
    {name:'friends 15'},
    {name:'friends 16'},
    {name:'friends 17'},
    {name:'friends 18'}
  ]
  const {textStyle} = styles;
  return(
    <View>
      <Button
        onPress={()=>props.navigation.navigate('CompS')}
        title="Component"
      />
      <Button
        onPress={()=>props.navigation.navigate('Home')}
        title="Home"
      />
      <FlatList data={friends}
      keyExtractor = {friends=>friends.name}
      renderItem={({item})=>{
        return(
        <Text style={textStyle}>{item.name}</Text> // el === {item:{name:'friends 1'}, index:0}
        )
      }} />
    </View>
  )
}
const styles = StyleSheet.create({
  textStyle:{
    fontSize:20,
    marginVertical:10
  }
})
export default ListScreens;