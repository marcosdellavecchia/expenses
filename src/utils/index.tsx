export const validateNumbers = (text: string) => text.replace(/[^.0-9]/g, '');

export const removeLeadingZeros = (text: string) => text.replace(/^0+/, '');

export const formatToCurrency = (amount: number) =>
  '$' + amount.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');

export const getExpensesBalance = (expenses: string[]) => {
  const expenseNumbers = expenses.map(item => item[1]);
  const expenseNumbersSum = expenseNumbers.reduce(
    (a, b) => Number(a) + Number(b),
    0,
  );
  return expenseNumbersSum;
};

export const formatExpenseDetail = (expense: string[]): string => {
  const formattedAmount = formatToCurrency(Number(expense[1]));
  const formattedCategory = expense[0] + ' ';

  return formattedCategory + ' ' + formattedAmount;
};

export const replaceSpaceWithLinebreak = (text: string) =>
  text.split(' ').join('\n');

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
