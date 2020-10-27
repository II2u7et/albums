import React from 'react';
import { View} from 'react-native';
import axios from 'axios';
import AlbumDetail from '../components/AlbumDetail';

class AlbumList extends React.Component {

    
    state = {albums: []};
 

    componentDidMount(){
        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
        .then( res => {
            const list = res.data;
            this.setState({albums: list});

        })
    }

    renderAlbums() {

        return this.state.albums.map( album => <AlbumDetail key={album.title} album={album} />);
    }

    render () {
        return (
            <View>
               
                {this.renderAlbums()}
               
            </View>
        );
    }
}

export default  AlbumList;