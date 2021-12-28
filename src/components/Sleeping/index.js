import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {Fonts, Colors, Images} from '../../assets/Theme';
import {Logo, Button, Typography} from '../../components';
import styles from './styles';
const Sleeping = () => {
  return (
    <View style={{marginVertical: 20}}>
      <View style={styles.header}>
        <Typography size={30} color={Colors.primary} family={Fonts.NexaHeavy}>
          Sleeping
        </Typography>
        <View style={styles.HeaderImgBackground}>
          <Image source={Images.Sleep} style={styles.headerImg} />
        </View>
      </View>
      <Typography
        size={18}
        mt={20}
        mb={15}
        color={Colors.primary}
        family={Fonts.NexaExtraBold}>
        How many hours did you sleep?
      </Typography>

      <View style={styles.inputSectionWrapper}>
        <TouchableOpacity style={styles.inputWrapper}>
          <TextInput
            autoCapitalize="none"
            autoCorrect={false}
            spellCheck={false}
            keyboardType="numeric"
            underlineColorAndroid="transparent"
            placeholder="1"
            placeholderTextColor={Colors.inputLabel}
            selectionColor={Colors.primary}
            style={styles.inputStyles}
          />
          <Typography
            size={20}
            color={Colors.inputLabel}
            family={Fonts.NexaExtraBold}>
            hrs
          </Typography>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Sleeping;
