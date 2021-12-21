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
    borderWidth: 1,
    borderColor: Colors.inputLabel,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  inputWrapperSecondary: {
    backgroundColor: Colors.secondary,
    width: '67%',
    height: 65,
    borderRadius: 8,
    alignItems: 'center',
    marginRight: 10,
  },
  inputStyles: {
    color: Colors.inputLabel,
    fontFamily: Fonts.NexaBold,
    fontSize: 18,
    width: '80%',
  },
  inputStylesSecondary: {
    color: Colors.primary,
    fontFamily: Fonts.NexaBold,
    fontSize: 18,
    width: '30%',
    height: '100%',
  },
  pickerWrapper: {
    width: '30%',
    height: 65,
    borderRadius: 8,
    backgroundColor: Colors.inputLabel,
  },
  body: {
    backgroundColor: Colors.white,
    width: '100%',
    marginTop: 20,
    paddingHorizontal: 30,
    paddingVertical: 30,
  },
  inputAgeWrapper: {
    backgroundColor: Colors.secondary,
    width: '30%',
    height: 65,
    borderRadius: 8,
    alignItems: 'center',
    marginRight: 5,
  },
  inputAgeStyles: {
    color: Colors.primary,
    fontFamily: Fonts.NexaBold,
    fontSize: 18,
    width: '50%',
    height: '100%',
  },
  genderWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  pickerEthnictyWrapper: {
    width: '100%',
    height: 65,
  },
});

export default styles;
