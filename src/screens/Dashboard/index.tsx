import * as React from 'react';
import {View, Text, ScrollView} from 'react-native';
import styles from './styles';
import CommonStyles from '../../common/styles';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faArrowTrendUp,
  faChevronDown,
  faSackDollar,
} from '@fortawesome/free-solid-svg-icons';
import colors from '../../constants/colors';
import {ACCOUNTING_DATA} from '../../../config';
import {convertDate, formatNumber} from '../../common/generic';
import {BarGraph, BulletinComponent} from '../../components';

const Dashboard = () => {
  const {
    fromDate,
    toDate,
    avgMonthlyIncome,
    percentageHike,
    prevAvgDuration,
    prevAvgIncome,
    totalIncome,
    totalExpense,
    monthlyIncomeData,
  } = ACCOUNTING_DATA || {};

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
      <View style={styles.section}>
        <View style={styles.headerSection}>
          <View style={CommonStyles.rowAlignCenter}>
            <Text style={styles.headerTxt}>Accounting</Text>
            <View style={CommonStyles.rowAlignCenter}>
              <Text style={styles.timeDurationTxt}>This Month</Text>
              <FontAwesomeIcon
                size={14}
                color={colors.black}
                icon={faChevronDown}
              />
            </View>
          </View>
          <Text style={styles.timeRangeTxt}>{`${convertDate(
            fromDate,
          )} - ${convertDate(toDate)}`}</Text>
        </View>
        <View style={styles.separator} />
        <View style={styles.graphSection}>
          <Text style={styles.avgIncomeTitle}>AVG. Monthly Income</Text>
          <Text style={styles.avgMonthlyIncome}>
            ${formatNumber(avgMonthlyIncome)}
          </Text>
          <View style={CommonStyles.rowAlign}>
            <FontAwesomeIcon
              size={20}
              color={colors.green}
              icon={faArrowTrendUp}
            />
            <Text style={styles.timeRangeTxt}>
              <Text style={styles.percentageHike}> {percentageHike}%</Text> vs{' '}
              <Text style={styles.prevAvgIncome}>
                ${formatNumber(prevAvgIncome)}
              </Text>{' '}
              prev. {prevAvgDuration} days
            </Text>
          </View>
          <BarGraph size={150} data={monthlyIncomeData} />
        </View>
      </View>
      <View style={styles.separator} />
      <View style={styles.section}>
        <BulletinComponent
          icon={{component: faSackDollar, color: colors.green, size: 24}}
          title={`$${formatNumber(totalIncome)}`}
          subtitle={'Total Income'}
        />
        <BulletinComponent
          icon={{component: faSackDollar, color: colors.primaryRed, size: 24}}
          title={`$${formatNumber(totalExpense)}`}
          subtitle={'Total Expenses'}
          containerStyle={{marginBottom: 24}}
        />
      </View>
    </ScrollView>
  );
};

export default Dashboard;
