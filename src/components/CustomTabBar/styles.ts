import {StyleSheet} from 'react-native';
import colors from '../../constants/colors';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
  },
  tabBarContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: colors.white,
    paddingVertical: 18,
    paddingHorizontal: 28,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  tabBarIcon: {
    borderRadius: 24,
    padding: 12,
  },
});

export default styles;
