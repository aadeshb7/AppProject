import React from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
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

  _startHandler() {
    Tts.speak({
      text: 'hello world',
      voice: 'en-US'
    })
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
      <View>
        <View style={{ marginTop: 50, alignSelf: 'center' }}>
          <Text style={{ fontSize: 30 }}>Recent Transactions</Text>
        </View>
        <View style={{ marginTop: 30, alignSelf: 'center' }}>
          <Text>Account Balance:</Text>
        </View>
        <View style={{ marginTop: 5, alignSelf: 'center' }}>
          <Text style={{ fontSize: 24 }}>{totalBalance.toFixed(2)}</Text>
        </View>
        <View style={{ marginTop: 5, alignSelf: 'center' }}> 
          <Text>Weekly Transactions: {totalQuantityPos + totalQuantityNeg}</Text>
        </View>
        <View style={{ marginTop: 30}}>
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
            onPress={this.__startHandler}
          >
            <Text style={{ fontSize: 20, textAlign: 'center' }}> Voice Summary </Text>
          </TouchableOpacity>
        </View>
        <View style={{ marginTop: 50 }}>
          <Text>
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
