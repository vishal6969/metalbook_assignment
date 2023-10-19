import {StyleSheet} from 'react-native';
import colors from '../../constants/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
  },
  section: {
    paddingHorizontal: 28,
  },
  headerSection: {
    paddingTop: 32,
    paddingBottom: 28,
  },
  headerTxt: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 24,
    color: colors.txtBlack,
  },
  timeDurationTxt: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 14,
    color: colors.black,
    marginRight: 4,
  },
  timeRangeTxt: {
    fontFamily: 'Montserrat-Medium',
    color: colors.black,
    marginTop: 4,
  },
  separator: {
    height: 1.5,
    width: '100%',
    backgroundColor: colors.aquaBlue,
  },
  graphSection: {
    paddingVertical: 32,
  },
  avgIncomeTitle: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 16,
    color: colors.txtBlack,
  },
  avgMonthlyIncome: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 40,
    color: colors.txtBlack,
    marginTop: 4,
  },
  percentageHike: {
    fontFamily: 'Montserrat-SemiBold',
    color: colors.green,
    fontSize: 16,
  },
  prevAvgIncome: {
    fontFamily: 'Montserrat-SemiBold',
    color: colors.red,
    fontSize: 16,
  },
});

export default styles;
