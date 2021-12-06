import React, {useState} from 'react';
import {View} from 'react-native';

import Feather from 'react-native-vector-icons/Feather';

import {Fonts, Colors, Images} from '../../assets/Theme';

import {Logo, Button, Typography} from '../../components';

import styles from './styles';
const Sex = () => {
  const [gender, setGender] = useState('male');

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
          size={35}
          color={Colors.primary}
          family={Fonts.NexaHeavy}
          mt={15}>
          Sex
        </Typography>

        {/* Weight */}
        <View style={{marginTop: 30, zIndex: 3}}>
          <Typography
            size={22}
            mb={25}
            color={Colors.lightgrey}
            family={Fonts.NexaBold}>
            My gender is
          </Typography>
          {/* <View style={styles.sectionWrapper}> */}
          <Button
            center
            middle
            // w={120}
            full
            h={80}
            radius={10}
            bg={gender === 'male' ? Colors.primary : Colors.transparent}
            addstyle={{borderWidth: 1}}
            onPress={() => setGender('male')}>
            <Typography
              size={20}
              color={gender === 'male' ? Colors.white : Colors.primary}
              family={Fonts.NexaBold}
              onPress={() => console.warn('Forogot')}>
              Male
            </Typography>
          </Button>

          <Button
            center
            middle
            full
            h={80}
            radius={10}
            bg={gender === 'female' ? Colors.primary : Colors.transparent}
            addstyle={{marginTop: 20, borderWidth: 1}}
            onPress={() => setGender('female')}>
            <Typography
              size={20}
              color={gender === 'female' ? Colors.white : Colors.primary}
              family={Fonts.NexaBold}
              onPress={() => console.warn('Forogot')}>
              Female
            </Typography>
          </Button>
          {/* </View> */}
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
            onPress={() => console.warn('Sign In')}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Typography
                size={20}
                color={Colors.white}
                family={Fonts.NexaBold}
                onPress={() => console.warn('Forogot')}>
                Next
              </Typography>
              <Feather name="chevron-right" size={25} color={Colors.white} />
            </View>
          </Button>
        </View>
      </View>
    </View>
  );
};

export default Sex;
