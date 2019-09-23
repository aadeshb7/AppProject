import React, { Component } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, BackHandler, Alert, ImageBackground, Image} from 'react-native';
import Swiper from 'react-native-swiper';



export default class Profile extends Component {
    onButtonPress(){
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
        // then navigate
        navigate('Home');
      }
      handleBackButton = () => {
        this.props.navigation.navigate('Home')
        return true;
      } 
      componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
      }
      componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
      }
    render() {
        let Image_Http_URL = { uri: 'https://advisors.nbfwm.ca/advisorcontent/advisors/s/waltersilicz%2Fproduct%20wheel.png'};
        return (
            <View style={{flex: 1}}>
                <Text style={{top: 5, fontSize: 45, fontFamily: 'arial', fontWeight: 'bold', textAlign: 'center', color: '#E61010'}}>Our Products & Services</Text>
                <Image  source={Image_Http_URL} style={{ resizeMode:'contain', flex: 1}}/>
            </View>    
                
        );
    }
}
