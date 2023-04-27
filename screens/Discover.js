import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, StyleSheet, Keyboard, TouchableWithoutFeedback } from 'react-native';

const API_KEY = '29Jx4L65z8i8T0YxdVghd3RKMbIAtRQX'; // Replace with your actual API key
const API_URL = `https://api.apilayer.com/exchangerates_data/convert?to={to}&from={from}&amount={amount}`;

const Discover = () => {
  const [naira, setNaira] = useState('');
  const [dollars, setDollars] = useState('');
  

  const convertNairaToDollars = (value) => {
    setNaira(value);
    const dollars = parseFloat(value) / 411;
    setDollars(dollars.toFixed(2));
  };

  const convertDollarsToNaira = (value) => {
    setDollars(value);
    const naira = parseFloat(value) * 411;
    setNaira(naira.toFixed(2));
  };


  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <View style={styles.container}>
      <Text style={styles.title}>Currency Converter</Text>
      <View style={styles.inputContainer}>
        <Text>Enter amount in Naira:</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          onChangeText={(value) => convertNairaToDollars(value)}
          value={naira}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text>Enter amount in Dollars:</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          onChangeText={(value) => convertDollarsToNaira(value)}
          value={dollars}
        />
      </View>
    </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#e7feff'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  inputContainer: {
    marginBottom: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    marginTop: 8,
    borderRadius:5,
  },
});

export default Discover;