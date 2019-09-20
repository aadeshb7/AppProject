import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground} from 'react-native';
import Swiper from 'react-native-swiper';
import Emoji from 'react-native-emoji';
import openMap from 'react-native-open-maps';


export default class HomeScreen extends React.Component {
    showLocation() {
        openMap({ latitude: 37.865101, longitude: -119.538330 });
      }
    render() {
    return (
        <View style={{ flex: 1, justifyContent: 'space-evenly', justifyContent: 'space-around', backgroundColor: '#F0F0F0'}}>
            <View style={{ flex: 0.25, alignContent: 'center'}}>
                <Swiper style={styles.SwiperStyle} showsPagination={ true } paginationStyle={{ bottom: 5 }} loop={ true }>
                    <View style={styles.ViewTag}>
                        <TouchableOpacity style={styles.Touch} onPress = {() => this.props.navigation.navigate('')}>
                            <Text>Welcome User</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.ViewTag}>
                        <TouchableOpacity style={styles.Touch} onPress = {() => this.props.navigation.navigate('')}>

                        </TouchableOpacity>
                    </View>
                </Swiper>
            </View>
            <View style={{flex:0.48, alignContent: 'center', justifyContent:'space-evenly'}}>
                <View style={{ flex: 0.465, flexDirection: 'row', justifyContent: 'space-evenly'}}>
                    <TouchableOpacity style={styles.TouchBox1} onPress = {() => this.props.navigation.navigate('Transactions')}>
                        <Text style={styles.TextBox}>Your Accounts</Text>
                        <Emoji name= 'moneybag' style={{fontSize:50, textAlign: 'center' }}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.TouchBox2} onPress = {() => this.props.navigation.navigate('Payment')}>
                        <Text style={styles.TextBox}>Transfer and Payments</Text>
                        <Emoji name= 'money_with_wings' style={{fontSize:50, textAlign: 'center' }}/>
                    </TouchableOpacity>
                </View>
                <View style={{ flex: 0.465, flexDirection: 'row', justifyContent:'space-evenly' }}>
                    <TouchableOpacity style={styles.TouchBox1} onPress = {() => this.props.navigation.navigate('Offers')}>
                        <Text style={styles.TextBox}>Everyday Offers</Text>
                        <Emoji name= 'shopping_trolley' style={{fontSize:50, textAlign: 'center' }}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.TouchBox2} onPress ={this.showLocation}>
                        <Text style={styles.TextBox}>ATM/Branch Finder</Text>
                        <Emoji name= 'bank' style={{fontSize:50, textAlign: 'center' }}/>
                    </TouchableOpacity>
                </View>
            </View>
                <View style={{flex:0.3, alignContent: 'center', justifyContent: 'space-evenly',justifyContent:'space-between', }}>
                <View style={{flex: 0.48}}>
                    <TouchableOpacity style={styles.TouchBox3} onPress = {() => this.props.navigation.navigate('Help')}>
                        <Text style={styles.TextBox1}>Help & Information</Text>
                        <Emoji name= 'question' style={{fontSize:50, position: 'absolute', right: 10, top: 10, alignSelf: 'flex-end' }}/>
                    </TouchableOpacity>
                </View>
                <View style={{flex: 0.48, marginBottom: 10}}>
                    <TouchableOpacity style={styles.TouchBox3} onPress = {() => this.props.navigation.navigate('Products')}>
                        <Text style={styles.TextBox1}>Products</Text>
                        <Emoji name= 'credit_card' style={{fontSize:50, position: 'absolute', right: 10, top:10, alignSelf: 'flex-end' }}/>
                    </TouchableOpacity>
                </View>
            </View>
        </View>      
    );
  }
}

const styles = StyleSheet.create({
    SwiperStyle: {
        width: '100%',
        height:'100%',
        top: 2,
        alignSelf: 'center',
    },
    ViewTag: {
        flex: 1,
        width:'99%',
        alignSelf: 'center',
        borderColor: '#D3D3D3',
        borderWidth: 5,
    },
    Touch: {
        flex: 1,
        width:'100%',
        alignSelf: 'center',
        backgroundColor: '#FFFFFF',
    },
    TouchBox1: {
        width: '47%',
        position: 'relative',
        backgroundColor: '#E9ECEE',
        borderColor: '#D3D3D3',
        borderWidth: 5,
    },
    TouchBox2: {
        width: '47%',
        position: 'relative',
        backgroundColor: '#E9ECEE',
        borderColor: '#D3D3D3',
        borderWidth: 5,
    },
    TouchBox3: {
        flex: 1,
        width: '96%',
        alignSelf: 'center',
        backgroundColor: '#E9ECEE',
        borderColor: '#D3D3D3',
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