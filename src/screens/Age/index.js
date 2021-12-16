import React, {useState, useRef} from 'react';
import {View, TextInput, TouchableOpacity} from 'react-native';

import DropDownPicker from 'react-native-dropdown-picker';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {Fonts, Colors, Images} from '../../assets/Theme';

import {Logo, Button, Typography} from '../../components';

import styles from './styles';
const Age = () => {
  const heightFocus = useRef(null);
  const weightFocus = useRef(null);

  const [open, setOpen] = useState(false);
  const [openWeight, setOpenWeight] = useState(false);

  const [value, setValue] = useState('cm');
  const [valueWeight, setValueWeight] = useState('kg');

  const [items, setItems] = useState([
    {label: 'cm', value: 'cm'},
    {label: 'inch', value: 'inch'},
  ]);

  const [itemsWeight, setItemsWeight] = useState([
    {label: 'kg', value: 'kg'},
    {label: 'pound', value: 'pound'},
  ]);

  const onHeightClick = () => {
    heightFocus.current.focus();
  };

  const onWeightClick = () => {
    heightFocus.current.focus();
  };

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
          Age
        </Typography>

        {/* Height */}
        <View style={{marginTop: 30, zIndex: 4}}>
          <Typography
            size={22}
            mb={15}
            color={Colors.lightgrey}
            family={Fonts.NexaBold}>
            My age is
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
                placeholder="DD"
                placeholderTextColor={Colors.lightgrey}
                selectionColor={Colors.primary}
                style={styles.inputStyles}
                ref={heightFocus}
              />
            </TouchableOpacity>
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
                placeholder="MM"
                placeholderTextColor={Colors.lightgrey}
                selectionColor={Colors.primary}
                style={styles.inputStyles}
                ref={heightFocus}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.inputWrapper,
                {width: '40%', backgroundColor: Colors.primary},
              ]}
              onPress={onHeightClick}>
              <TextInput
                autoCapitalize="none"
                autoCorrect={false}
                spellCheck={false}
                autoCorrect={false}
                keyboardType="numeric"
                underlineColorAndroid="transparent"
                placeholder="YYYY"
                placeholderTextColor={Colors.lightgrey}
                selectionColor={Colors.primary}
                style={[styles.inputStyles, {color: Colors.white}]}
                ref={heightFocus}
              />
            </TouchableOpacity>
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

export default Age;
