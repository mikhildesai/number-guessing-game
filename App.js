/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';

import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import EndScreen from './screens/EndScreen';
import GameScreen from './screens/GameScreen';
import StartScreen from './screens/StartScreen';

function App() {
  const [userNumber,setUserNumber] = useState(null);
  const [gameOver,setGameOver] = useState(false);
  const [rounds,setRounds]=useState(0);

  function handlePickedNumber(pickedNumber){
    setUserNumber(pickedNumber);
    
    setGameOver(false);
    
  }

  function gameOverHandler(){
    setGameOver(true);
  }
  function gameRestart(){
    setUserNumber(null);
    setRounds(0);
    setGameOver(false);
    

  }
  let screen = <StartScreen handlePickedNumber={handlePickedNumber}/>;
  if (userNumber){
    screen = <GameScreen userNumber={userNumber} gameOverHandler={gameOverHandler} rounds={rounds} setRounds={setRounds}/>;
  }
  if (gameOver && userNumber){
    screen = <EndScreen userNumber={userNumber} rounds={rounds} gameRestart={gameRestart}/> 
  }
  return (
   
      <View style={styles.container}>
        <ImageBackground source={require('./assets/background.png')} resizeMode="cover" style={styles.image}>
       {screen}
       </ImageBackground>
      </View>
   
  );
}
const styles = StyleSheet.create({
container:{
  flex:1,
  opacity:0.85
},
image:{
  flex:1,
  
}
});

export default App;
