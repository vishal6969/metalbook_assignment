import {StyleSheet} from 'react-native';
import colors from '../../constants/colors';

const styles = StyleSheet.create({
  tabBarContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: colors.white,
    paddingVertical: 20,
    borderRadius: 20,
  },
  tabBarIcon: {
    borderRadius: 24,
    paddingVertical: 8,
    paddingHorizontal: 12,
  },
});

export default styles;
