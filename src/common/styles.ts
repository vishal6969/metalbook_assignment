import {StyleSheet} from 'react-native';

const CommonStyles = StyleSheet.create({
  rowAlignCenter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
  },
  rowAlign: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  columnAlignCenter: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  rowAlignEnd: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  alignCenter: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  spaceBetween: {
    justifyContent: 'space-between',
  },
});

export default CommonStyles;
