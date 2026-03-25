import type { Asset, Entry, EntryFields } from 'contentful';

export type TypeProductCategoryFields = {
  contentTypeId: 'downloadFormBlocks';
  fields: {
    title?: EntryFields.Symbol;
    subtile: EntryFields.Symbol;
    button: EntryFields.Symbol;
    buttonsIcon: EntryFields.Symbol;
  };
};
