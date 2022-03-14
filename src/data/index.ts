import { EntryType, EntryCategory } from '../interfaces';

export const STORAGE_ITEM_NAME = 'EXPENSES';

export const entryCategories: EntryCategory[] = [
  {
    icon: '🥑',
    label: 'Comida',
    type: EntryType.EXPENSE,
  },
  {
    icon: '👕',
    label: 'Ropa',
    type: EntryType.EXPENSE,
  },
  {
    icon: '💊',
    label: 'Salud',
    type: EntryType.EXPENSE,
  },
  {
    icon: '🚴',
    label: 'Deporte',
    type: EntryType.EXPENSE,
  },
  {
    icon: '🪥',
    label: 'Higiene',
    type: EntryType.EXPENSE,
  },
  {
    icon: '🚗',
    label: 'Transporte',
    type: EntryType.EXPENSE,
  },
  {
    icon: '📚',
    label: 'Educación',
    type: EntryType.EXPENSE,
  },
  {
    icon: '🍿',
    label: 'Entretenimiento',
    type: EntryType.EXPENSE,
  },
  {
    icon: '🍸',
    label: 'Salidas',
    type: EntryType.EXPENSE,
  },
  {
    icon: '🎁',
    label: 'Regalos',
    type: EntryType.EXPENSE,
  },
  {
    icon: '🏠',
    label: 'Hogar',
    type: EntryType.EXPENSE,
  },
  {
    icon: '🧾',
    label: 'Facturas',
    type: EntryType.EXPENSE,
  },
  {
    icon: '💸',
    label: 'Otros',
    type: EntryType.EXPENSE,
  },
  {
    icon: '💰',
    label: 'Sueldo',
    type: EntryType.INCOME,
  },
  {
    icon: '💰',
    label: 'Depósitos',
    type: EntryType.INCOME,
  },
  {
    icon: '💰',
    label: 'Otros',
    type: EntryType.INCOME,
  },
];
