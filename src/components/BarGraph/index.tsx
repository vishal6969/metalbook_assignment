import React, {useState} from 'react';
import {Text, View, Pressable} from 'react-native';
import styles from './styles';
import {MonthlyIncomeDataI} from '../../../config';
import {convertDataToGraphPoints, formatNumber} from '../../common/generic';
import CommonStyles from '../../common/styles';
import Tooltip from 'react-native-walkthrough-tooltip';
import colors from '../../constants/colors';

const BarGraph = ({size, data}: {size: number; data: MonthlyIncomeDataI[]}) => {
  const graphPoints = convertDataToGraphPoints(data, size);
  const [activeBarId, setActiveBardId] = useState<number>(0);

  return (
    <View style={styles.container}>
      {data.map((item, index) => {
        const isBarActive = activeBarId === item.id;

        return (
          <Tooltip
            isVisible={isBarActive}
            backgroundColor={'none'}
            closeOnBackgroundInteraction={true}
            onClose={() => setActiveBardId(0)}
            contentStyle={styles.toolTipContent}
            arrowStyle={styles.toolTipBeak}
            key={item.id}
            content={
              <Text style={styles.toolTipTxt}>
                $ {formatNumber(item.income)}
              </Text>
            }>
            <Pressable
              onPress={() => setActiveBardId(item.id)}
              style={CommonStyles.columnAlignCenter}>
              <View
                style={[
                  styles.bar,
                  {height: graphPoints[index]},
                  isBarActive && {backgroundColor: colors.lightBlue},
                ]}
              />
              <Text style={styles.barLabel}>{item.month}</Text>
            </Pressable>
          </Tooltip>
        );
      })}
    </View>
  );
};

export default BarGraph;
