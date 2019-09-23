import React, { Component } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, BackHandler, Alert, ImageBackground} from 'react-native';
import Emoji from 'react-native-emoji';

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
                <Text style={{ fontSize: 28, textAlign: 'center'}}>Your Profile and Contact Details</Text>
                <Emoji name='boy' style={{fontSize: 120, textAlign:'center'}}/>
                <View style={{ flex:1, top:'10%', backgroundColor: '#CFCFCF' }}>
                    <Text style={[styles.Headings,{top:10}]}>{`Name: XYZ\nAccount Number: 123456789`}</Text>
                    <Text style={styles.Headings}>{`\nContact Details:`}</Text>
                    <Text style={styles.Headings1}>{`Mobile No.:    `} 
                        <Text style={{ fontFamily: 'arial', fontWeight: 'normal'}}>{` 9876543210`}</Text>
                    </Text>
                    <Text style={styles.Headings1}>{`Address:            `}
                        <Text style={{ fontFamily: 'arial', fontWeight: 'normal'}}>{`XYZ, ABC ROAD, LMN`}</Text>
                    </Text>
                    <Text style={styles.Headings1}>{`EmailId:             `}
                        <Text style={{ fontFamily: 'arial', fontWeight: 'normal'}}>{`abd@xyz.com`}</Text>
                    </Text>
                </View>
            </View>
        );
    }
}

const styles= StyleSheet.create({
    Headings: {
        fontSize: 25,
        marginLeft: 15,
        fontFamily: 'arial',
        fontWeight: 'bold',
    },
    Headings1: {
        fontSize: 20,
        marginLeft: 40,
        fontFamily: 'arial',
        fontWeight: 'bold',
    }
}
)