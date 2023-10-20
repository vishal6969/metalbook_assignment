import {StyleSheet} from 'react-native';
import colors from '../../constants/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  section1: {
    padding: 28,
  },
  title: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 24,
    color: colors.txtBlack,
  },
  cardContainer: {
    flexDirection: 'row',
    marginTop: 28,
  },
  navigationLink: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },
  navigationText: {
    fontFamily: 'Montserrat-Bold',
    color: colors.gray,
  },
  separator: {
    height: 1.5,
    backgroundColor: colors.aquaBlue,
  },
  completionRateContainer: {
    paddingTop: 32,
  },
  completionRateTitle: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 15,
    color: colors.black,
  },
  completionRate: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 24,
    color: colors.txtBlack,
    marginBottom: -4,
    marginRight: 6,
  },
  completionRateHike: {
    fontFamily: 'Montserrat-SemiBold',
    color: colors.green,
    marginLeft: 6,
  },
  lineChart: {
    marginRight: 20,
  },
  section2: {
    padding: 28,
    borderTopWidth: 8,
    borderColor: colors.aquaBlue,
  },
  propertiesNavigationTxt: {
    fontFamily: 'Montserrat-Bold',
    color: colors.gray,
    fontSize: 16,
    marginRight: 4,
  },
});

export default styles;
