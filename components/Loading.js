import React, { Component } from 'react';
import { Text, View, Alert, ImageBackground, StyleSheet } from 'react-native';
import { Image } from 'react-native-elements';
import Emoji from 'react-native-emoji';

export default class Loading extends Component {
    componentDidMount() {
        setTimeout(() => {
           this.load();
              }, 4000);
        }
    
       load = () => {
        Alert.alert(
            'Transaction Successful',
            '',
            [
                { 
                    text: "Ok",
                    onPress: () => {this.props.navigation.navigate('Home');}
                },
            ],
            {
                cancelable: false 
            }
        )
            
        };
    render() {
        const { navigate } = this.props.navigation
        return (
            <ImageBackground style={{ flex: 1, width: null, height: null, resizeMode: 'cover'}} source={{uri: 'https://stmed.net/sites/default/files/monument-valley-wallpapers-27958-1338221.jpg' }}>
                <View style={{flex: 1}}>
                <Text style={{top: '50%', fontSize: 45, fontFamily: 'arial', fontWeight: 'bold', textAlign: 'center', color: '#E61010'}}>Transaction still in Process...</Text>
                <Emoji name= 'thinking_face' style={{fontSize:80, textAlign: 'center' }}/>
            </View> 
            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
    WelcomeText: {
        textAlign: 'center',
        fontSize: 70,
        color: '#E61010', 
        fontWeight: 'bold',
        fontStyle: 'italic',
    },
})