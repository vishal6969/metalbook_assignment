import * as React from 'react';
import {Text, View, ViewStyle} from 'react-native';
import {Svg, G, Circle} from 'react-native-svg';
import {getDoughnutChartValues} from '../../common/generic';
import styles from './styles';
import CommonStyles from '../../common/styles';

interface DoughnutChartI {
  size: number;
  strokeWidth: number;
  data: {label: string; units: number; color: string; id: number}[];
  containerStyle?: ViewStyle;
}

const DoughnutChart = ({
  size,
  strokeWidth,
  data,
  containerStyle,
}: DoughnutChartI) => {
  const radius = size / 2 - strokeWidth;
  const cirumference = 2 * Math.PI * radius;
  const rotationAngles: Array<number> = [];
  let totalUnits = 0;

  data.forEach(item => (totalUnits += item.units));

  const chartValues = getDoughnutChartValues(
    data.map(item => item.units),
    radius,
  );

  chartValues.reduce((prev, curr) => {
    rotationAngles.push((prev / cirumference) * 360);
    return prev + curr;
  }, 0);

  return (
    <View style={[CommonStyles.rowAlignCenter, containerStyle]}>
      <View style={CommonStyles.spaceBetween}>
        {data.map((item, index) => {
          return (
            <View
              key={item.id}
              style={[
                styles.identifierContainer,
                index > 0 && {marginTop: 24},
              ]}>
              <View
                style={[styles.identifierPoint, {backgroundColor: item.color}]}
              />
              <View>
                <Text style={styles.units}>{item.units}</Text>
                <Text style={styles.unitLabel}>
                  {item.label}
                  <Text style={styles.unitPercentage}>
                    {' '}
                    {Math.round((item.units / totalUnits) * 100)}%
                  </Text>
                </Text>
              </View>
            </View>
          );
        })}
      </View>
      <View style={[{height: size, width: size}, CommonStyles.alignCenter]}>
        <Svg height={size} width={size} viewBox={`0 0 ${size} ${size}`}>
          <G rotation={270} originX={size / 2} originY={size / 2}>
            {data.map((item, index) => {
              return (
                <Circle
                  cx={'50%'}
                  cy={'50%'}
                  r={radius}
                  stroke={item.color}
                  strokeWidth={strokeWidth}
                  fill={'transparent'}
                  strokeDasharray={cirumference}
                  strokeDashoffset={cirumference - chartValues[index] + 12}
                  strokeLinecap={'round'}
                  rotation={rotationAngles[index]}
                  originX={size / 2}
                  originY={size / 2}
                  key={item.id}
                />
              );
            })}
          </G>
        </Svg>
        <View style={{position: 'absolute'}}>
          <Text style={styles.totalUnit}>{totalUnits}</Text>
          <Text style={styles.totalUnitLabel}>Total Units</Text>
        </View>
      </View>
    </View>
  );
};

export default DoughnutChart;
