export const validateNumbers = (text: string) => text.replace(/[^.0-9]/g, '');

export const removeLeadingZeros = (text: string) => text.replace(/^0+/, '');

export const currencyFormat = (amount: number) =>
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
  const formattedAmount = currencyFormat(Number(expense[1]));
  const formattedCategory = expense[0] + ' ';

  return formattedCategory + ' ' + formattedAmount;
};

export const replaceSpaceWithLinebreak = (text: string) =>
  text.split(' ').join('\n');
