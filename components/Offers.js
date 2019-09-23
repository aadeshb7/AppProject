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
        return (
            <View style={{ flex: 1, backgroundColor: '#E9E9E9'}}>
                <Swiper style={styles.SwiperStyle} showsPagination={ true } paginationStyle={{ bottom: 5 }} loop={ true }>
                    <View style={styles.ViewTag}>
                        <Image style={{ resizeMode:'contain', width:'100%'}} source={require('./1image.jpg')}></Image>
                    </View>
                    <View style={styles.ViewTag}>
                        <Image style={{ resizeMode:'contain', width: '100%'}} source={require('./2image.jpg')}></Image>
                    </View>
                </Swiper>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    SwiperStyle: {
        width: '100%',
        height:'100%',
        top: 5,
        alignSelf: 'center',
    },
    ViewTag: {
        flex: 1,
        width:'96%',
        alignSelf: 'center',
        alignContent: 'center'
    },
})