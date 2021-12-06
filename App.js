/**
 * @format
 * @flow strict-local
 */

import React from 'react';

import {SafeAreaView, Text, View, Image, StyleSheet} from 'react-native';
import {NativeBaseProvider, Box} from 'native-base';

// Screens
// import Action from './src/screens/Action';
// import SignIn from './src/screens/SignIn';
// import Register from './src/screens/Register';
import HeightWeight from './src/screens/HeightWeight';

const App: () => Node = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* <NativeBaseProvider> */}
      <HeightWeight />
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
