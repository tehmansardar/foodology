import React from 'react';
import {TouchableOpacity, Dimensions, Image, StyleSheet} from 'react-native';

const {width} = Dimensions.get('window');

const Button = props => {
  const {
    w,
    h,
    full,
    radius,
    center,
    middle,
    bg,
    opacity,
    addstyle,
    style,
    children,
  } = props;

  const buttonStyles = [
    w && {width: w},
    h && {height: h},
    full && styles.full,
    radius && {borderRadius: radius},
    center && {alignItems: 'center'},
    middle && {justifyContent: 'center'},
    bg && {backgroundColor: bg},
    addstyle,
    style,
  ];

  return (
    <TouchableOpacity
      style={buttonStyles}
      activeOpacity={opacity || 0.8}
      {...props}>
      {children}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  signInBtn: {
    width: 150,
    height: 70,
    borderRadius: 10,
    // backgroundColor: Colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
  },

  full: {
    width: width - 50,
  },
});

export default Button;
