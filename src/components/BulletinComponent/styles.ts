import {StyleSheet} from 'react-native';
import colors from '../../constants/colors';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: 32,
  },
  iconGradient: {
    width: 58,
    height: 58,
    borderRadius: 58,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dollarIcon: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 50,
    height: 50,
    borderRadius: 42,
    backgroundColor: colors.white,
  },
  title: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 28,
    color: colors.txtBlack,
    marginLeft: 20,
  },
  subtitle: {
    fontFamily: 'Montserrat-Medium',
    color: colors.txtBlack,
    marginLeft: 20,
    marginTop: 4,
  },
});

export default styles;
