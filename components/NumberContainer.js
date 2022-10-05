import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

export default function NumberContainer({children}) {
  return (
    <View>
      <Text style={styles.number}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  number: {
    fontSize: 36,
    color: 'black',
    textAlign: 'center',
  },
});
