import React from 'react';
import {View, Text, ImageBackground, StyleSheet} from 'react-native';
import {Logo, Button, Typography} from '../../components';
import {Fonts, Colors, Images} from '../../assets/Theme';
import {border} from 'native-base/lib/typescript/theme/styled-system';

const Item = ({name, uri}) => {
  return (
    <View
      style={{
        width: 100,
        aspectRatio: 2 / 2,
        borderRadius: 30,
      }}>
      <ImageBackground
        resizeMode="cover"
        source={uri}
        imageStyle={{borderRadius: 10}}
        style={{
          width: '100%',
          height: '100%',
          borderRadius: 30,
          justifyContent: 'flex-end',
          alignItems: 'center',
        }}>
        <View
          style={{
            position: 'absolute',
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            backgroundColor: Colors.primary,
            opacity: 0.4,
            borderRadius: 10,
          }}
        />
        <View
          style={{
            position: 'absolute',
            top: 10,
            right: 10,
            borderWidth: 1.5,
            borderColor: Colors.white,
            width: 20,
            height: 20,
            borderRadius: 10,
          }}
        />
        <Typography
          size={16}
          color={Colors.white}
          mb={10}
          family={Fonts.NexaExtraBold}>
          {name}
        </Typography>
      </ImageBackground>
    </View>
  );
};

export default Item;
