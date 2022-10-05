import React, {useState} from 'react';
import {Alert, Button, KeyboardAvoidingView, ScrollView, StyleSheet, Text, TextInput, View} from 'react-native';
import Title from '../components/Title';

function StartScreen({handlePickedNumber}) {
  const [enteredNumber, setEnteredNumber] = useState('');
  function handleChange(text) {
    setEnteredNumber(text);
  }

  function handleCancel() {
    setEnteredNumber('');
  }
  function handleConfirm() {
    const number = parseInt(enteredNumber, 10);
    if (number < 0 || isNaN(number) || number > 99) {
      Alert.alert('Invalid Number', 'Please enter a number between 1 and 99', [
        {text: 'OK', style: 'destructive', onPress: handleCancel},
      ]);
    } else {
      handlePickedNumber(number);
    }
  }

  return (
    <>
    <ScrollView>
    <KeyboardAvoidingView behavior='height' style={styles.screen}>
    <View style={styles.rootContainer}>
      <Title>Guess Number</Title>
    </View>
      <View style={styles.mainContainer}>
        <View>
          <TextInput
            style={styles.textInputContainer}
            value={enteredNumber}
            onChangeText={handleChange}
            keyboardType="numeric"
            maxLength={2}
          />
        </View>
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <Button title="reset" color="#ea4245" onPress={handleCancel} />
          </View>
          <View style={styles.buttonContainer}>
            <Button title="confirm" color="#298a42" onPress={handleConfirm} />
          </View>
        </View>
      </View>
      </KeyboardAvoidingView>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  screen:{
    flex:1
  },
  mainContainer: {
    backgroundColor: '#7caad3',
    height: 200,
    marginTop: 10,
    marginHorizontal: 15,
    borderRadius: 20,
  },
  textInputContainer: {
    width: 50,
    marginHorizontal: 140,
    marginVertical: 10,
    fontSize: 30,
    color: 'white',
    borderBottomWidth: 2,
    borderBottomColor: 'white',
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  buttonContainer: {
    flex: 1,
    marginHorizontal: 15,
    marginVertical:10
  },
  rootContainer:
  {
    marginHorizontal: 30,
    marginVertical:30
  }
  
});

export default StartScreen;
