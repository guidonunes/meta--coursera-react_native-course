import React, { useState } from 'react';
import { View, Text, Image, Pressable, StyleSheet, Dimensions, TextInput, Alert } from 'react-native';
import { validateEmail } from '../utils';

const SubscribeScreen = () => {
  const [subscribeButton, setSubscribeButton] = useState(false);
  const [email,setEmail] = useState('');

  const handleSubscribe = () => {
    if (email) {
      // Display an alert to confirm the subscription
      Alert.alert(
        'Thanks for subscribing, stay tuned!',
        [{text: 'OK', onPress: () => console.log('OK Pressed')}]
      );
    } else {
      Alert.alert('Error', 'Please, enter a valid email address')
    }
  }


  const isEmailValid = validateEmail(email);
  // Add subscribe screen code here
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require('../assets/little-lemon-logo-grey.png')} />
      <Text style={styles.subscribeText}>Subscribe to our newsletter for our latest delicious recipes! </Text>
      <TextInput 
        style={styles.input}
        placeholder='Enter your email address'
        keyboardType='email-address'
        autoCapitalize='none'
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      
      <Pressable
        style={styles.button}
        onPress={() => {
          setSubscribeButton(!subscribeButton);
          handleSubscribe();
        }}
      >
        <Text style={styles.buttonText}>Subscribe</Text>
      </Pressable>
    </View>
  );
};

export default SubscribeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  logo: {
    height: '30%',
    width: '40%',
    margin: 80,
    justifyContent: 'center',
    resizeMode: 'contain',
  },
  subscribeText: {
    padding: 10,
    fontSize: 20,
    color: '#333333',
    textAlign: 'center',
  },
  input: {
    height: 40,
    width: Dimensions.get('window').width * 0.8,
    borderColor: 'gray',
    borderRadius: 12,
    borderWidth: 1,
    marginVertical: 10,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: '#495E57',
    borderRadius: 12,
    margin: 80,
    padding: 15,
    width: Dimensions.get('window').width * 0.8,
  },
  buttonText: {
    color: '#EDEFEE',
    textAlign: 'center',
    fontSize: 20,
  },
});
