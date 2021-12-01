import React from 'react';

import {View, Pressable, Text, Image} from 'react-native';
import {Fonts, Colors, Images} from '../../assets/Theme';

import AntDesign from 'react-native-vector-icons/AntDesign';

import styles from './styles';
import {style} from 'dom-helpers';

const SignIn = () => {
  return (
    <View>
      <View style={styles.container}>
        {/* Logo */}
        <Image source={Images.Logo} style={styles.logo} />

        {/* Sign in */}
        <Pressable
          style={styles.signInBtn}
          android_ripple={{color: '#FFF', radius: 80, foreground: false}}>
          <Text style={styles.signInText}>Sign in</Text>
        </Pressable>

        {/* Register */}
        <Pressable
          style={styles.registerBtn}
          android_ripple={{
            color: Colors.secondary,
            radius: 80,
            foreground: true,
          }}>
          <Text style={styles.registerText}>Register Today!</Text>
          <View style={styles.btnBottom}>
            <View style={styles.line}></View>
            <AntDesign
              name="right"
              size={20}
              color={Colors.primary}
              style={styles.icon}
            />
          </View>
        </Pressable>
      </View>
    </View>
  );
};

export default SignIn;
