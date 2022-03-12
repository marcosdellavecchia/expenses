import { EntryType, EntryCategory } from '../interfaces';

export const STORAGE_ITEM_NAME = 'VALUESMONTHLY2';

export const entryCategories: EntryCategory[] = [
  {
    icon: '🥑',
    label: 'Comida',
    value: 'FOOD',
    type: EntryType.EXPENSE,
  },
  {
    icon: '👕',
    label: 'Ropa',
    value: 'CLOTHES',
    type: EntryType.EXPENSE,
  },
  {
    icon: '💊',
    label: 'Salud',
    value: 'HEALTH',
    type: EntryType.EXPENSE,
  },
  {
    icon: '🚴',
    label: 'Deporte',
    value: 'SPORTS',
    type: EntryType.EXPENSE,
  },
  {
    icon: '🪥',
    label: 'Higiene',
    value: 'HYGIENE',
    type: EntryType.EXPENSE,
  },
  {
    icon: '🚗',
    label: 'Transporte',
    value: 'TRANSPORT',
    type: EntryType.EXPENSE,
  },
  {
    icon: '📚',
    label: 'Educación',
    value: 'EDUCATION',
    type: EntryType.EXPENSE,
  },
  {
    icon: '🍿',
    label: 'Entretenimiento',
    value: 'ENTERTAINMENT',
    type: EntryType.EXPENSE,
  },
  {
    icon: '🍸',
    label: 'Salidas',
    value: 'GOING_OUT',
    type: EntryType.EXPENSE,
  },
  {
    icon: '🎁',
    label: 'Regalos',
    value: 'GIFT',
    type: EntryType.EXPENSE,
  },
  {
    icon: '🏠',
    label: 'Hogar',
    value: 'HOME',
    type: EntryType.EXPENSE,
  },
  {
    icon: '🧾',
    label: 'Facturas',
    value: 'RECEIPT',
    type: EntryType.EXPENSE,
  },
  {
    icon: '💸',
    label: 'Otros',
    value: 'OTHER_EXPENSES',
    type: EntryType.EXPENSE,
  },
  {
    icon: '💰',
    label: 'Sueldo',
    value: 'SALARY',
    type: EntryType.INCOME,
  },
  {
    icon: '💰',
    label: 'Depósitos',
    value: 'DEPOSITS',
    type: EntryType.INCOME,
  },
  {
    icon: '💰',
    label: 'Otros',
    value: 'OTHER_INCOMES',
    type: EntryType.INCOME,
  },
];
