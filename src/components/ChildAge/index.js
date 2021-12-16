import React, {useRef} from 'react';
import {View, TextInput, TouchableOpacity} from 'react-native';
import {Fonts, Colors, Images} from '../../assets/Theme';
import {Logo, Button, Typography} from '../../components';
import styles from './styles';

const ChildAge = ({child}) => {
  const thisFocus = useRef();
  const onInputClick = () => {
    thisFocus.current.focus();
  };
  return (
    <View style={{marginTop: 30, zIndex: 4}}>
      <View style={styles.sectionWrapper}>
        <TouchableOpacity style={styles.inputWrapper} onPress={onInputClick}>
          <Typography
            size={18}
            color={Colors.lightgrey}
            family={Fonts.NexaBold}>
            Child {child + 1}
          </Typography>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              flex: 1,
              marginLeft: 50,
              width: '50%',
            }}>
            <TextInput
              autoCapitalize="none"
              autoCorrect={false}
              spellCheck={false}
              autoCorrect={false}
              keyboardType="numeric"
              underlineColorAndroid="transparent"
              placeholder="1"
              placeholderTextColor={Colors.primary}
              selectionColor={Colors.primary}
              style={styles.inputStyles}
              ref={thisFocus}
              maxLength={2}
            />
            <Typography
              size={18}
              color={Colors.lightgrey}
              family={Fonts.NexaBold}>
              Yrs old
            </Typography>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ChildAge;
