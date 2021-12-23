import React from 'react';

import {View, Text} from 'react-native';
import {Fonts, Colors, Images} from '../../assets/Theme';

import AntDesign from 'react-native-vector-icons/AntDesign';

import {Logo, Button} from '../../components';

import styles from './styles';

import {useNavigation} from '@react-navigation/native';

const Action = () => {
  const navigation = useNavigation();

  return (
    <View>
      <View style={styles.container}>
        {/* Logo */}
        <Logo src={Images.Logo} width={200} height={200} mode={'contain'} />

        {/* Sign in */}
        <Button
          center
          middle
          w={150}
          h={70}
          radius={10}
          bg={Colors.primary}
          addstyle={{marginTop: 50}}
          onPress={() => navigation.navigate('SignIn')}>
          <Text style={styles.signInText}>Sign In</Text>
        </Button>

        {/* Register */}
        <Button
          center
          middle
          radius={50}
          // bg={Colors.primary}
          addstyle={{marginTop: 50, paddingHorizontal: 12}}
          onPress={() => navigation.navigate('Register')}>
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
        </Button>
      </View>
    </View>
  );
};

export default Action;
