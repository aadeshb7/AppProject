import React, { Component } from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import LoginScreen from './components/LoginScreen';
import HomeScreen from'./components/HomeScreen';
import Authentication from './components/Authentication';
import Payment from './components/Payment';
import Transactions from './components/Transactions';

const AppNavigator = createStackNavigator(
  {
    Login: {
      screen: LoginScreen,
      navigationOptions: {
        header: null,
      }
    },
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        header: null,
      }
    },
    Authentication:{
      screen: Authentication,
    },
    Payment: {
    screen: Payment,
    },
    Transactions: {
      screen: Transactions,
    }
  },
  {
    initialRouteName: 'Authentication',
  }
);

const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
  render() {
    return <AppContainer/>;
  }
}