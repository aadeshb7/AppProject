import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, NativeModules, TouchableOpacity, Keyboard, ImageBackground, Alert } from 'react-native'
import Emoji from 'react-native-emoji';
import LinearGradient from 'react-native-linear-gradient';
import PinView from 'react-native-pin-view'

export default class LoginScreen extends React.Component {
    onPress1 = () => {
        insertText(this.props.tag,);
      }
    
      onPress2 = () => {
        insertText(this.props.tag, <Emoji name='cry' style={stylesHome.buttonLabel}></Emoji>);
      }
    
      onPress3 = () => {
        insertText(this.props.tag, '3');
      }
      
      onPress4 = () => {
        insertText(this.props.tag, '4');
      }
    
      onPress5 = () => {
      }
      
      onPress6 = () => {

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
      
      onPressBack = () => {
        backSpace(this.props.tag);
      }
      
      onPress0= () => {
        insertText(this.props.tag, '0');
      }
      
      onPressSubmit = () => {
        submit(this.props.tag);
      }
        constructor(props) {
        super(props);
        this.onComplete = this.onComplete.bind(this);
        this.state = {
            pin: "896745"
        }
    }
    onComplete(inputtedPin, clear) {
        if (inputtedPin!==this.state.pin){
        clear();
        } else {
        console.log("Pin is correct")
        }
    }
    onPress(inputtedPin, clear, pressed) {
        console.log("Pressed: "+ pressed);
        console.log("inputtedPin: "+ inputtedPin)
    }
    render() {
    return (
        <ImageBackground style={{ flex: 1, width: null, height: null, resizeMode: 'cover' }} source={{ uri: 'https://jooinn.com/images/white-clouds-25.jpg' }}>
            <View style={{ top:'45%', alignItems:'center'}}>
                <View>
                <PinView
            onPress={this.onPress}
            onComplete={this.onComplete}
            pinLength={this.state.pin.length}
            />
            </View>
                    <View style={{ flexDirection: "row" }}>
                        <View style={ stylesHome.button }>
                            <TouchableOpacity onPress={() => this.onPress1 }>
                                <Emoji name= 'smile' style={ stylesHome.buttonLabel }/>
                            </TouchableOpacity>
                        </View>
                        <View style={ stylesHome.button }>
                            <TouchableOpacity onPress={() => this.onPress2 }>
                                <Emoji name= 'unamused' style={ stylesHome.buttonLabel }/>
                            </TouchableOpacity>
                        </View>
                        <View style={ stylesHome.button }>
                            <TouchableOpacity onPress={() => this.onPress3 }>
                                <Emoji name= 'rolling_on_the_floor_laughing' style={ stylesHome.buttonLabel }/>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{ flexDirection: "row" }}>
                        <View style={ stylesHome.button }>
                            <TouchableOpacity onPress={() => this.onPress4 }>
                                <Emoji name= 'wink' style={ stylesHome.buttonLabel }/>
                            </TouchableOpacity>
                        </View>
                        <View style={ stylesHome.button }>
                            <TouchableOpacity onPress={() => this.onPress5 }>
                                <Emoji name= 'expressionless' style={ stylesHome.buttonLabel }/> 
                            </TouchableOpacity>
                        </View>
                        <View style={ stylesHome.button }>
                            <TouchableOpacity onPress={() => this.onPress6 }>
                                <Emoji name= 'rage' style={ stylesHome.buttonLabel }/>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{ flexDirection: "row" }}>
                        <View style={ stylesHome.button }>
                            <TouchableOpacity onPress={() => this.onPress7 }>
                                <Emoji name= 'cry' style={ stylesHome.buttonLabel }/>
                            </TouchableOpacity>
                        </View>
                        <View style={ stylesHome.button }>
                            <TouchableOpacity onPress={() => this.onPress8 }>
                                <Emoji name= 'fearful' style={ stylesHome.buttonLabel }/>
                            </TouchableOpacity>
                        </View>
                        <View style={ stylesHome.button }>
                            <TouchableOpacity onPress={() => this.onPress9 }>
                                <Emoji name= 'stuck_out_tongue_closed_eyes' style={ stylesHome.buttonLabel }/>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{ flexDirection: "row" }}>
                        <View style={ stylesHome.button }>
                            <TouchableOpacity onPress={() => this.onPressBack }>
                                <Emoji name= 'arrow_left' style={stylesHome.buttonLabel}/>
                            </TouchableOpacity>
                        </View>
                        <View style={ stylesHome.button }>
                            <TouchableOpacity onPress={() => this.onPress0 }>
                                <Emoji name= 'nerd_face' style={ stylesHome.buttonLabel }/>
                            </TouchableOpacity>
                        </View>
                        <View style={ stylesHome.button }>
                            <TouchableOpacity onPress={() => this.onPressSubmit}>
                                <Emoji name= 'ballot_box_with_check' style={ stylesHome.buttonLabel }/>
                            </TouchableOpacity>
                        </View>
                    </View>
            </View>
        </ImageBackground>
    );
  }
}

const stylesHome = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
      },
      LinearGrad: {
        borderRadius: 20,
      },
      buttonLabel: {
        fontSize:40,
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 13,
        paddingBottom: 13,
        borderRadius:10
      },
      button: {
        width: "33.3333%",
      },
  })