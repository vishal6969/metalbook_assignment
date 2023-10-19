export interface MonthlyIncomeDataI {
  income: number;
  month: string;
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
    {income: 2120.82, month: 'Mar'},
    {income: 3310.82, month: 'Apr'},
    {income: 4390.82, month: 'May'},
    {income: 6380.82, month: 'Jun'},
    {income: 5120.82, month: 'Jul'},
    {income: 4390.82, month: 'Aug'},
  ],
  totalIncome: 89240.38,
  totalExpense: 16237.82,
};
