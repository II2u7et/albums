import React from 'react';
import {Text, StyleSheet, View} from 'react-native';

const CardSection = (props) => 
    <View style={style.container}>
        {props.children}
    </View>

const style = StyleSheet.create({
    container:{
        borderBottomWidth: 3,
        padding: 5,
        backgroundColor: '#924ace',
        justifyContent: "flex-start",
        flexDirection: "row",
        borderColor: '#aa7ece',
        position: 'relative'
    }
})

export default CardSection;