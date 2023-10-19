import {StyleSheet} from 'react-native';
import colors from '../../constants/colors';

const styles = StyleSheet.create({
  tabBarContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: colors.white,
    paddingVertical: 20,
    paddingHorizontal: 28,
    borderRadius: 20,
  },
  tabBarIcon: {
    borderRadius: 24,
    padding: 12,
  },
});

export default styles;
