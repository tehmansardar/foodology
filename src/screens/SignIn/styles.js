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
});

export default styles;
