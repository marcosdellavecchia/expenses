import { Expense } from '../interfaces';

export const validateNumbers = (text: string) => text.replace(/[^.0-9]/g, '');

export const removeLeadingZeros = (text: string) => text.replace(/^0+/, '');

export const formatToCurrency = (amount: string) =>
  '$' +
  Number(amount)
    .toFixed(2)
    .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');

export const getExpensesBalance = (expenses: Expense[]) => {
  const expenseNumbers = expenses.map(item => item.value);
  const expenseNumbersSum = expenseNumbers.reduce(
    (a, b) => Number(a) + Number(b),
    0,
  );
  return expenseNumbersSum;
};

export const getCurrentWeekDay = (): any => {
  const weekdayNames = [
    'Domingo',
    'Lunes',
    'Martes',
    'Miércoles',
    'Jueves',
    'Viernes',
    'Sábado',
  ];

  const date = new Date();
  const weekdayNumber = date.getDay();

  return weekdayNames[weekdayNumber];
};

export const getCurrentMonthDay = (): any => {
  const date = new Date();

  return date.getDate();
};

export const getCurrentMonth = (): any => {
  const monthNames = [
    'Enero',
    'Febrero',
    'Marzo',
    'Abril',
    'Mayo',
    'Junio',
    'Julio',
    'Agosto',
    'Septiembre',
    'Octubre',
    'Noviembre',
    'Diciembre',
  ];

  const date = new Date();
  const monthNumber = date.getMonth();

  return monthNames[monthNumber];
};

export const getCurrentYear = (): number => new Date().getFullYear();
