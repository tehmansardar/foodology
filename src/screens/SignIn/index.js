import {color} from 'native-base/lib/typescript/theme/styled-system';
import React from 'react';
import {View, TextInput} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';

import {Fonts, Colors, Images} from '../../assets/Theme';

import {Logo, Button, Typography} from '../../components';

import styles from './styles';
const SignIn = () => {
  return (
    <View style={styles.wrapper}>
      <View
        style={{
          width: 100,
          height: 100,
          borderRadius: 10000,
          position: 'absolute',
          backgroundColor: Colors.orange,
          top: -20,
          right: -20,
        }}
      />
      <View
        style={{
          width: 100,
          height: 100,
          borderRadius: 10000,
          position: 'absolute',
          backgroundColor: Colors.blue,
          left: -50,
          bottom: 90,
        }}
      />
      <View style={styles.container}>
        <Logo
          src={Images.Logo}
          width={70}
          height={70}
          mode={'contain'}
          style={{marginTop: '1%'}}
        />
        <Typography
          size={30}
          color={Colors.primary}
          family={Fonts.NexaExtraBold}
          mt={15}>
          Sign In
        </Typography>

        <Typography
          size={18}
          color={Colors.tertiary}
          family={Fonts.NexaBold}
          mt={15}>
          Please sign in to continue
        </Typography>

        {/* Email Address */}
        <View style={{marginTop: 30}}>
          <Typography
            size={22}
            mb={15}
            color={Colors.lightgrey}
            family={Fonts.NexaLight}>
            Username
          </Typography>
          <View
            style={{
              borderWidth: 1,
              borderColor: Colors.inputLabel,
              borderRadius: 10,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingHorizontal: 10,
              paddingVertical: 5,
            }}>
            <TextInput
              autoCapitalize="none"
              autoCorrect={false}
              spellCheck={false}
              autoCorrect={false}
              keyboardType="email-address"
              underlineColorAndroid="transparent"
              placeholder="Enter Username"
              placeholderTextColor={Colors.inputLabel}
              selectionColor={Colors.inputLabel}
              style={{
                color: Colors.inputLabel,
                fontFamily: Fonts.NexaBold,
                fontSize: 18,
                width: '80%',
              }}
            />
            <FontAwesome5
              name="user-alt"
              size={20}
              color={Colors.primary}
              style={styles.icon}
            />
          </View>
        </View>
        {/* Password */}
        <View style={{marginTop: 30}}>
          <Typography
            size={22}
            mb={15}
            color={Colors.lightgrey}
            family={Fonts.NexaLight}>
            Password
          </Typography>
          <View
            style={{
              borderWidth: 1,
              borderColor: Colors.inputLabel,
              borderRadius: 10,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingHorizontal: 10,
              paddingVertical: 5,
            }}>
            <TextInput
              autoCapitalize="none"
              autoCorrect={false}
              secureTextEntry={true}
              underlineColorAndroid="transparent"
              placeholder="Enter Password"
              placeholderTextColor={Colors.inputLabel}
              selectionColor={Colors.inputLabel}
              style={{
                color: Colors.inputLabel,
                fontFamily: Fonts.NexaBold,
                fontSize: 18,
                width: '80%',
              }}
            />
            <MaterialCommunityIcons
              name="lock"
              size={20}
              color={Colors.primary}
              style={styles.icon}
            />
          </View>
        </View>
        {/* Forgot Password */}
        <View style={{alignItems: 'flex-end'}}>
          <Typography
            size={16}
            mt={15}
            color={Colors.primary}
            family={Fonts.NexaRegular}
            onPress={() => console.warn('Forogot')}>
            Forgot Password?
          </Typography>
        </View>
        {/* Button */}
        <View style={{alignItems: 'flex-end'}}>
          <LinearGradient
            style={{borderRadius: 10, marginTop: 25}}
            colors={[Colors.blue, Colors.red]}
            start={{y: 0.0, x: 0.0}}
            end={{y: 0.0, x: 1.0}}>
            <Button
              center
              middle
              w={150}
              h={70}
              radius={10}
              // bg={Colors.primary}
              onPress={() => console.warn('Sign In')}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Typography
                  size={20}
                  color={Colors.white}
                  family={Fonts.NexaBold}
                  onPress={() => console.warn('Forogot')}>
                  Sign In
                </Typography>
                {/* <AntDesign
                  name="arrowright"
                  size={50}
                  color={Colors.white}
                  // style={{opacity: 0.2}}
                /> */}
              </View>
            </Button>
          </LinearGradient>
        </View>

        <View style={{alignItems: 'center', marginTop: 50}}>
          <Typography
            size={16}
            color={Colors.primary}
            family={Fonts.NexaRegular}>
            Not a member yet?{' '}
            <Typography
              size={18}
              color={Colors.red}
              family={Fonts.NexaExtraBold}
              onPress={() => console.warn('Forogot')}>
              Sign Up
            </Typography>
          </Typography>
        </View>
      </View>
    </View>
  );
};

export default SignIn;
