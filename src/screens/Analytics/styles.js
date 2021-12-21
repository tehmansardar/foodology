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
  body: {
    backgroundColor: Colors.white,
    width: '100%',
    marginTop: 20,
    paddingHorizontal: 30,
    paddingVertical: 30,
  },
  sectionBody: {
    paddingHorizontal: 15,
  },
  detailsContainer: {},
  detailsWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 5,
  },
  line: {
    borderBottomWidth: 1,
    borderBottomColor: Colors.primary,
    width: 200,
    borderStyle: 'dashed',
  },
  stressHorizoneLine: {
    borderBottomWidth: 1,
    borderBottomColor: Colors.primary,
    width: '100%',
    marginTop: 10,
  },
});

export default styles;
