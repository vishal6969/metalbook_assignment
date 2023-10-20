import {StyleSheet} from 'react-native';
import colors from '../../constants/colors';

const styles = StyleSheet.create({
  totalUnit: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 32,
    color: colors.txtBlack,
    alignSelf: 'center',
  },
  totalUnitLabel: {
    fontFamily: 'Montserrat-SemiBold',
    color: colors.black,
    alignSelf: 'center',
  },
  identifierPoint: {
    height: 12,
    width: 12,
    borderRadius: 4,
    marginRight: 16,
  },
  units: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 20,
    lineHeight: 20,
    color: colors.txtBlack,
  },
  unitLabel: {
    fontFamily: 'Montserrat-SemiBold',
    color: colors.black,
  },
  unitPercentage: {
    fontFamily: 'Montserrat-Bold',
    color: colors.gray,
  },
  identifierContainer: {
    flexDirection: 'row',
  },
});

export default styles;
