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

export const formatExpensesDetail = (expenses: string[]) => {
  const formattedAmount = expenses.map(expense =>
    currencyFormat(Number(expense[1])),
  );
  const formattedCategory = expenses.map(expense => expense[0] + ' ');
  const formattedExpenses = [];

  for (let i = 0; i < formattedAmount.length; i++) {
    formattedExpenses.push(formattedCategory[i] + ' ' + formattedAmount[i]);
  }

  return formattedExpenses.reverse();
};
