import React, { Children } from 'react';
import {  Text, TouchableOpacity, StyleSheet } from 'react-native';

const Button = ({func, children}) => {
    return (
        <TouchableOpacity style={style.button} onPress={func}>
            <Text style={style.text}>{children}</Text>
        </TouchableOpacity>
        
    )
}

const style = StyleSheet.create({
    button:{
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: '#fff',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#007aff',
        marginHorizontal: 5,
        paddingVertical: 5

    }, 
    text:{
        alignSelf: "center",
        color: '#007aff',
        fontSize: 16,
        fontWeight: "bold"
    }
})

export default Button;