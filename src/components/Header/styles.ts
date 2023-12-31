import {StyleSheet} from 'react-native';
import colors from '../../constants/colors';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 28,
    paddingVertical: 20,
  },
  altHeaderStyle: {
    backgroundColor: colors.white,
    borderBottomWidth: 2,
    borderColor: colors.gray2,
  },
  title: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 20,
    color: colors.txtBlack,
    marginLeft: 16,
  },
  profileImage: {
    height: 44,
    width: 44,
    borderWidth: 1,
    borderColor: colors.white,
    borderRadius: 20,
  },
  notificationIcon: {
    backgroundColor: colors.white,
    padding: 8,
    borderRadius: 20,
    marginRight: 10,
    borderWidth: 1,
    borderColor: colors.aquaBlue,
  },
  notificationCount: {
    position: 'absolute',
    textAlign: 'center',
    textAlignVertical: 'center',
    backgroundColor: colors.lightBlue,
    color: colors.white,
    height: 22,
    width: 22,
    borderRadius: 50,
    left: 24,
    top: -10,
  },
});

export default styles;
