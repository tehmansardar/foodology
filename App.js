/**
 * @format
 * @flow strict-local
 */

import React from 'react';

import {SafeAreaView, Text, View, Image, StyleSheet} from 'react-native';
import {NativeBaseProvider, Box} from 'native-base';

// Screens
import Action from './src/screens/Action';
// import Testing from './src/screens/Testing';

const App: () => Node = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* <NativeBaseProvider> */}
      <Action />
      {/* </NativeBaseProvider> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#fff',
  },
});

export default App;
