export enum EntryType {
  EXPENSE = 'EXPENSE',
  INCOME = 'INCOME',
}

export interface EntryCategory {
  icon: string;
  label: string;
  value: string;
  type: EntryType;
}

export interface Expense {
  icon: string;
  label: string;
  value: string;
  displayDate: string;
  storeDate: string;
}
