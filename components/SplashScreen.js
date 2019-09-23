import React, { Component } from 'react';
import { Text, View, Alert, ImageBackground, StyleSheet } from 'react-native';
import Emoji from 'react-native-emoji';

export default class SplashScreen extends Component {
    componentDidMount() {
        setTimeout(() => {
           this.load();
              }, 1250);
        }
    
       load = () => {
            this.props.navigation.navigate('Authentication');
        };
    render() {
        const { navigate } = this.props.navigation
        return (
            <ImageBackground style={{ flex: 1, width: null, height: null, resizeMode: 'cover'}} source={{uri: 'https://stmed.net/sites/default/files/monument-valley-wallpapers-27958-1338221.jpg' }}>
                <View style={{ top:'20%', justifyContent : 'center', alignContent:'center', alignItems:'center' }}>
                    <Emoji name= 'bank' style={{fontSize: 170, textAlign: 'center'}}/>
                </View>
                <View style={{ top:'22%'}}>
                    <Text style={ styles.WelcomeText}>TEAM 28
                    BANK</Text>
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