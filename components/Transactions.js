import React from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  BackHandler,
  Alert,
} from 'react-native';
import Tts from 'react-native-tts';

const products = [
  { _id: 1, date: '24 Apr 19', desc: 'Transaction', price: -3.99, balance: '', quantity: 1 },
  { _id: 2, date: '24 Apr 19', desc: 'Transaction', price: -26.43, balance: '', quantity: 1 },
  { _id: 3, date: '23 Apr 19', desc: 'Transaction', price: -89.23, balance: '', quantity: 1 },
  { _id: 4, date: '21 Apr 19', desc: 'Transaction', price: 20, balance: '', quantity: 1 },
  { _id: 5, date: '20 Apr 19', desc: 'Transaction', price: -18.83, balance: '', quantity: 1 },
  { _id: 6, date: '20 Apr 19', desc: 'Transaction', price: -19.99, balance: '', quantity: 1 },
  { _id: 7, date: '19 Apr 19', desc: 'Transaction', price: -21.00, balance: '', quantity: 1 },
  { _id: 8, date: '19 Apr 19', desc: 'Transaction', price: 500.00, balance: '', quantity: 1 },
  { _id: 9, date: '18 Apr 19', desc: 'Transaction', price: 2.49, balance: '', quantity: 1 },
  { _id: 10, date: '18 Apr 19', desc: 'Transaction', price: -3.99, balance: '', quantity: 1 },
  { _id: 11, date: '18 Apr 19', desc: 'Transaction', price: -34.99, balance: '', quantity: 1 },
];

class ListItem extends React.Component {
  constructor(props) {
    super(props);
    Tts.setDefaultLanguage('en-IE');
    Tts.addEventListener('tts-start', event => console.log('start', event));
    Tts.addEventListener('tts-finish', event => console.log('finish', event));
    Tts.addEventListener('tts-cancel', event => console.log('cancel', event));
}

  render() {
    const { item } = this.props;

    return (
      <View style={{ flexDirection: 'row' }}>
        <View style={{ marginTop: 5, flex: 1 }}>
          <Text>{item.date}</Text>
        </View>
        <View style={{ marginLeft: 0, marginTop: 5, flex: 1 }}>
          <Text>{item.desc}</Text>
        </View>
        <View style={{ marginLeft: 0, marginTop: 5, flex: 1 }}>
          <Text>{item.price.toFixed(2)}</Text>
        </View>
        <View style={{ marginLeft: 0, marginTop: 5, flex: 1 }}>
          <Text>{item.balance}</Text>
        </View>
      </View>
    )
  }
}

//var Speech = require('react-native-speech');

class Transactions extends React.Component {
  state = { 
    products,
  };

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

  startHandler() {
    //Tts.speak('Currently, your account 0balance is' + (totalBalance.toFixed(2)) + 'pounds. This week, you made' + (totalQuantityPos + totalQuantityNeg) +' transactions. You received '+(totalQuantityPos)+' payments into the account, totaling '+(posBal.toFixed(2))+' pounds. You made '+(totalQuantityNeg)+' payments out of the account, totaling '+(negBal.toFixed(2))+' pounds.')
    Tts.speak('Your Account balance is 2304.04 Pounds')
  }

  render() {
    const { products } = this.state;
    let totalQuantityPos = 0;
    let totalQuantityNeg = 0;
    let totalBalance = 2000;
    let posBal = 0;
    let negBal = 0;
    products.slice().reverse().forEach((item) => {
      if (item.price > 0) {
        totalQuantityPos += item.quantity;
        posBal += item.price;
      } else {
        totalQuantityNeg += item.quantity;
        negBal += item.price;
      }
      totalBalance += item.price;
      item.balance = totalBalance.toFixed(2);
    })

    return (
      <View style={{ flex:1, backgroundColor: '#E9E9E9'}}>
        <View style={{ marginTop: 20, alignSelf: 'center' }}>
          <Text style={{ fontSize: 30 }}>Recent Transactions</Text>
        </View>
        <View style={{ marginTop: 20, alignSelf: 'center' }}>
          <Text style={{ fontSize: 20 }}>Account Balance:</Text>
        </View>
        <View style={{ marginTop: 5, justifyContent: 'center' }}>
          <Text style={{ fontSize: 30, fontWeight: 'bold', textAlign: 'center' }}>{totalBalance.toFixed(2)}</Text>
        </View>
        <View style={{ marginTop: 5, alignSelf: 'center' }}> 
          <Text style={{ fontSize: 20 }}>Weekly Transactions: {totalQuantityPos + totalQuantityNeg}</Text>
        </View>
        <View style={{ marginTop: 30, marginLeft: 30}}>
          <FlatList
            data={this.state.products}
            renderItem={({ item, index }) => (
              <ListItem
                item={item}
              />
            )}
            keyExtractor={item => item._id}
          />
        </View>
        <View style={{ marginTop: 50, width: 200, alignSelf: 'center' }}>
          <TouchableOpacity
            style={styles.button}
            onPress={this.startHandler}
          >
            <Text style={{ fontSize: 20, textAlign: 'center' }}> Voice Summary </Text>
          </TouchableOpacity>
        </View>
        <View style={{ marginTop: 40 }}>
          <Text style={{ fontSize: 16, marginLeft: 5, marginRight: 5, textAlign: 'center' }}>
            Currently, your account balance is {totalBalance.toFixed(2)} pounds.
            This week, you made {totalQuantityPos + totalQuantityNeg} transactions.
            You received {totalQuantityPos} payments into the account, totaling {posBal.toFixed(2)} pounds.
            You made {totalQuantityNeg} payments out of the account, totaling {negBal.toFixed(2)} pounds.
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#cccccc',
    padding: 15
  },
})

export default Transactions;
