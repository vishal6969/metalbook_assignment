import {StyleSheet} from 'react-native';
import colors from '../../constants/colors';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    paddingTop: 24,
  },
  bar: {
    backgroundColor: colors.aquaBlue,
    width: 42,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
  },
  barLabel: {
    fontFamily: 'Montserrat-SemiBold',
    color: colors.gray1,
    marginTop: 4,
  },
});

export default styles;
