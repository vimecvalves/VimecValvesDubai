import type { Asset, Entry, EntryFields } from 'contentful';
import type TypeProductCategoryFields from './modules/TypeProductCategory';
import type TypeTitleAndListItemsFields from './modules/TypeTitleAndListItems';
import type { TypeHeroSectionImageSlidersImageAndTexture } from './modules/TypeHeroSectionImageSlidersImageAndTexture';

interface TypeProduct {
  contentTypeId: 'product';
  fields: {
    name: EntryFields.Symbol;
    description: EntryFields.RichText;
    category: Entry<TypeProductCategoryFields>;
    images: Asset[];
    relatedProducts?: Entry<TypeProduct>[];
    features: Entry<TypeTitleAndListItemsFields>[];
  };
}

interface TypeGallery {
  contentTypeId: 'gallery';
  fields: {
    title: EntryFields.Symbol;
    images: Asset[];
  };
}

interface TypeNewsNEvents {
  contentTypeId: 'newsEvents';
  fields: {
    title: EntryFields.Symbol;
    description: EntryFields.RichText;
    date: EntryFields.Date;
    featuredImage: Asset;
    type: EntryFields.Symbol;
  };
}

interface TypeDownloads {
  contentTypeId: 'downloads';
  fields: {
    title: EntryFields.Symbol;
    bannerImage: Asset;
    link: EntryFields.Symbol;
    file: Asset;
    needForm: EntryFields.Boolean;
    form: Entry<TypeProductCategoryFields>;
  };
}
interface TypeApprovals {
  contentTypeId: 'approvalsSupplyReferences';
  fields: {
    references: Asset[];
  };
}

export interface TypeHomePage {
  contentTypeId: 'homePage';
  fields: {
    heroSectionImageSlider?: TypeHeroSectionImageSlidersImageAndTexture[];
  };
}

interface TypeDepartmentAboutUs {
  contentTypeId: 'departmentAboutUs';

  fields: {
    title: EntryFields.Symbol;
    content: EntryFields.RichText;
    image: Asset;
  };
}
