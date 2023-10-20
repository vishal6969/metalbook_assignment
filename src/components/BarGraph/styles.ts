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
  toolTipTxt: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 16,
    color: colors.white,
  },
  toolTipContent: {
    backgroundColor: colors.teal,
    paddingHorizontal: 12,
    paddingVertical: 6,
    height: 'auto',
    borderRadius: 12,
    width: 'auto',
  },
  toolTipBeak: {
    marginTop: -7,
  },
});

export default styles;
