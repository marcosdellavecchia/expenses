import { EntryType, EntryCategory } from '../interfaces';

export const STORAGE_ITEM_NAME = 'EXPENSES';

export const entryCategories: EntryCategory[] = [
  {
    icon: '๐ฅ',
    label: 'food',
    type: EntryType.EXPENSE,
  },
  {
    icon: '๐',
    label: 'clothes',
    type: EntryType.EXPENSE,
  },
  {
    icon: '๐',
    label: 'health',
    type: EntryType.EXPENSE,
  },
  {
    icon: '๐ด',
    label: 'sports',
    type: EntryType.EXPENSE,
  },
  {
    icon: '๐ชฅ',
    label: 'hygiene',
    type: EntryType.EXPENSE,
  },
  {
    icon: '๐',
    label: 'transport',
    type: EntryType.EXPENSE,
  },
  {
    icon: '๐',
    label: 'education',
    type: EntryType.EXPENSE,
  },
  {
    icon: '๐ฟ',
    label: 'entertainment',
    type: EntryType.EXPENSE,
  },
  {
    icon: '๐ธ',
    label: 'goingOut',
    type: EntryType.EXPENSE,
  },
  {
    icon: '๐',
    label: 'gifts',
    type: EntryType.EXPENSE,
  },
  {
    icon: '๐ ',
    label: 'home',
    type: EntryType.EXPENSE,
  },
  {
    icon: '๐งพ',
    label: 'bills',
    type: EntryType.EXPENSE,
  },
  {
    icon: '๐ธ',
    label: 'other',
    type: EntryType.EXPENSE,
  },
  {
    icon: '๐ฐ',
    label: 'salary',
    type: EntryType.INCOME,
  },
  {
    icon: '๐ฐ',
    label: 'deposits',
    type: EntryType.INCOME,
  },
  {
    icon: '๐ฐ',
    label: 'other',
    type: EntryType.INCOME,
  },
];
