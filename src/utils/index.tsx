import { Expense } from '../interfaces';
import I18n from '../../i18n';

export const validateNumbers = (text: string) => text.replace(/[^.0-9]/g, '');

export const removeLeadingZeros = (text: string) => text.replace(/^0+/, '');

export const formatToCurrency = (amount: any): string =>
  '$' +
  Number(amount)
    .toFixed(2)
    .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');

export const getExpensesBalance = (expenses: Expense[]): number => {
  const expenseNumbers = expenses.map(item => item.value);
  const expenseNumbersSum = expenseNumbers.reduce(
    (a, b) => Number(a) + Number(b),
    0,
  );
  return expenseNumbersSum;
};

export const translateWeekDay = (weekdayNumber: number): any => {
  const weekdayNames = [
    I18n.t('weekdays.sunday'),
    I18n.t('weekdays.monday'),
    I18n.t('weekdays.tuesday'),
    I18n.t('weekdays.wednesday'),
    I18n.t('weekdays.thursday'),
    I18n.t('weekdays.friday'),
    I18n.t('weekdays.saturday'),
  ];

  return weekdayNames[weekdayNumber];
};

export const getCurrentMonth = (): any => {
  const monthNames = [
    I18n.t('months.january'),
    I18n.t('months.february'),
    I18n.t('months.march'),
    I18n.t('months.april'),
    I18n.t('months.may'),
    I18n.t('months.june'),
    I18n.t('months.july'),
    I18n.t('months.august'),
    I18n.t('months.september'),
    I18n.t('months.october'),
    I18n.t('months.november'),
    I18n.t('months.december'),
  ];

  const date = new Date();
  const monthNumber = date.getMonth();

  return monthNames[monthNumber];
};

export const getDisplayDate = () => {
  const dateObj = new Date();

  const weekday = dateObj.getDay();
  const month = ('0' + (dateObj.getMonth() + 1)).slice(-2);
  const day = ('0' + dateObj.getDate()).slice(-2);

  return {
    weekday,
    month,
    day,
  };
};

export const getStoreDate = (): string => {
  var dateObj = new Date();
  var month = dateObj.getUTCMonth() + 1;
  var year = dateObj.getUTCFullYear();

  return month + '/' + year;
};
