import React from 'react';
import {View, Text} from 'react-native';

import {Fonts, Colors, Images} from '../../assets/Theme';

import {Logo, Button, Typography, Input} from '../../components';

import styles from './styles';
const SignIn = () => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        <Logo
          src={Images.Logo}
          width={70}
          height={70}
          mode={'contain'}
          style={{marginTop: '20%'}}
        />
        <Typography
          size={30}
          color={Colors.primary}
          family={Fonts.Blod}
          weight={'700'}
          mt={20}>
          Sign In
        </Typography>

        <Typography
          size={18}
          color={'#ccc'}
          family={Fonts.Blod}
          weight={'900'}
          mt={5}>
          Please sign in to continue
        </Typography>

        <Input />
      </View>
    </View>
  );
};

export default SignIn;
