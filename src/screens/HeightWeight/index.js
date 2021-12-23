import React, {useState, useRef} from 'react';
import {View, TextInput, TouchableOpacity} from 'react-native';

import DropDownPicker from 'react-native-dropdown-picker';

import Feather from 'react-native-vector-icons/Feather';

import {Fonts, Colors, Images} from '../../assets/Theme';

import {Logo, Button, Typography} from '../../components';

import styles from './styles';

import {useNavigation} from '@react-navigation/native';

const HeightWeight = () => {
  const navigation = useNavigation();

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
          Height and Weight
        </Typography>

        {/* Height */}
        <View style={{marginTop: 30, zIndex: 4}}>
          <Typography
            size={22}
            mb={15}
            color={Colors.lightgrey}
            family={Fonts.NexaBold}>
            My Height is
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
                selectionColor={Colors.primary}
                style={styles.inputStyles}
                ref={heightFocus}
              />
            </TouchableOpacity>
            <View style={styles.pickerWrapper}>
              <DropDownPicker
                open={open}
                value={value}
                items={items}
                setOpen={setOpen}
                setValue={setValue}
                setItems={setItems}
                onChangeValue={() => console.log(value)}
                showTickIcon={false}
                style={{
                  backgroundColor: Colors.primary,
                  borderWidth: 0,
                  height: '100%',
                }}
                dropDownContainerStyle={{
                  backgroundColor: Colors.secondary,
                  borderWidth: 0,
                }}
                textStyle={{
                  fontSize: 18,
                  fontFamily: Fonts.NexaRegular,
                  color: Colors.white,
                }}
                labelStyle={{
                  color: Colors.white,
                }}
                listItemLabelStyle={{
                  color: Colors.primary,
                }}
                arrowIconStyle={{
                  tintColor: Colors.white,
                }}
              />
            </View>
          </View>
        </View>

        {/* Weight */}
        <View style={{marginTop: 30, zIndex: 3}}>
          <Typography
            size={22}
            mb={15}
            color={Colors.lightgrey}
            family={Fonts.NexaBold}>
            My weight is
          </Typography>
          <View style={styles.sectionWrapper}>
            <TouchableOpacity
              style={styles.inputWrapper}
              onPress={onWeightClick}>
              <TextInput
                autoCapitalize="none"
                autoCorrect={false}
                spellCheck={false}
                autoCorrect={false}
                keyboardType="numeric"
                underlineColorAndroid="transparent"
                selectionColor={Colors.primary}
                style={styles.inputStyles}
                ref={heightFocus}
              />
            </TouchableOpacity>
            <View style={styles.pickerWrapper}>
              <DropDownPicker
                open={openWeight}
                value={valueWeight}
                items={itemsWeight}
                setOpen={setOpenWeight}
                setValue={setValueWeight}
                setItems={setItemsWeight}
                onChangeValue={() => console.log(valueWeight)}
                showTickIcon={false}
                style={{
                  backgroundColor: Colors.primary,
                  borderWidth: 0,
                  height: '100%',
                }}
                dropDownContainerStyle={{
                  backgroundColor: Colors.secondary,
                  borderWidth: 0,
                }}
                textStyle={{
                  fontSize: 18,
                  fontFamily: Fonts.NexaRegular,
                  color: Colors.white,
                }}
                labelStyle={{
                  color: Colors.white,
                }}
                listItemLabelStyle={{
                  color: Colors.primary,
                }}
                arrowIconStyle={{
                  tintColor: Colors.white,
                }}
              />
            </View>
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
            onPress={() => navigation.navigate('Age')}>
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
      </View>
    </View>
  );
};

export default HeightWeight;
