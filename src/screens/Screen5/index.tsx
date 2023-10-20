import * as React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import colors from '../../constants/colors';

const Screen5 = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Screen5</Text>
    </View>
  );
};

export default Screen5;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 32,
    color: colors.black,
  },
});
