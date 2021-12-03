import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Block = props => {
  const {flex, center, middle, style, children} = props;

  const blockStyles = [
    // styles.block,
    flex && {flex: flex},
    center && styles.center,
    middle && styles.middle,
  ];

  return <View style={blockStyles}>{children}</View>;
};

const styles = StyleSheet.create({
  block: {
    flex: 1,
  },
  center: {
    alignItems: 'center',
  },
  middle: {
    justifyContent: 'center',
  },
});

export default Block;
