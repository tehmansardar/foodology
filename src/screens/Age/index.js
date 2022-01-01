import React, {useState, useRef} from 'react';
import {View, TextInput, TouchableOpacity} from 'react-native';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import Feather from 'react-native-vector-icons/Feather';

import {Fonts, Colors, Images} from '../../assets/Theme';

import {Logo, Button, Typography} from '../../components';

import Alert from '../../components/Alert';

import styles from './styles';

import {useNavigation} from '@react-navigation/native';

import {useSelector, useDispatch} from 'react-redux';
import {
  dispatchAlert,
  dispatchAlertClose,
} from '../../redux/actions/alertActions';
import {dispatchUserAge} from '../../redux/actions/authActions';
const initialState = {
  day: '',
  month: '',
  year: '',
  err: '',
  success: '',
  alertColor: '',
};

import {isEmpty} from '../../utils/validation';

const Age = () => {
  const dispatch = useDispatch();

  const navigation = useNavigation();

  // Error
  const alert = useSelector(state => state.alertReducer.show);

  const [user, setUser] = useState(initialState);
  const {day, month, year, err, success, alertColor} = user;

  console.log(user);

  const dd = useRef(null);
  const mm = useRef(null);
  const yy = useRef(null);

  const onddtClick = () => {
    dd.current.focus();
  };
  const onmmtClick = () => {
    mm.current.focus();
  };
  const onyytClick = () => {
    yy.current.focus();
  };

  const handleChange = (text, prop) => {
    dispatch(dispatchAlertClose());
    setUser({...user, [prop]: text, err: '', success: ''});
  };

  const onNextHandle = () => {
    if (isEmpty(day) || isEmpty(month) || isEmpty(year)) {
      setUser({
        ...user,
        alertColor: Colors.red,
        err: 'Fill all the fields',
        success: '',
      });
      return dispatch(dispatchAlert());
    }

    if (day < 1 || day > 31 || month < 1 || month > 12 || year > 2005) {
      setUser({
        ...user,
        alertColor: Colors.red,
        err: 'Invalid Date',
        success: '',
      });
      return dispatch(dispatchAlert());
    }

    // console.log({age: `${day}-${month}-${year}`});

    dispatch(dispatchUserAge({age: `${day}-${month}-${year}`}));

    navigation.navigate('Sex');
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
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <MaterialIcons
            name="keyboard-backspace"
            size={30}
            color={Colors.primary}
          />
        </TouchableOpacity>
        <Typography
          size={35}
          color={Colors.primary}
          family={Fonts.NexaHeavy}
          mt={15}>
          Age
        </Typography>

        <View style={{marginTop: 30, zIndex: 4}}>
          <Typography
            size={22}
            mb={15}
            color={Colors.lightgrey}
            family={Fonts.NexaBold}>
            My age is
          </Typography>
          <View style={styles.sectionWrapper}>
            {/* DD */}
            <TouchableOpacity style={styles.inputWrapper} onPress={onddtClick}>
              <TextInput
                autoCapitalize="none"
                autoCorrect={false}
                spellCheck={false}
                keyboardType="numeric"
                underlineColorAndroid="transparent"
                placeholder="DD"
                placeholderTextColor={Colors.lightgrey}
                selectionColor={Colors.primary}
                style={styles.inputStyles}
                ref={dd}
                onChangeText={text => handleChange(text, 'day')}
              />
            </TouchableOpacity>

            {/* MM */}
            <TouchableOpacity style={styles.inputWrapper} onPress={onmmtClick}>
              <TextInput
                autoCapitalize="none"
                autoCorrect={false}
                spellCheck={false}
                keyboardType="numeric"
                underlineColorAndroid="transparent"
                placeholder="MM"
                placeholderTextColor={Colors.lightgrey}
                selectionColor={Colors.primary}
                style={styles.inputStyles}
                ref={mm}
                onChangeText={text => handleChange(text, 'month')}
              />
            </TouchableOpacity>

            {/* YY */}
            <TouchableOpacity
              style={[
                styles.inputWrapper,
                {width: '40%', backgroundColor: Colors.primary},
              ]}
              onPress={onyytClick}>
              <TextInput
                autoCapitalize="none"
                autoCorrect={false}
                spellCheck={false}
                keyboardType="numeric"
                underlineColorAndroid="transparent"
                placeholder="YYYY"
                placeholderTextColor={Colors.lightgrey}
                selectionColor={Colors.primary}
                style={[styles.inputStyles, {color: Colors.white}]}
                ref={yy}
                onChangeText={text => handleChange(text, 'year')}
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
            // onPress={() => navigation.navigate('Sex')}
            onPress={() => onNextHandle()}>
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
      {alert && <Alert msg={err ? err : success} color={alertColor} />}
    </View>
  );
};

export default Age;
