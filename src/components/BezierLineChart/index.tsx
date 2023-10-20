import * as React from 'react';
import {LineChart} from 'react-native-chart-kit';
import colors from '../../constants/colors';

const BezierLineChart = () => {
  return (
    <LineChart
      withHorizontalLabels={false}
      withInnerLines={false}
      withOuterLines={false}
      width={200}
      height={60}
      chartConfig={{
        color: () => colors.gray,
        backgroundGradientFrom: colors.white,
        backgroundGradientTo: colors.white,
      }}
      data={{
        labels: [],
        datasets: [
          {
            data: [20, 45, 38, 65],
            strokeWidth: 6,
          },
        ],
      }}
      bezier={true}
      hidePointsAtIndex={[0, 1, 2, 3]}
      style={{
        flexDirection: 'row',
        width: 160,
        overflow: 'hidden',
        paddingRight: 2,
        paddingLeft: 2,
        paddingBottom: 2,
        paddingTop: 4,
        marginRight: -16,
      }}
    />
  );
};

export default BezierLineChart;
