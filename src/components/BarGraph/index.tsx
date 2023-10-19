import * as React from 'react';
import {Text, View} from 'react-native';
import styles from './styles';
import {MonthlyIncomeDataI} from '../../../config';
import {convertDataToGraphPoints} from '../../common/generic';
import CommonStyles from '../../common/styles';

const BarGraph = ({size, data}: {size: number; data: MonthlyIncomeDataI[]}) => {
  const graphPoints = convertDataToGraphPoints(data, size);

  return (
    <View style={styles.container}>
      {data.map((item, index) => {
        return (
          <View style={CommonStyles.columnAlignCenter}>
            <View style={[styles.bar, {height: graphPoints[index]}]} />
            <Text style={styles.barLabel}>{item.month}</Text>
          </View>
        );
      })}
    </View>
  );
};

export default BarGraph;
