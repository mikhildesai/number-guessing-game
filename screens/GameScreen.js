/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';
import {Alert, Button, FlatList, StyleSheet, Text, View} from 'react-native';
import LogContainer from '../components/LogContainer';
import NumberContainer from '../components/NumberContainer';
import Title from '../components/Title';

function GameScreen({userNumber, gameOverHandler,rounds,setRounds}) {
  let minBoundary = 1;
  let maxBoundary = 100;

  const initialNumber = generateRandomNumbers(1, 100, userNumber);
  const [currentNumber, setCurrentNumber] = useState(initialNumber);
  const [log, setLog] = useState([initialNumber]);
  useEffect(() => {
    minBoundary = 1;
    maxBoundary = 100;
  }, []);
  useEffect(() => {
    if (currentNumber === userNumber) {
      gameOverHandler();
    }
  }, [currentNumber, userNumber, gameOverHandler]);

  // exclude variable is used so that, the first number entered by user is not the random
  // number generated. This is done to add some more difficulty in game.
  function generateRandomNumbers(min, max, exclude) {
    const randomNumber = Math.floor(Math.random() * (max - min)) + min;
    if (randomNumber === exclude) {
      return generateRandomNumbers(min, max, exclude);
    } else {
      return randomNumber;
    }
  }

  function nextGuess(direction) {
    if (
      (direction === 'lower' && currentNumber < userNumber) ||
      (direction === 'higher' && currentNumber > userNumber)
    ) {
      Alert.alert("Don't Lie", 'You cannot go beyond this', [
        {
          text: 'Sorry',
          style: 'cancel',
        },
      ]);
      return;
    }

    if (direction === 'lower') {
      maxBoundary = currentNumber;
    } else if(direction === 'higher'){
      minBoundary = currentNumber + 1;
    }
    const newRandomNumber = generateRandomNumbers(
      minBoundary,
      maxBoundary,
      currentNumber,
    );
    setCurrentNumber(newRandomNumber);
    setRounds(rounds+1);
    console.log(rounds)
    setLog(prev => [newRandomNumber, ...prev]);
  }
  return (
    <>
      <View>
        <Text>GameScreen</Text>
        <Title>Opponent's Guess</Title>
        <NumberContainer>{currentNumber}</NumberContainer>
        <View>
          <Text style={styles.text}> Higher or Lower ?</Text>
          <View style={styles.buttonsContainer}>
            <Button
              title="decrease"
              color="red"
              onPress={nextGuess.bind(this, 'lower')}
            />
            <Button
              title="increase"
              color="green"
              onPress={nextGuess.bind(this, 'higher')}
            />
          </View>
          
        </View>
        <View  style={styles.listContainer}>
          
          <FlatList
            data={log}
            renderItem={({item, index}) => <LogContainer round={index+1} randomNumber={item}/>}
          />
        </View>
      </View>
      
    </>
  );
}

const styles = StyleSheet.create({
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  text: {
    textAlign: 'center',
    marginBottom: 20,
    fontSize: 20,
  },
  listContainer:{
    height: 300,
    
   
  }
});
export default GameScreen;
