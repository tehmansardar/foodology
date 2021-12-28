import React, {useState, useRef} from 'react';
import {
  View,
  TextInput,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

import DropDownPicker from 'react-native-dropdown-picker';

import {Fonts, Colors, Images} from '../../assets/Theme';

import {Logo, Button, Typography} from '../../components';

import Octicons from 'react-native-vector-icons/Octicons';

import styles from './styles';
const Profile = () => {
  const [openWeight, setOpenWeight] = useState(false);
  const [openEthnicity, setOpenEthnicity] = useState(false);

  const [valueWeight, setValueWeight] = useState('kg');
  const [valueEthnicity, setValueEthnicity] = useState('');

  const [itemsWeight, setItemsWeight] = useState([
    {label: 'kg', value: 'kg'},
    {label: 'pound', value: 'pound'},
  ]);
  const [itemsEthnicity, setItemsEthnicity] = useState([
    {label: 'Asian', value: 'Asian'},
    {label: 'African', value: 'African'},
    {label: 'American', value: 'American'},
    {label: 'Native Hawaiian', value: 'Native Hawaiian'},
    {label: 'Hispanic or Latino', value: 'Hispanic or Latino'},
  ]);

  return (
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
        {/* <View
          style={{
            width: 100,
            height: 100,
            borderRadius: 10000,
            position: 'absolute',
            backgroundColor: Colors.orange,
            left: -50,
            bottom: 90,
          }}
        /> */}
        <View style={styles.container}>
          <Typography
            size={35}
            color={Colors.primary}
            family={Fonts.NexaBold}
            mt={70}>
            My ProfIe
          </Typography>

          <Typography
            size={20}
            color={Colors.lightgrey}
            family={Fonts.NexaExtraBold}
            mt={10}>
            Edit your credentials
          </Typography>
        </View>
        {/* Body Area */}
        <View style={styles.body}>
          <View style={styles.bodyContainer}>
            {/* username */}
            <View>
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
                  keyboardType="default"
                  underlineColorAndroid="transparent"
                  placeholder="Enter Username"
                  placeholderTextColor={Colors.inputLabel}
                  selectionColor={Colors.inputLabel}
                  style={styles.inputStyles}
                />
                <Octicons name="pencil" size={20} color={Colors.primary} />
              </View>
            </View>
            {/* email */}
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
                  keyboardType="email-address"
                  underlineColorAndroid="transparent"
                  placeholder="Enter Email Address"
                  placeholderTextColor={Colors.inputLabel}
                  selectionColor={Colors.inputLabel}
                  style={styles.inputStyles}
                />
              </View>
            </View>
            {/* password */}
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
                <Octicons name="pencil" size={20} color={Colors.primary} />
              </View>
            </View>
            {/* height */}
            <View style={{marginTop: 30, zIndex: 3}}>
              <Typography
                size={22}
                mb={15}
                color={Colors.lightgrey}
                family={Fonts.NexaLight}>
                Height
              </Typography>
              <View style={styles.sectionWrapper}>
                <TouchableOpacity style={styles.inputWrapperSecondary}>
                  <TextInput
                    autoCapitalize="none"
                    autoCorrect={false}
                    spellCheck={false}
                    keyboardType="numeric"
                    underlineColorAndroid="transparent"
                    selectionColor={Colors.primary}
                    style={styles.inputStylesSecondary}
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
            {/* weight */}
            <View style={{marginTop: 30, zIndex: 3}}>
              <Typography
                size={22}
                mb={15}
                color={Colors.lightgrey}
                family={Fonts.NexaLight}>
                Weight
              </Typography>
              <View style={styles.sectionWrapper}>
                <TouchableOpacity style={styles.inputWrapperSecondary}>
                  <TextInput
                    autoCapitalize="none"
                    autoCorrect={false}
                    spellCheck={false}
                    keyboardType="numeric"
                    underlineColorAndroid="transparent"
                    selectionColor={Colors.primary}
                    style={styles.inputStylesSecondary}
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
            {/* Age */}
            <View style={{marginTop: 30}}>
              <Typography
                size={22}
                mb={15}
                color={Colors.lightgrey}
                family={Fonts.NexaLight}>
                Age
              </Typography>
              <View style={styles.sectionWrapper}>
                <TouchableOpacity style={styles.inputAgeWrapper}>
                  <TextInput
                    autoCapitalize="none"
                    autoCorrect={false}
                    spellCheck={false}
                    keyboardType="numeric"
                    underlineColorAndroid="transparent"
                    placeholder="DD"
                    placeholderTextColor={Colors.lightgrey}
                    selectionColor={Colors.primary}
                    style={styles.inputAgeStyles}
                  />
                </TouchableOpacity>
                <TouchableOpacity style={styles.inputAgeWrapper}>
                  <TextInput
                    autoCapitalize="none"
                    autoCorrect={false}
                    spellCheck={false}
                    keyboardType="numeric"
                    underlineColorAndroid="transparent"
                    placeholder="MM"
                    placeholderTextColor={Colors.lightgrey}
                    selectionColor={Colors.primary}
                    style={styles.inputAgeStyles}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  style={[
                    styles.inputAgeWrapper,
                    {width: '37%', backgroundColor: Colors.primary},
                  ]}>
                  <TextInput
                    autoCapitalize="none"
                    autoCorrect={false}
                    spellCheck={false}
                    keyboardType="numeric"
                    underlineColorAndroid="transparent"
                    placeholder="YYYY"
                    placeholderTextColor={Colors.lightgrey}
                    selectionColor={Colors.primary}
                    style={[styles.inputAgeStyles, {color: Colors.white}]}
                  />
                </TouchableOpacity>
              </View>
            </View>
            {/* Gender */}
            <View style={{marginTop: 30}}>
              <Typography
                size={22}
                mb={15}
                color={Colors.lightgrey}
                family={Fonts.NexaLight}>
                Age
              </Typography>
              <View style={styles.genderWrapper}>
                <Button
                  center
                  middle
                  w={'48%'}
                  h={65}
                  radius={10}
                  bg={Colors.primary}
                  addstyle={{borderWidth: 1}}
                  onPress={() => setGender('male')}>
                  <Typography
                    size={20}
                    color={Colors.white}
                    family={Fonts.NexaBold}
                    onPress={() => console.warn('Forogot')}>
                    Male
                  </Typography>
                </Button>
                <Button
                  center
                  middle
                  w={'48%'}
                  h={65}
                  radius={10}
                  bg={Colors.transparent}
                  addstyle={{borderWidth: 1}}
                  onPress={() => setGender('male')}>
                  <Typography
                    size={20}
                    color={Colors.primary}
                    family={Fonts.NexaBold}
                    onPress={() => console.warn('Forogot')}>
                    Female
                  </Typography>
                </Button>
              </View>
            </View>
            {/* Ethnicity */}
            <View style={{marginTop: 30}}>
              <Typography
                size={22}
                mb={15}
                color={Colors.lightgrey}
                family={Fonts.NexaLight}>
                Ethnicity
              </Typography>
              <View style={styles.pickerEthnictyWrapper}>
                <DropDownPicker
                  placeholder="Select"
                  open={openEthnicity}
                  value={valueEthnicity}
                  items={itemsEthnicity}
                  setOpen={setOpenEthnicity}
                  setValue={setValueEthnicity}
                  setItems={setItemsEthnicity}
                  onChangeValue={() => console.log(valueEthnicity)}
                  showTickIcon={false}
                  style={{
                    backgroundColor: Colors.secondary,
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
                    color: Colors.tertiary,
                  }}
                  labelStyle={{
                    color: Colors.tertiary,
                  }}
                  listItemLabelStyle={{
                    color: Colors.primary,
                  }}
                  arrowIconStyle={{
                    tintColor: Colors.primary,
                  }}
                />
              </View>
            </View>
            {/* Marital Status */}
            <View style={{marginTop: 30}}>
              <Typography
                size={22}
                mb={15}
                color={Colors.lightgrey}
                family={Fonts.NexaLight}>
                Marital Status
              </Typography>
              <View style={styles.pickerEthnictyWrapper}>
                <DropDownPicker
                  placeholder="Select"
                  open={openEthnicity}
                  value={valueEthnicity}
                  items={itemsEthnicity}
                  setOpen={setOpenEthnicity}
                  setValue={setValueEthnicity}
                  setItems={setItemsEthnicity}
                  onChangeValue={() => console.log(valueEthnicity)}
                  showTickIcon={false}
                  style={{
                    backgroundColor: Colors.secondary,
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
                    color: Colors.tertiary,
                  }}
                  labelStyle={{
                    color: Colors.tertiary,
                  }}
                  listItemLabelStyle={{
                    color: Colors.primary,
                  }}
                  arrowIconStyle={{
                    tintColor: Colors.primary,
                  }}
                />
              </View>
            </View>
            {/* Number of Children*/}
            <View style={{marginTop: 20}}>
              <Typography
                size={22}
                mb={15}
                color={Colors.lightgrey}
                family={Fonts.NexaLight}>
                Number of children
              </Typography>
              <View style={styles.inputWrapper}>
                <TextInput
                  autoCapitalize="none"
                  autoCorrect={false}
                  spellCheck={false}
                  keyboardType="default"
                  underlineColorAndroid="transparent"
                  placeholder="Enter Username"
                  placeholderTextColor={Colors.inputLabel}
                  selectionColor={Colors.inputLabel}
                  style={styles.inputStyles}
                />
                <Octicons name="pencil" size={20} color={Colors.primary} />
              </View>
            </View>
          </View>
          {/* Save */}
          <Button
            center
            middle
            w={'100%'}
            h={65}
            radius={10}
            bg={Colors.primary}
            addstyle={{marginTop: 20, borderWidth: 1}}>
            <Typography size={20} color={Colors.white} family={Fonts.NexaBold}>
              Save Changes
            </Typography>
          </Button>
        </View>
      </View>
    </ScrollView>
  );
};

export default Profile;
