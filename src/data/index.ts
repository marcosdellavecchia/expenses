import { EntryType, EntryCategory } from '../interfaces';

export const STORAGE_ITEM_NAME = 'EXPENSES';

export const entryCategories: EntryCategory[] = [
  {
    icon: '🥑',
    label: 'food',
    type: EntryType.EXPENSE,
  },
  {
    icon: '👕',
    label: 'clothes',
    type: EntryType.EXPENSE,
  },
  {
    icon: '💊',
    label: 'health',
    type: EntryType.EXPENSE,
  },
  {
    icon: '🚴',
    label: 'sports',
    type: EntryType.EXPENSE,
  },
  {
    icon: '🪥',
    label: 'hygiene',
    type: EntryType.EXPENSE,
  },
  {
    icon: '🚗',
    label: 'transport',
    type: EntryType.EXPENSE,
  },
  {
    icon: '📚',
    label: 'education',
    type: EntryType.EXPENSE,
  },
  {
    icon: '🍿',
    label: 'entertainment',
    type: EntryType.EXPENSE,
  },
  {
    icon: '🍸',
    label: 'goingOut',
    type: EntryType.EXPENSE,
  },
  {
    icon: '🎁',
    label: 'gifts',
    type: EntryType.EXPENSE,
  },
  {
    icon: '🏠',
    label: 'home',
    type: EntryType.EXPENSE,
  },
  {
    icon: '🧾',
    label: 'bills',
    type: EntryType.EXPENSE,
  },
  {
    icon: '💸',
    label: 'other',
    type: EntryType.EXPENSE,
  },
  {
    icon: '💰',
    label: 'salary',
    type: EntryType.INCOME,
  },
  {
    icon: '💰',
    label: 'deposits',
    type: EntryType.INCOME,
  },
  {
    icon: '💰',
    label: 'other',
    type: EntryType.INCOME,
  },
];
