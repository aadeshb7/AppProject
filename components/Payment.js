import React, { Component } from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  TextInput,
  Alert,
} from 'react-native'
import { Dropdown } from 'react-native-material-dropdown';
import Slider from '@react-native-community/slider';
import CountDown from 'react-native-countdown-component';

export default class Payment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      progress: 0,
      indeterminate: true,
      sliderValue: 0,
      timerId: 'a',
    };
  }
  
  timesUp = () => {
    Alert.alert(
      "Time's Up!",
      "How can we help you?",
      [
        { 
          text: "Extend Timer",
          onPress: () => this.setState({ timerId : !this.state.timerId }) },
        {
          text: "Contact Support",
          onPress: () => console.log("Cancel Pressed") },
      ],
      { cancelable: false }
    );
  }

  render() {
    let accounts = [{value: 'Savings (£2800.00)'}, {value: 'Checkings (£253.63)'}];
    let recipients = [{value: 'Tom Cruise'}, {value: 'Johnny Depp'}, {value: 'Jane Fonda'}];

    return (
      <View>
        <View style={{ marginTop: 50, alignSelf: 'center' }}>
          <Text style={{ fontSize: 30 }}>Account Transfer</Text>
        </View>
        <View style={{ marginTop: 20}}>
          <CountDown
            size={20}
            until={120}
            onFinish={this.timesUp}
            digitStyle={{backgroundColor: '#FFF', borderWidth: 2, borderColor: '#cccccc'}}
            digitTxtStyle={{fontFamily:'Arial', color: 'black'}}
            separatorStyle={{color: 'black'}}
            timeToShow={['M', 'S']}
            timeLabels={{m: null, s: null}}
            showSeparator
            id={this.state.timerId}
          />
        </View>
        <View style={{ marginTop: 30, marginLeft: 50, alignItems: 'flex-start' }}>
          <Text style={{ fontSize: 20 }}>From</Text>
        </View>
        <View style={{ marginTop: -20, width: 280, alignSelf: 'center' }}>
          <Dropdown 
            label='Select Account'
            data={accounts}
          />
        </View>
        <View style={{ marginTop: 20, marginLeft: 50, alignItems: 'flex-start' }}>
          <Text style={{ fontSize: 20 }}>To</Text>
        </View>
        <View style={{ marginTop: -20, width: 280, alignSelf: 'center' }}>
          <Dropdown 
            label='Select Recipient'
            data={recipients}
          />
        </View>
        <View style={{ marginTop: 30, marginLeft: 50, alignItems: 'flex-start' }}>
          <Text style={{ fontSize: 20 }}>Amount: £{this.state.sliderValue.toFixed(2)}</Text>
        </View>
        <View style={{ marginTop: 10, width: 280, alignSelf: 'center' }}>
          <Slider
            minimumValue={0}
            maximumValue={100}
            onValueChange={val => this.setState({ sliderValue: val })}
          />
        </View>
        <View style={{ marginTop: 30, alignSelf: 'center' }}>
          <TextInput
            style={{ height: 40, width: 280, borderColor: 'gray', borderWidth: 1, paddingLeft: 10}}
            placeholder="Note"
          />
        </View>
        <View style={{ marginTop: 50, width: 130, alignSelf: 'center' }}>
          <TouchableOpacity style={styles.button}onPress={() => {}}>
            <Text style={{ fontSize: 20, textAlign: 'center' }}> Submit </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#CCCCCC',
    padding: 15
  },
})