import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert, BackHandler, Image, Linking, Platform} from 'react-native';
import Swiper from 'react-native-swiper';
import Emoji from 'react-native-emoji';
import openMap from 'react-native-open-maps';
import LinearGradient from 'react-native-linear-gradient';
import { Divider } from 'react-native-elements';

export default class HomeScreen extends React.Component {
    showLocation() {
        openMap({ query:"51.504306, -0.116165", provider: 'google', zoom:2});
      }

      helpAlert(){
        Alert.alert(
            'Contact Help Center',
            'Get in Touch to Help Team via',
            [
                { 
                    text: "Call",
                    onPress: () => {Linking.openURL('tel:123456789')}
                },
                { 
                    text: "Chat",
                },
            ],
            {
                cancelable: true 
            }
        )
      }

    onButtonPress(){
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
    // then navigate
    navigate('Home');
    }

    componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
    }
    
    componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
    }

    handleBackButton = () => {
    Alert.alert(
        'Exit App',
        'Exiting the application?', [{
            text: 'Cancel',
            style: 'cancel'
        }, {
            text: 'OK',
            onPress: () => BackHandler.exitApp()}], 
            {
                cancelable: false
        })
        return true;
    } 

    render() {
    return (
        <LinearGradient colors={['#12C2E9', '#C471ED']} style={{ flex:1 }}>
        <View style={{ flex: 1, justifyContent: 'space-evenly', justifyContent: 'space-around'}}>
            <View style={{ flex: 0.25, alignContent: 'center'}}>
                <Swiper style={styles.SwiperStyle} showsPagination={ true } paginationStyle={{ bottom: 5 }} loop={ true }>
                    <View style={styles.ViewTag}>
                        <TouchableOpacity activeOpacity={0.4} style={styles.Touch} onPress = {() => this.props.navigation.navigate('Transactions')}>
                            <Text style={{fontSize: 37, fontFamily: 'times new roman', marginLeft: 10, top: 15}}>Welcome User</Text>
                            <Divider style={{ backgroundColor: 'black', height: 3, top :25, width: '80%', marginLeft: 8}}/>
                            <Text style={{fontSize: 28, fontFamily: 'times new roman', marginLeft: 10, top: 35}}>Your A/C Balance is £ 2304.04</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.ViewTag}>
                        <TouchableOpacity activeOpacity={0.4} style={styles.Touch} onPress = {() => this.props.navigation.navigate('Cards')}>
                            <Image style={{ flex: 1, width: null, height: null, resizeMode: 'stretch'}} source={{uri: 'https://www.pymnts.com/wp-content/uploads/2017/06/Credit-Cards-Stack.jpg'}}/>
                        </TouchableOpacity>
                    </View>
                </Swiper>
            </View>
            <View style={{flex:0.47, alignContent: 'center', justifyContent:'space-evenly'}}>
                <View style={{ flex: 0.45, flexDirection: 'row', justifyContent: 'space-evenly'}}>
                    <TouchableOpacity activeOpacity={0.7} style={styles.TouchBox1} onPress = {() => this.props.navigation.navigate('Profile')}>                        
                        <Text style={styles.TextBox}>Your Profile</Text>
                        <Emoji name= 'smile' style={{top: '20%', fontSize:50, textAlign: 'center' }}/>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.7} style={styles.TouchBox2} onPress = {() => this.props.navigation.navigate('Payment')}>
                        <Text style={styles.TextBox}>Transfer and Payments</Text>
                        <Emoji name= 'money_with_wings' style={{fontSize:50, textAlign: 'center' }}/>
                    </TouchableOpacity>
                </View>
                <View style={{ flex: 0.45, flexDirection: 'row', justifyContent:'space-evenly' }}>
                    <TouchableOpacity activeOpacity={0.7} style={styles.TouchBox1} onPress = {() => this.props.navigation.navigate('Offers')}>
                        <Text style={styles.TextBox}>Everyday Offers</Text>
                        <Emoji name= 'shopping_trolley' style={{fontSize:50, textAlign: 'center' }}/>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.7} style={styles.TouchBox2} onPress ={this.showLocation}>
                        <Text style={styles.TextBox}>ATM/Branch Finder</Text>
                        <Emoji name= 'bank' style={{fontSize:50, textAlign: 'center' }}/>
                    </TouchableOpacity>
                </View>
            </View>
                <View style={{flex:0.3, alignContent: 'center', justifyContent: 'space-evenly',justifyContent:'space-between', }}>
                <View style={{flex: 0.48}}>
                    <TouchableOpacity activeOpacity={0.7} style={styles.TouchBox3} onPress = {this.helpAlert}>
                        <Text style={styles.TextBox1}>Help & Information</Text>
                        <Emoji name= 'question' style={{fontSize:50, position: 'absolute', right: 10, top: 10, alignSelf: 'flex-end' }}/>
                    </TouchableOpacity>
                </View>
                <View style={{flex: 0.48, marginBottom: 10}}>
                    <TouchableOpacity activeOpacity={0.7} style={styles.TouchBox3} onPress = {() => this.props.navigation.navigate('Products')}>
                        <Text style={styles.TextBox1}>Products</Text>
                        <Emoji name= 'credit_card' style={{fontSize:50, position: 'absolute', right: 10, top:10, alignSelf: 'flex-end' }}/>
                    </TouchableOpacity>
                </View>
            </View>
        </View>   
        </LinearGradient>   
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
        borderColor: '#959595',
        borderWidth: 5, 
    },
    Touch: {
        flex: 1,
        width:'100%',
        alignSelf: 'center',
    },
    TouchBox1: {
        width: '47%',
        position: 'relative',
        borderColor: '#959595',
        borderWidth: 5,
    },
    TouchBox2: {
        width: '47%',
        position: 'relative',
        borderColor: '#959595',
        borderWidth: 5,
    },
    TouchBox3: {
        flex: 1,
        width: '96%',
        alignSelf: 'center',
        borderColor: '#959595',
        borderWidth: 5,
    },
    TextBox: {
        textAlign: 'center',
        fontFamily: 'times new roman',
        fontSize: 30,
    },
    TextBox1: {
        position: 'absolute',
        marginLeft: 10,
        top:25,
        textAlign: 'left',
        fontFamily: 'times new roman',
        fontSize: 30,
    }
  })