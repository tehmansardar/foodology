/**
 * @format
 * @flow strict-local
 */

import React from 'react';

import {SafeAreaView, Text, View, StyleSheet} from 'react-native';
import {NativeBaseProvider, Box} from 'native-base';

const App: () => Node = () => {
  return (
    <SafeAreaView style={styles.container}>
      <NativeBaseProvider>
        <Box>Hello world</Box>
      </NativeBaseProvider>
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
