export enum EntryType {
  EXPENSE = 'EXPENSE',
  INCOME = 'INCOME',
}

export interface EntryCategory {
  label: string;
  value: string;
  type: EntryType;
}
