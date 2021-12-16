import React, {useState, useRef} from 'react';
import {
  View,
  TextInput,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

import Feather from 'react-native-vector-icons/Feather';

import {Fonts, Colors, Images} from '../../assets/Theme';

import {Logo, Button, Typography} from '../../components';

import ChildAge from '../../components/ChildAge';

import styles from './styles';
const Children = () => {
  const [count, setCount] = useState('0');

  const heightFocus = useRef(null);

  const onHeightClick = () => {
    heightFocus.current.focus();
  };

  return (
    // <SafeAreaView>
    <ScrollView style={styles.scrollview}>
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
            Number of Children
          </Typography>

          {/* Children */}
          <View style={{marginTop: 30, zIndex: 4}}>
            <Typography
              size={22}
              mb={15}
              color={Colors.lightgrey}
              family={Fonts.NexaBold}>
              I have
            </Typography>
            <View style={styles.sectionWrapper}>
              <TouchableOpacity
                style={styles.inputWrapper}
                onPress={onHeightClick}>
                <TextInput
                  autoCapitalize="none"
                  autoCorrect={false}
                  spellCheck={false}
                  autoCorrect={false}
                  keyboardType="numeric"
                  underlineColorAndroid="transparent"
                  value={count}
                  onChangeText={setCount}
                  selectionColor={Colors.primary}
                  style={styles.inputStyles}
                  ref={heightFocus}
                  maxLength={1}
                />
                <Typography
                  size={18}
                  color={Colors.lightgrey}
                  family={Fonts.NexaBold}>
                  Children
                </Typography>
              </TouchableOpacity>
            </View>
          </View>
          <View style={{marginTop: 50}}>
            <Typography
              size={22}
              mb={15}
              color={Colors.lightgrey}
              family={Fonts.NexaBold}>
              Their ages are
            </Typography>
            {[...Array(count != '' && parseInt(count))].map((el, index) => (
              <ChildAge key={index} child={index} />
            ))}
          </View>
          {/* <ChildAge /> */}

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
    </ScrollView>
    // </SafeAreaView>
  );
};

export default Children;
