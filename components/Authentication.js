import React, { Component } from 'react';
import { View, Alert } from 'react-native';
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
    } else {
      Alert.alert("Pin is correct",'',[{text:'proceed', onPress:() => this.props.navigation.navigate('Home')}])
    }
  }
  onPress(inputtedPin, clear, pressed) {
    console.log("Pressed: "+ pressed);
    console.log("inputtedPin: "+ inputtedPin)
    // clear()
  }
  render() {
    return (
        <View style={{ flex: 1 }}>
            <View style={{ top:'40%', justifyContent : 'center', alignContent:'center', alignItems:'center' }}>
                <PinView
                keyboardViewTextStyle={{ fontSize:50,textAlign:'center'}}
                onPress={this.onPress}
                onComplete={this.onComplete}
                pinLength={this.state.pin.length}
                // pinLength={6} // You can also use like that.
                />
                </View>
         </View>
    );
  }
}