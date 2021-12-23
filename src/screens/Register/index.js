import React from 'react';
import {View, TextInput} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {Fonts, Colors, Images} from '../../assets/Theme';

import {Logo, Button, Typography} from '../../components';

import styles from './styles';

import {useNavigation} from '@react-navigation/native';

const Register = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.wrapper}>
      <View
        style={{
          width: 150,
          height: 150,
          borderRadius: 10000,
          position: 'absolute',
          backgroundColor: Colors.blue,
          top: -30,
          right: -30,
        }}
      />
      <View
        style={{
          width: 100,
          height: 100,
          borderRadius: 10000,
          position: 'absolute',
          backgroundColor: Colors.orange,
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
          Register
        </Typography>

        <Typography
          size={18}
          color={Colors.tertiary}
          family={Fonts.NexaBold}
          mt={15}>
          Sign up and start tracking
        </Typography>

        {/* Username */}
        <View style={{marginTop: 30}}>
          <Typography
            size={22}
            mb={15}
            color={Colors.lightgrey}
            family={Fonts.NexaLight}>
            Username
          </Typography>
          <View style={styles.inputWrapper}>
            <TextInput
              autoCapitalize="none"
              autoCorrect={false}
              spellCheck={false}
              autoCorrect={false}
              keyboardType="default"
              underlineColorAndroid="transparent"
              placeholder="Enter Username"
              placeholderTextColor={Colors.inputLabel}
              selectionColor={Colors.inputLabel}
              style={styles.inputStyles}
            />
            <FontAwesome5 name="user-alt" size={20} color={Colors.primary} />
          </View>
        </View>

        {/* Email */}
        <View style={{marginTop: 30}}>
          <Typography
            size={22}
            mb={15}
            color={Colors.lightgrey}
            family={Fonts.NexaLight}>
            Email
          </Typography>
          <View style={styles.inputWrapper}>
            <TextInput
              autoCapitalize="none"
              autoCorrect={false}
              spellCheck={false}
              autoCorrect={false}
              keyboardType="email-address"
              underlineColorAndroid="transparent"
              placeholder="Enter Email Address"
              placeholderTextColor={Colors.inputLabel}
              selectionColor={Colors.inputLabel}
              style={styles.inputStyles}
            />
            <FontAwesome name="envelope" size={20} color={Colors.primary} />
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
          <View style={styles.inputWrapper}>
            <TextInput
              autoCapitalize="none"
              autoCorrect={false}
              secureTextEntry={true}
              underlineColorAndroid="transparent"
              placeholder="Enter Password"
              placeholderTextColor={Colors.inputLabel}
              selectionColor={Colors.inputLabel}
              style={styles.inputStyles}
            />
            <MaterialCommunityIcons
              name="lock"
              size={20}
              color={Colors.primary}
            />
          </View>
        </View>

        {/* Button */}
        <View style={{alignItems: 'flex-end', marginTop: 40}}>
          <Button
            center
            middle
            w={120}
            h={50}
            radius={10}
            bg={Colors.primary}
            onPress={() => navigation.navigate('HeightWeight')}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Typography
                size={20}
                color={Colors.white}
                family={Fonts.NexaBold}>
                Next
              </Typography>
              <Feather name="chevron-right" size={25} color={Colors.white} />
            </View>
          </Button>
        </View>

        <View style={{alignItems: 'center', marginTop: 50}}>
          <Typography
            size={16}
            color={Colors.primary}
            family={Fonts.NexaRegular}>
            Already a member?{' '}
            <Typography
              size={18}
              color={Colors.red}
              family={Fonts.NexaExtraBold}
              onPress={() => navigation.navigate('SignIn')}>
              Sign In
            </Typography>
          </Typography>
        </View>
      </View>
    </View>
  );
};

export default Register;
