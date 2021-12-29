import {StyleSheet, Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');
import {Fonts, Colors} from '../../assets/Theme';

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 10,
    backgroundColor: Colors.primary,
    width: width - 50,
    paddingHorizontal: 20,
    paddingVertical: 20,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
export default styles;
