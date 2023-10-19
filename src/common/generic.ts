import {MonthlyIncomeDataI} from '../../config';

export const convertDate = (date: string) => {
  const dateString = new Date(date).toDateString();
  const dateItems = dateString.split(' ');

  return `${dateItems[1]} ${Number(dateItems[2])}, ${dateItems[3]}`;
};

export const convertDataToGraphPoints = (
  data: MonthlyIncomeDataI[],
  graphPaperSize: number,
) => {
  let maxElement = 0;

  data.forEach(item => {
    if (item.income > maxElement) {
      maxElement = item.income;
    }
  });

  return data.map(item => (item.income / maxElement) * graphPaperSize);
};

export const formatNumber = (num: number) => {
  return num.toLocaleString();
};
