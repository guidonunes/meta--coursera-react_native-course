import React, {useState} from 'react';
import { View, Text, Image, Pressable, StyleSheet, Dimensions } from 'react-native';

const WelcomeScreen = ({ navigation }) => {
  

const [newsletterButton, setNewsletterButton] = useState(false);

  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require('../assets/little-lemon-logo.png')} />
      <Text style={styles.welcomeText}>Little Lemon, your local Mediterranean Bistro!</Text>
   <Pressable
   style={styles.button}
   onPress={() => {
    setNewsletterButton(!newsletterButton);
    navigation.navigate('Subscribe');
   }}
   >
      <Text style={styles.buttonText}>Newsletter</Text>
   </Pressable>
   
    </View>
  )
};

export default WelcomeScreen;

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
    justifyContent:'center',
    resizeMode:'contain',
  },
  welcomeText: {
    padding: 10,
    fontSize: 20,
    color: '#333333',
    textAlign: 'center',
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

})