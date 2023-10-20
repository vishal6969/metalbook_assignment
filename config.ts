import {
  faCircleArrowRight,
  faCircleCheck,
  faFlag,
} from '@fortawesome/free-solid-svg-icons';
import colors from './src/constants/colors';

export interface MonthlyIncomeDataI {
  income: number;
  month: string;
  id: number;
}

export interface AccountingDataI {
  fromDate: string;
  toDate: string;
  avgMonthlyIncome: number;
  prevAvgIncome: number;
  percentageHike: number;
  prevAvgDuration: number;
  monthlyIncomeData: MonthlyIncomeDataI[];
  totalIncome: number;
  totalExpense: number;
}

export const ACCOUNTING_DATA: AccountingDataI = {
  fromDate: '2023-09-01T00:00:00Z',
  toDate: '2023-09-30T00:00:00Z',
  avgMonthlyIncome: 5849.36,
  prevAvgIncome: 5432.74,
  percentageHike: 3.89,
  prevAvgDuration: 90,
  monthlyIncomeData: [
    {id: 1, income: 2120.82, month: 'Mar'},
    {id: 2, income: 3310.82, month: 'Apr'},
    {id: 3, income: 4390.82, month: 'May'},
    {id: 4, income: 6380.82, month: 'Jun'},
    {id: 5, income: 5120.82, month: 'Jul'},
    {id: 6, income: 4390.82, month: 'Aug'},
  ],
  totalIncome: 89240.38,
  totalExpense: 16237.82,
};

export const TASK_DATA = {
  cardsData: [
    {
      id: 1,
      label: 'New',
      text: 3,
      icon: faFlag,
      cardStyle: {backgroundColor: colors.orange, marginRight: 12},
    },
    {
      id: 2,
      label: 'Assigned',
      text: 16,
      icon: faCircleArrowRight,
      cardStyle: {backgroundColor: colors.blue, marginRight: 12},
    },
    {
      id: 3,
      label: 'Closed',
      text: 32,
      icon: faCircleCheck,
      cardStyle: {backgroundColor: colors.lightBlue},
    },
  ],
  properties: {
    occupied: 298,
    vacant: 249,
    maintenance: 85,
  },
  completionRate: 98,
  completionRateHike: 2.73,
};
