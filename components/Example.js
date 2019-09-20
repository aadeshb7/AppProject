import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, NativeModules, TouchableOpacity, Keyboard, Alert } from 'react-native';
import { CustomTextInput, register, insertText, backSpace, uninstall, hideKeyboard } from 'react-native-custom-keyboard-kit';
import Emoji from 'react-native-emoji';
import PinView from 'react-native-pin-view';
var sampleArray=[""]

class MyKeyboard extends Component {
  constructor(props) {
    super(props);
    this.AddItems = this.AddItems.bind(this)
    this.state = {
        pin: "1",
    }
  }
  AddItems(a) {
    sampleArray.push(a)
    
  }
  onComplete(holder, clear) {
    if (this.holder!==this.state.pin){
      clear();
    } else {
      Alert.alert("Pin is correct")
    }
  }

  onPress1 = () => {
    insertText(this.props.tag, '1');
    this.AddItems(1)
  }

  onPress2 = () => {
    insertText(this.props.tag, '2');
  }

  onPress3 = () => {
    insertText(this.props.tag, '3');
  }
  
  onPress4 = () => {
    insertText(this.props.tag, '4');
  }

  onPress5 = () => {
    insertText(this.props.tag, '5');
  }
  
  onPress6 = () => {
    insertText(this.props.tag, '6');
  }

  onPress7 = () => {
    insertText(this.props.tag, '7');
  }

  onPress8 = () => {
    insertText(this.props.tag, '8');
  }

  onPress9 = () => {
    insertText(this.props.tag, '9');
  }
  
  onPressBackSpace = () => {
    backSpace(this.props.tag);
  }
  
  onPress0= () => {
    insertText(this.props.tag, '0');
  }
  
  onPressHideKeyboard = () => {
    this.onComplete();
  }

  render() {
    return (
      <View>
        <View style={{ flexDirection: "row" }}>
          <View style={ styles.button }>
            <TouchableOpacity onPress= { this.onPress1 }>
              <Emoji name= 'ballot_box_with_check' style={ styles.buttonLabel1 }/>
            </TouchableOpacity>
          </View>
          <View style={ styles.button }>
            <TouchableOpacity onPress={ this.onPress2 }>
              <Emoji name= 'ballot_box_with_check' style={ styles.buttonLabel1 }/>
            </TouchableOpacity>
          </View>
          <View style={ styles.button }>
            <TouchableOpacity onPress={ this.onPress3 }>
              <Emoji name= 'ballot_box_with_check' style={ styles.buttonLabel1 }/>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ flexDirection: "row" }}>
          <View style={ styles.button }>
            <TouchableOpacity onPress={ this.onPress4 }>
              <Emoji name= 'ballot_box_with_check' style={ styles.buttonLabel1 }/>
            </TouchableOpacity>
          </View>
          <View style={ styles.button }>
            <TouchableOpacity onPress={ this.onPress5 }>
              <Emoji name= 'ballot_box_with_check' style={ styles.buttonLabel1 }/>
            </TouchableOpacity>
          </View>
          <View style={ styles.button }>
            <TouchableOpacity onPress={ this.onPress6 }>
              <Emoji name= 'ballot_box_with_check' style={ styles.buttonLabel1 }/>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ flexDirection: "row" }}>
          <View style={ styles.button }>
            <TouchableOpacity onPress={ this.onPress7 }>
              <Emoji name= 'ballot_box_with_check' style={ styles.buttonLabel1 }/>
            </TouchableOpacity>
          </View>
          <View style={ styles.button }>
            <TouchableOpacity onPress={ this.onPress8 }>
              <Emoji name= 'ballot_box_with_check' style={ styles.buttonLabel1 }/>
            </TouchableOpacity>
          </View>
          <View style={ styles.button }>
            <TouchableOpacity onPress={ this.onPress9 }>
              <Emoji name= 'ballot_box_with_check' style={ styles.buttonLabel1 }/>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ flexDirection: "row" }}>
          <View style={ styles.button }>
            <TouchableOpacity onPress={ this.onPressBackSpace }>
              <Emoji name= 'ballot_box_with_check' style={ styles.buttonLabel1 }/>
            </TouchableOpacity>
          </View>
          <View style={ styles.button }>
            <TouchableOpacity onPress={ this.onPress0 }>
              <Emoji name= 'ballot_box_with_check' style={ styles.buttonLabel1 }/>
            </TouchableOpacity>
          </View>
          <View style={ styles.button }>
            <TouchableOpacity onPress={ this.onPressHideKeyboard }>
              <Emoji name= 'ballot_box_with_check' style={ styles.buttonLabel1 }/>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

register('price', () => MyKeyboard);

export default class App extends Component{
    state = { value: '' }

  onChangeText = text => {
    this.setState({value: text})
  }
  render() {
    return (
      <View style={styles.container}>
        <CustomTextInput
          customKeyboardType="price"
          value={this.state.value}
          onChangeText={this.onChangeText}
          style={styles.input}
          secureTextEntry={true}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  buttonLabel1: {
    fontSize:20,
    textAlign: "center",
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 13,
    paddingBottom: 13,
    borderRadius:10
  },
  input: {
    backgroundColor: "#ffffff",
    borderWidth: 1,
    borderColor: "#d6d7da",
    width: 270,
    fontSize: 19,
  },
  buttonLabel: {
    borderWidth: 0.5,
    borderColor: "#d6d7da",
    padding: 10,
    textAlign: "center",
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 13,
    paddingBottom: 13,
    fontSize: 20,
  },
  button: {
    width: "33.333333333%",
  },
});