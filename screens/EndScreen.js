import {View, Text, Image, StyleSheet, Button} from 'react-native';
import React from 'react';
import Title from '../components/Title';

export default function EndScreen({rounds, userNumber, gameRestart}) {
  return (
    <View>
      <Title>Game Over!</Title>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={require('../assets/success.png')} />
      </View>
      <Text style={styles.outerText}>
        Your Phone needed <Text style={styles.innerText}>{rounds}</Text> Rounds
        to Guess the Number <Text style={styles.innerText}>{userNumber}</Text>
      </Text>
      <View style={styles.button}>
        <Button title="Play Again" onPress={gameRestart} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  imageContainer: {
    height: 300,
    width: 300,
    borderRadius: 200,
    borderWidth: 3,
    margin: 25,
    overflow: 'hidden',
  },
  image: {
    height: '100%',
    width: '100%',
  },
  outerText: {
    fontSize: 20,
    marginHorizontal: 10,
    color: 'black',
  },
  innerText: {
    fontWeight: 'bold',
    color: 'red',
  },
  button: {
    marginHorizontal: 70,
    borderRadius: 50,
    marginVertical: 20,
  },
});
