/**
 * @format
 * @flow strict-local
 */

import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  Text,
  View,
  Image,
  StyleSheet,
} from 'react-native';

// Screens
// import Action from './src/screens/Action';
// import SignIn from './src/screens/SignIn';
// import Register from './src/screens/Register';
// import HeightWeight from './src/screens/HeightWeight';
// import Age from './src/screens/Age';
// import Sex from './src/screens/Sex';
// import Ethnicity from './src/screens/Ethnicity';
// import MaritalStatus from './src/screens/MaritalStatus';
import Children from './src/screens/Children';
// import Testing from './src/screens/Testing';

const App: () => Node = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* <NativeBaseProvider> */}
      <Children />
      {/* </NativeBaseProvider> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    // width: '100%',
    // height: '100%',
    backgroundColor: '#fff',
    flex: 1,
  },
});

export default App;
