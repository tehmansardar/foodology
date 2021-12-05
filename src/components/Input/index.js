import React from 'react';
import {View, TextInput} from 'react-native';
import {Typography} from '../../components';
const Input = props => {
  const {label, rightLabel, full, email, phone, number, password, style} =
    props;

  const inputType = email
    ? 'email-address'
    : number
    ? 'numeric'
    : phone
    ? 'phone-pad'
    : 'default';

  return (
    <View>
      <Typography size={22} color={'#ccc'} weight={'300'}>
        Username
      </Typography>
      <View>
        <TextInput
          //   style={inputStyles}
          secureTextEntry={password}
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType={inputType}
          placeholder="useless placeholder"
          placeholderTextColor={'red'}
          {...props}
        />
      </View>
    </View>
  );
};

export default Input;
