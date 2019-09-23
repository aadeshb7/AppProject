import React, { Component } from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import LoginScreen from './components/LoginScreen';
import HomeScreen from'./components/HomeScreen';
import Authentication from './components/Authentication';
import Payment from './components/Payment';
import Transactions from './components/Transactions';
import SplashScreen from './components/SplashScreen';
import Profile from './components/Profile';
import Offers from './components/Offers';
import Products from './components/Products';
import Loading from './components/Loading';


console.disableYellowBox= true
const AppNavigator = createStackNavigator(
  {
    Splash: {
      screen: SplashScreen,
      navigationOptions: {
        header: null,
      }
    },
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
    Authentication: {
      screen: Authentication,
      navigationOptions: {
        header: null,
      }
    },
    Payment: {
    screen: Payment,
    },
    Loading: {
      screen: Loading,
      navigationOptions: {
        header: null,
      }
    },
    Transactions: {
      screen: Transactions,
    },
    Profile: {
      screen: Profile,
    },
    Offers: {
      screen: Offers,
    },
    Products: {
      screen: Products,
    }
  },
  {
    initialRouteName: 'Splash',
  }
);

const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
  render() {
    return <AppContainer/>;
  }
}