import {StyleSheet} from 'react-native';

import {Fonts, Colors} from '../../assets/Theme';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.white,
  },
  logo: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
  signInBtn: {
    width: 150,
    height: 70,
    borderRadius: 10,
    backgroundColor: Colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
  },
  signInText: {
    fontFamily: Fonts.NexaBold,
    fontSize: 20,
    color: Colors.white,
  },
  registerBtn: {
    marginTop: 50,
    borderRadius: 50,
    paddingHorizontal: 12,
  },
  registerText: {
    fontFamily: Fonts.NexaRegular,
    fontSize: 16,
    color: Colors.primary,
  },
  btnBottom: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 5,
  },
  line: {
    width: 100,
    height: 1,
    backgroundColor: Colors.primary,
  },
});

export default styles;
