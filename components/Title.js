import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

function Title({children}) {
  return (
    <>
      <View>
        <Text style={styles.title}>{children}</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 36,
    fontWeight: '500',
    color: 'black',
    borderWidth: 2,
    borderColor: 'white',
    textAlign: 'center',
    marginHorizontal: 5,
    marginVertical: 5,
  },
});
export default Title;
