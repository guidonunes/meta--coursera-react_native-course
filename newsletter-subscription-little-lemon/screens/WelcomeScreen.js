import React, {useState} from 'react';
import { View, Text, Image, Pressable, StyleSheet } from 'react-native';

const WelcomeScreen = ({ navigation }) => {
  // Add welcome screen code here.

const [newsletterButton, setNewsletterButton] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Little Lemon, your local Mediterranean Bistro</Text>
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
  },
  welcomeText: {
    padding: 40,
    fontSize: 30,
    color: '#333333',
    textAlign: 'center',
  }, 
  button: {
    backgroundColor: '#495E57',
    borderRadius: 12,
    margin: 20,
    padding: 15,
  },
  buttonText: {
    color: '#EDEFEE',
    textAlign: 'center',
    fontSize: 22,
  }
})