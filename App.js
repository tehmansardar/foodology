/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import {SafeAreaView, Text, View, StyleSheet} from 'react-native';

const App: () => Node = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={{color: '#000'}}>Foodology</Text>
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
