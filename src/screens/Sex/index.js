import React, {useState} from 'react';
import {View, TouchableOpacity} from 'react-native';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import Feather from 'react-native-vector-icons/Feather';

import {Fonts, Colors, Images} from '../../assets/Theme';

import {Logo, Button, Typography} from '../../components';

import Alert from '../../components/Alert';

import styles from './styles';

import {useNavigation} from '@react-navigation/native';

import {useSelector, useDispatch} from 'react-redux';

import {dispatchUserGender} from '../../redux/actions/authActions';

const initialState = {
  err: '',
  success: '',
  alertColor: '',
};

const Sex = () => {
  const dispatch = useDispatch();

  const navigation = useNavigation();

  const [user, setUser] = useState(initialState);
  const {err, success, alertColor} = user;

  const [gender, setGender] = useState('male');

  // Error
  const alert = useSelector(state => state.alertReducer.show);

  const onNextHandle = () => {
    dispatch(dispatchUserGender(gender));
    navigation.navigate('Ethnicity');
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
              family={Fonts.NexaBold}>
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
            onPress={() => onNextHandle()}>
            {/* onPress={() => navigation.navigate('Ethnicity')}> */}

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

export default Sex;
