import React, {useState} from 'react';

import {View, TouchableOpacity} from 'react-native';

import DropDownPicker from 'react-native-dropdown-picker';

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
import {dispatchUserEthnicity} from '../../redux/actions/authActions';

import {isEmpty} from '../../utils/validation';

const initialState = {
  err: '',
  success: '',
  alertColor: '',
};

const Ethnicity = () => {
  const dispatch = useDispatch();

  // Error
  const alert = useSelector(state => state.alertReducer.show);

  const navigation = useNavigation();

  const [user, setUser] = useState(initialState);
  const {err, success, alertColor} = user;

  const [open, setOpen] = useState(false);

  const [value, setValue] = useState('');

  const [items, setItems] = useState([
    {label: 'Asian', value: 'Asian'},
    {label: 'African', value: 'African'},
    {label: 'American', value: 'American'},
    {label: 'Native Hawaiian', value: 'Native Hawaiian'},
    {label: 'Hispanic or Latino', value: 'Hispanic or Latino'},
  ]);

  const onNextHandle = () => {
    console.log(value);
    if (isEmpty(value)) {
      setUser({
        ...user,
        alertColor: Colors.red,
        err: 'Select ethnicity',
        success: '',
      });
      return dispatch(dispatchAlert());
    }
    dispatch(dispatchUserEthnicity(value));
    navigation.navigate('MaritalStatus');
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
          Ethnicity
        </Typography>

        {/* Height */}
        <View style={{marginTop: 30, zIndex: 4}}>
          <Typography
            size={22}
            mb={15}
            color={Colors.lightgrey}
            family={Fonts.NexaBold}>
            My ethnic group is
          </Typography>
          <View style={styles.sectionWrapper}>
            <View style={styles.pickerWrapper}>
              <DropDownPicker
                placeholder="Select"
                open={open}
                value={value}
                items={items}
                setOpen={setOpen}
                setValue={setValue}
                setItems={setItems}
                // onChangeValue={() => console.log(value)}
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

export default Ethnicity;
