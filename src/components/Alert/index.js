import React from 'react';

import Entypo from 'react-native-vector-icons/Entypo';

import {View} from 'react-native';
import {Logo, Button, Typography} from '../../components';
import {Fonts, Colors, Images} from '../../assets/Theme';
import styles from './styles';

import {useDispatch} from 'react-redux';

import {dispatchAlertClose} from '../../redux/actions/alertActions';

const Alert = ({msg, color}) => {
  const dispatch = useDispatch();

  return (
    <View style={[styles.container, {backgroundColor: color}]}>
      <Typography size={15} color={Colors.white} family={Fonts.NexaRegular}>
        {msg}
      </Typography>
      <Button onPress={() => dispatch(dispatchAlertClose())}>
        <Entypo name="circle-with-cross" size={25} color={Colors.white} />
      </Button>
    </View>
  );
};

export default Alert;
