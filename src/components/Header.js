import React from 'react';
import {Text, StyleSheet, View} from 'react-native';

const Header = (props) => (
  <View style={style.view}>
    <Text style={style.text}>{props.title}</Text>
  </View>
);

const style = StyleSheet.create({
  text: {
    fontSize: 20,
    fontWeight: "bold",
    margin: 20, 
    color: '#ffffff'
  },
  view: {
    backgroundColor: '#18c469',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 10,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 10},
    shadowOpacity: 0.5,
    elevation: 2,
    position: 'relative'

  },
});

export default Header;
