import {StyleSheet, Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');

import {Fonts, Colors} from '../../assets/Theme';

const styles = StyleSheet.create({
  wrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    flex: 1,
  },
  container: {
    width: width - 50,
    height: height - 50,
    justifyContent: 'center',
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
  inputStyles: {
    color: Colors.inputLabel,
    fontFamily: Fonts.NexaBold,
    fontSize: 18,
    width: '80%',
  },
});

export default styles;
