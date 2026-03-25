import type { EntryFields } from 'contentful';

interface TypeTitleAndListItemsFields {
  contentTypeId: 'titleAndListItems';
  fields: {
    title: EntryFields.Symbol;
    items: EntryFields.Text[]; // Assuming it's a list of text items
  };
}
