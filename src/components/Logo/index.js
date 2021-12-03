import React from 'react';
import {View, Image, StyleSheet} from 'react-native';

const Logo = ({...props}) => {
  const {src, width, height, mode, style} = props;

  const blockStyles = [
    width && {width},
    height && {height},
    mode && {resizeMode: mode},
    style,
  ];

  return (
    <View {...props}>
      <Image source={src} style={blockStyles} />
    </View>
  );
};

const styles = StyleSheet.create({});

export default Logo;
