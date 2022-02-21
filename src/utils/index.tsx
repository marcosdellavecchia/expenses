export const validateNumbers = (text: string) => text.replace(/[^.0-9]/g, '');

export const removeLeadingZeros = (text: string) => text.replace(/^0+/, '');

export const getExpensesBalance = (expenses: string[]) => {
  const expenseNumbers = expenses.map(item => item[1]);
  const expenseNumbersSum = expenseNumbers.reduce(
    (a, b) => Number(a) + Number(b),
    0,
  );
  return expenseNumbersSum;
};
