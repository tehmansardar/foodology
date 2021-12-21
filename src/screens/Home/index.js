import React, {useState, useRef} from 'react';
import {
  View,
  TextInput,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

import {Fonts, Colors, Images} from '../../assets/Theme';

import {Logo, Button, Typography} from '../../components';

import Eating from '../../components/Eating';
import Drinking from '../../components/Drinking';
import Smoking from '../../components/Smoking';
import Sleeping from '../../components/Sleeping';

import styles from './styles';
const Home = () => {
  const [count, setCount] = useState('0');

  const heightFocus = useRef(null);

  const onHeightClick = () => {
    heightFocus.current.focus();
  };

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
            family={Fonts.NexaMedium}
            mt={70}>
            Hello,
          </Typography>
          <Typography
            size={35}
            color={Colors.primary}
            family={Fonts.NexaHeavy}
            mt={10}>
            Joseph
          </Typography>

          <Typography
            size={20}
            color={Colors.lightgrey}
            family={Fonts.NexaExtraBold}
            mt={10}>
            Your daily calendar is here
          </Typography>
          <Typography
            size={16}
            color={Colors.primary}
            family={Fonts.NexaRegular}
            mt={10}>
            Let's start your food tracking for today!
          </Typography>
        </View>
        {/* Body Area */}
        <View style={styles.body}>
          <View style={styles.bodyContainer}>
            <Eating />
            <Drinking />
            <Smoking />
            <Sleeping />
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
              Save
            </Typography>
          </Button>
        </View>
      </View>
    </ScrollView>
  );
};

export default Home;
