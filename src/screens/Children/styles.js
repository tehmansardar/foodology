import {StyleSheet, Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');

import {Fonts, Colors} from '../../assets/Theme';

const styles = StyleSheet.create({
  scrollview: {flex: 1, height: height - 50},
  wrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    flex: 1,
    marginBottom: 50,
  },
  container: {
    width: width - 50,
    // height: height - 50,
    // justifyContent: 'center',
  },
  sectionWrapper: {
    // borderWidth: 1,
    // borderColor: Colors.inputLabel,
    // borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    // justifyContent: 'space-between',
    // paddingHorizontal: 10,
    paddingVertical: 5,
  },
  inputWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.secondary,
    width: '100%',
    height: 65,
    borderRadius: 8,
    marginRight: 5,
  },
  inputStyles: {
    color: Colors.primary,
    fontFamily: Fonts.NexaBold,
    fontSize: 18,
    width: '7%',
    height: '100%',
  },
  pickerWrapper: {
    width: '30%',
    height: 65,
    borderRadius: 8,
    backgroundColor: Colors.inputLabel,
  },
});

export default styles;
