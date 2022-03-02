import { EntryType, EntryCategory } from '../interfaces';

export const STORAGE_ITEM_NAME = 'VALUESMONTHLY2';

export const entryCategories: EntryCategory[] = [
  {
    label: '🥑 Comida',
    value: 'FOOD',
    type: EntryType.EXPENSE,
  },
  {
    label: '👕 Ropa',
    value: 'CLOTHES',
    type: EntryType.EXPENSE,
  },
  {
    label: '💊 Salud',
    value: 'HEALTH',
    type: EntryType.EXPENSE,
  },
  {
    label: '🚴 Deporte',
    value: 'SPORTS',
    type: EntryType.EXPENSE,
  },
  {
    label: '🪥 Higiene',
    value: 'HYGIENE',
    type: EntryType.EXPENSE,
  },
  {
    label: '🚗 Transporte',
    value: 'TRANSPORT',
    type: EntryType.EXPENSE,
  },
  {
    label: '📚 Educación',
    value: 'EDUCATION',
    type: EntryType.EXPENSE,
  },
  {
    label: '🍿 Entretenimiento',
    value: 'ENTERTAINMENT',
    type: EntryType.EXPENSE,
  },
  {
    label: '🍸 Salidas',
    value: 'GOING_OUT',
    type: EntryType.EXPENSE,
  },
  {
    label: '🎁 Regalos',
    value: 'GIFT',
    type: EntryType.EXPENSE,
  },
  {
    label: '🏠 Hogar',
    value: 'HOME',
    type: EntryType.EXPENSE,
  },
  {
    label: '🧾 Facturas',
    value: 'RECEIPT',
    type: EntryType.EXPENSE,
  },
  {
    label: '💸 Otros',
    value: 'OTHER_EXPENSES',
    type: EntryType.EXPENSE,
  },
  {
    label: '💰 Sueldo',
    value: 'SALARY',
    type: EntryType.INCOME,
  },
  {
    label: '💰 Depósitos',
    value: 'DEPOSITS',
    type: EntryType.INCOME,
  },
  {
    label: '💰 Otros',
    value: 'OTHER_INCOMES',
    type: EntryType.INCOME,
  },
];
