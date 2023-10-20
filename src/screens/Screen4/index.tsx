import * as React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import colors from '../../constants/colors';

const Screen4 = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Screen4</Text>
    </View>
  );
};

export default Screen4;

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
