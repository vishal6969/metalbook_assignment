import * as React from 'react';
import {ScrollView, View, Text} from 'react-native';
import styles from './styles';
import {BezierLineChart, DoughnutChart, FlipCard} from '../../components';
import CommonStyles from '../../common/styles';
import {
  faArrowTrendUp,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
import colors from '../../constants/colors';
import {TASK_DATA} from '../../../config';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

const TaskSummary = () => {
  const {cardsData, properties, completionRate, completionRateHike} =
    TASK_DATA || {};
  const doughnutChartData = [
    {id: 1, label: 'Occupied', units: properties.occupied, color: colors.blue},
    {id: 2, label: 'Vacant', units: properties.vacant, color: colors.lightBlue},
    {
      id: 3,
      label: 'Maintenance',
      units: properties.maintenance,
      color: colors.orange,
    },
  ];

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
      <View style={styles.section1}>
        <Text style={styles.title}>Task Summary</Text>
        <View style={styles.cardContainer}>
          {cardsData.map(item => {
            return (
              <FlipCard
                key={item.id}
                label={item.label}
                text={item.text}
                icon={item.icon}
                cardStyle={item.cardStyle}
              />
            );
          })}
        </View>
        <View style={styles.navigationLink}>
          <Text style={styles.navigationText}>See all today tasks</Text>
          <FontAwesomeIcon color={colors.gray} icon={faChevronRight} />
        </View>
        <View style={styles.separator} />
        <View style={styles.completionRateContainer}>
          <Text style={styles.completionRateTitle}>
            On-time Completion Rate
          </Text>
          <View style={CommonStyles.rowAlignCenter}>
            <View style={CommonStyles.rowAlignEnd}>
              <Text style={styles.completionRate}>{completionRate}%</Text>
              <FontAwesomeIcon
                size={20}
                color={colors.green}
                icon={faArrowTrendUp}
              />
              <Text style={styles.completionRateHike}>
                {completionRateHike}%
              </Text>
            </View>
            <View style={styles.lineChart}>
              <BezierLineChart />
            </View>
          </View>
        </View>
      </View>
      <View style={styles.section2}>
        <View style={CommonStyles.rowAlignCenter}>
          <Text style={styles.title}>Properties</Text>
          <View style={CommonStyles.rowAlignCenter}>
            <Text style={styles.propertiesNavigationTxt}>All Properties</Text>
            <FontAwesomeIcon
              size={18}
              color={colors.gray}
              icon={faChevronRight}
            />
          </View>
        </View>
        <DoughnutChart
          containerStyle={{marginTop: 32}}
          size={170}
          strokeWidth={8}
          data={doughnutChartData}
        />
      </View>
    </ScrollView>
  );
};

export default TaskSummary;
