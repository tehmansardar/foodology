import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import {Fonts, Colors, Images} from '../../assets/Theme';
import {Logo, Button, Typography} from '../../components';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Item from '../Item';
import styles from './styles';
const Smoking = () => {
  const food = [
    {
      id: 1,
      uri: Images.Pizza,
      name: 'Pizza',
    },
    {
      id: 2,
      uri: Images.Desert,
      name: 'Desert',
    },
    {
      id: 3,
      uri: Images.pudding,
      name: 'Pudding',
    },
    {
      id: 4,
      uri: Images.Burger,
      name: 'Burger',
    },
  ];

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState('am');

  const [items, setItems] = useState([
    {label: 'am', value: 'am'},
    {label: 'pm', value: 'pm'},
  ]);

  return (
    <View>
      <View style={styles.header}>
        <Typography size={30} color={Colors.primary} family={Fonts.NexaHeavy}>
          Smoking
        </Typography>
        <View style={styles.HeaderImgBackground}>
          <Image source={Images.SmokeThumb} style={styles.headerImg} />
        </View>
      </View>
      <Typography
        size={20}
        mt={20}
        mb={15}
        color={Colors.primary}
        family={Fonts.NexaExtraBold}>
        Did you smoke today?
      </Typography>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Button
          center
          middle
          w={'48%'}
          h={150}
          radius={10}
          bg={Colors.primary}
          onPress={() => console.warn('Sign In')}>
          <View style={{alignItems: 'center'}}>
            <Image
              source={Images.Smoking}
              style={{width: 100, height: 70, resizeMode: 'contain'}}
            />
            <Typography
              size={20}
              mt={20}
              mb={5}
              color={Colors.white}
              family={Fonts.NexaExtraBold}>
              Yes
            </Typography>
          </View>
        </Button>

        <Button
          center
          middle
          w={'48%'}
          h={150}
          radius={10}
          addstyle={{borderWidth: 1}}
          onPress={() => console.warn('Sign In')}>
          <View style={{alignItems: 'center'}}>
            <Image
              source={Images.NoSmoking}
              style={{width: 100, height: 70, resizeMode: 'contain'}}
            />
            <Typography
              size={20}
              mt={20}
              mb={5}
              color={Colors.primary}
              family={Fonts.NexaExtraBold}>
              No
            </Typography>
          </View>
        </Button>
      </View>

      <View style={styles.inputSectionWrapper}>
        <TouchableOpacity style={styles.inputWrapper}>
          <TextInput
            autoCapitalize="none"
            autoCorrect={false}
            spellCheck={false}
            autoCorrect={false}
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
            Cigarettes
          </Typography>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Smoking;
