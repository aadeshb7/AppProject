import React, { Component } from 'react';
import { Text, View, Alert, ImageBackground } from 'react-native';
import PinView from 'react-native-pin-view'

export default class Authentication extends Component {
  constructor(props) {
    super(props);
    this.onComplete = this.onComplete.bind(this);
    this.state = {
        pin: "123456"
    }
  }
  onComplete(inputtedPin, clear) {
    if (inputtedPin!==this.state.pin){
      clear();
      Alert.alert("Pin is Incorrect",'Please Enter the Correct Pin',[{text:'Ok'}])
    } else {
        clear();
        Alert.alert("Pin is correct",'Click Proceed to Continue',[{text:'proceed', onPress:() => this.props.navigation.navigate('Home')}])
    }
  }
  render() {
    return (
        <ImageBackground style={{ flex: 1, width: null, height: null, resizeMode: 'cover'}} source={{uri: 'https://stmed.net/sites/default/files/monument-valley-wallpapers-27958-1338221.jpg' }}>
            <View style={{ top:'30%', justifyContent : 'center', alignContent:'center', alignItems:'center' }}>
                <Text style={{ fontSize:80, fontFamily: 'monospace', textAlign: 'center', color: '#E61010'}}>Login</Text>
                <View style={{ top: '10%' }}>
                <PinView
                keyboardViewTextStyle={{ fontSize:50,textAlign:'center', }}
                onPress={this.onPress}
                onComplete={this.onComplete}
                pinLength={this.state.pin.length}
                inputBgOpacity= {0.4}
                inputBgColor={'#3A5FBB'}
                // pinLength={6} // You can also use like that.
                />
                </View>
            </View>
        </ImageBackground>
    );
  }
}