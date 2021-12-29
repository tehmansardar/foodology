import React, {useState} from 'react';
import {View, Image, FlatList, TouchableOpacity, TextInput} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import {Fonts, Colors, Images} from '../../assets/Theme';
import {Button, Typography} from '../../components';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Item from '../Item';
import styles from './styles';
const Drinking = () => {
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
          Drinking
          <Typography
            size={14}
            color={Colors.inputLabel}
            family={Fonts.NexaHeavy}>
            {' '}
            Nonalcoholic
          </Typography>
        </Typography>
        <View style={styles.HeaderImgBackground}>
          <Image source={Images.Glasses} style={styles.headerImg} />
        </View>
      </View>
      <Typography
        size={20}
        mt={20}
        mb={15}
        color={Colors.primary}
        family={Fonts.NexaExtraBold}>
        What did you drink today?
      </Typography>
      <FlatList
        horizontal
        data={food}
        renderItem={({item}) => <Item uri={item.uri} name={item.name} />}
        ItemSeparatorComponent={() => <View style={{width: 5}} />}
        keyExtractor={item => item.id}
      />
      <View style={styles.inputSectionWrapper}>
        <TouchableOpacity style={styles.inputWrapper}>
          <TextInput
            autoCapitalize="none"
            autoCorrect={false}
            spellCheck={false}
            keyboardType="default"
            underlineColorAndroid="transparent"
            placeholder="Or enter a custom name..."
            placeholderTextColor={Colors.inputLabel}
            selectionColor={Colors.primary}
            style={styles.inputStyles}
          />
        </TouchableOpacity>
        <Button
          center
          middle
          w={80}
          h={65}
          radius={10}
          bg={Colors.primary}
          onPress={() => console.warn('Sign In')}>
          <AntDesign name="arrowright" size={25} color={Colors.white} />
        </Button>
      </View>
      <View style={styles.inputSectionWrapper}>
        <TouchableOpacity style={styles.inputTimeWrapper}>
          <TextInput
            autoCapitalize="none"
            autoCorrect={false}
            spellCheck={false}
            keyboardType="numeric"
            underlineColorAndroid="transparent"
            placeholder="Hrs"
            placeholderTextColor={Colors.lightgrey}
            selectionColor={Colors.primary}
            style={styles.inputTimeStyles}
          />
        </TouchableOpacity>
        {/* Min */}
        <TouchableOpacity style={styles.inputTimeWrapper}>
          <TextInput
            autoCapitalize="none"
            autoCorrect={false}
            spellCheck={false}
            keyboardType="numeric"
            underlineColorAndroid="transparent"
            placeholder="Min"
            placeholderTextColor={Colors.lightgrey}
            selectionColor={Colors.primary}
            style={styles.inputTimeStyles}
          />
        </TouchableOpacity>
        <TouchableOpacity style={{zIndex: 2}}>
          <DropDownPicker
            open={open}
            value={value}
            items={items}
            setOpen={setOpen}
            setValue={setValue}
            setItems={setItems}
            onChangeValue={() => console.log(value)}
            showTickIcon={false}
            style={styles.picker}
            dropDownContainerStyle={{
              backgroundColor: Colors.secondary,
              borderWidth: 0,
            }}
            textStyle={{
              fontSize: 18,
              fontFamily: Fonts.NexaRegular,
              color: Colors.white,
            }}
            labelStyle={{
              color: Colors.white,
            }}
            listItemLabelStyle={{
              color: Colors.primary,
            }}
            arrowIconStyle={{
              tintColor: Colors.white,
            }}
          />
        </TouchableOpacity>
      </View>
      <Button
        full
        center
        middle
        h={40}
        radius={4}
        addstyle={{borderWidth: 1, marginTop: 20, width: '100%'}}
        onPress={() => console.warn('Sign In')}>
        <Typography
          size={18}
          color={Colors.primary}
          family={Fonts.NexaExtraBold}>
          Add
        </Typography>
      </Button>

      {/* When eat */}
      <View style={styles.timeListContainer}>
        <Typography
          size={18}
          mt={10}
          mb={10}
          color={Colors.primary}
          family={Fonts.NexaExtraBold}>
          When did you drink?
        </Typography>
        <View style={styles.timeListInnerContainer}>
          <View>
            <Typography
              size={18}
              color={Colors.orange}
              family={Fonts.NexaExtraBold}>
              03:00 am
            </Typography>
            <Typography
              size={18}
              color={Colors.inputLabel}
              family={Fonts.NexaExtraBold}>
              Added
            </Typography>
          </View>
          <TouchableOpacity style={styles.timeListIconContainer}>
            <Ionicons name="trash-outline" size={25} color={Colors.orange} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Drinking;
