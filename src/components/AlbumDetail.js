import React from 'react';
import { View, Text, StyleSheet, Image, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const AlbumDetail = ({album}) => {

    const {title, artist, thumbnail_image, image, url} = album;

    return (
      
    <Card>

        <CardSection>

            <View style={style.thumbnail}>
                <Image style={style.image} source={{uri: thumbnail_image}} />
            </View>

            <View style={style.header}>
                <Text style={style.title}>{title}</Text>
                <Text style={style.text}>{artist}</Text>
            </View>

        </CardSection>


        <CardSection>
            <Image style={style.album} source={{uri: image}}/>
        </CardSection>


        <CardSection>
            <Button func={() => Linking.openURL(url)}>
                More details...
            </Button> 
        </CardSection>
    </Card>
    )
}

const style = StyleSheet.create({
    title : {
        color: '#3e3d3f',
        fontWeight: "bold"
    },
    text:{
        color: '#3e3d3f'
    },
    header:{
        flexDirection: 'column',
        justifyContent: 'space-around'
    }, 
    image:{
        height: 50,
        width: 50
    },
    thumbnail: {
        justifyContent: "center",
        alignItems: "center",
        marginLeft: 10,
        marginRight: 10
    },
    album:{
        height: 300,
        flex: 1,
        width: null
    }
})

export default AlbumDetail;