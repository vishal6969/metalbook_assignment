import {StyleSheet} from 'react-native';
import colors from '../../constants/colors';

const styles = StyleSheet.create({
  card: {
    justifyContent: 'space-between',
    backgroundColor: colors.red,
    borderRadius: 10,
    padding: 12,
    height: 108,
    width: 108,
    backfaceVisibility: 'hidden',
  },
  backCard: {
    position: 'absolute',
  },
  label: {
    fontFamily: 'Montserrat-Medium',
    color: colors.white,
  },
  text: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 28,
    color: colors.white,
  },
  iconContainer: {
    marginRight: -20,
  },
});

export default styles;
