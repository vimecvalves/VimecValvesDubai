import type { Asset, EntryFields } from 'contentful';

export interface TypeHeroSectionImageSlidersImageAndTexture {
  contentTypeId: 'heroSectionImageSlidersImageAndTexture';
  fields: {
    title?: EntryFields.Symbol;
    image?: Asset;
    texture?: Asset;
  };
}
