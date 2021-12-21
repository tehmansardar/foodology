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
  sectionContainer: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  imageContainer: {
    width: '100%',
    aspectRatio: 3 / 2,
    borderRadius: 10,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
    justifyContent: 'flex-end',
  },
  imageOverlay: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: Colors.primary,
    opacity: 0.6,
    borderRadius: 10,
  },
  sectionBody: {
    paddingHorizontal: 15,
  },
  mainTitle: {
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
  comments: {
    flexDirection: 'row',
  },
  categoryContainer: {
    // flexDirection: 'row',
  },
  categoryLeft: {
    // width: '80%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  categoryImg: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
  },
});

export default styles;
