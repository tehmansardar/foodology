import React, {useState, useRef} from 'react';
import {
  View,
  TextInput,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
  Image,
} from 'react-native';

import {Fonts, Colors, Images} from '../../assets/Theme';

import {Logo, Button, Typography} from '../../components';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from './styles';
const Suggestions = () => {
  return (
    <ScrollView
      style={styles.scrollview}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}>
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
            Suggestions
          </Typography>

          <Typography
            size={20}
            color={Colors.lightgrey}
            family={Fonts.NexaExtraBold}
            mt={10}>
            Recommendations based on your health profile
          </Typography>
        </View>
        {/* Body Area */}
        <View style={styles.body}>
          {/* Eating */}
          <View style={styles.sectionContainer}>
            <View style={styles.imageContainer}>
              <ImageBackground
                source={Images.Pizza}
                style={styles.image}
                imageStyle={{borderRadius: 10}}>
                <View style={styles.imageOverlay} />
                <Typography
                  size={25}
                  color={Colors.white}
                  // mb={10}
                  pb={15}
                  pl={15}
                  family={Fonts.NexaHeavy}
                  addStyle={styles.mainTitle}>
                  Eating
                </Typography>
              </ImageBackground>
            </View>
            <View style={styles.sectionBody}>
              <Typography
                size={18}
                color={Colors.primary}
                pt={15}
                pb={15}
                family={Fonts.NexaBold}
                addStyle={styles.mainTitle}>
                You are doing great here!
              </Typography>
              <View style={styles.comments}>
                <Typography
                  size={18}
                  mr={4}
                  color={Colors.inputLabel}
                  family={Fonts.NexaHeavy}
                  addStyle={styles.mainTitle}>
                  Comments
                </Typography>
                <MaterialCommunityIcons
                  name="comment"
                  size={25}
                  color={Colors.inputLabel}
                />
              </View>
              <View style={styles.categoryContainer}>
                <View style={styles.categoryLeft}>
                  <Typography
                    size={18}
                    color={Colors.primary}
                    family={Fonts.NexaBold}>
                    Breakfast
                  </Typography>
                  <Image source={Images.Breakfast} style={styles.categoryImg} />
                </View>
                <Typography
                  size={14}
                  color={Colors.primary}
                  family={Fonts.NexaBold}>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore.
                </Typography>
              </View>
              {/* Lunch */}
              <View style={styles.categoryContainer}>
                <View style={styles.categoryLeft}>
                  <Typography
                    size={18}
                    color={Colors.primary}
                    family={Fonts.NexaBold}>
                    Breakfast
                  </Typography>
                  <Image source={Images.Breakfast} style={styles.categoryImg} />
                </View>
                <Typography
                  size={14}
                  color={Colors.primary}
                  family={Fonts.NexaBold}>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore.
                </Typography>
              </View>
              {/* Dinner */}
              <View style={styles.categoryContainer}>
                <View style={styles.categoryLeft}>
                  <Typography
                    size={18}
                    color={Colors.primary}
                    family={Fonts.NexaBold}>
                    Breakfast
                  </Typography>
                  <Image source={Images.Breakfast} style={styles.categoryImg} />
                </View>
                <Typography
                  size={14}
                  color={Colors.primary}
                  family={Fonts.NexaBold}>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore.
                </Typography>
              </View>
            </View>
          </View>
          {/* Drinking */}
          {/* Smoking */}
          {/* Drink Alcohol */}
          {/* Sleeping */}
        </View>
      </View>
    </ScrollView>
  );
};

export default Suggestions;
