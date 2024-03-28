import type { Schema, Attribute } from '@strapi/strapi';

export interface ListComponentsGridBanners extends Schema.Component {
  collectionName: 'components_list_components_grid_banners';
  info: {
    displayName: 'Grid Banners';
    icon: 'apps';
    description: '';
  };
  attributes: {
    MainSlider: Attribute.Component<'ui-blocks.banner', true>;
    SideBanner: Attribute.Component<'ui-blocks.banner', true>;
  };
}

export interface ListComponentsListFeatures extends Schema.Component {
  collectionName: 'components_list_components_list_features';
  info: {
    displayName: 'ListFeatures';
    icon: 'stack';
    description: '';
  };
  attributes: {
    Features: Attribute.Component<'ui-blocks.features', true>;
    title: Attribute.String;
  };
}

export interface ListComponentsListStories extends Schema.Component {
  collectionName: 'components_list_components_list_stories';
  info: {
    displayName: 'ListStories';
    icon: 'apps';
    description: '';
  };
  attributes: {
    Stories: Attribute.Component<'ui-blocks.story', true>;
    title: Attribute.String;
  };
}

export interface MenuItemMenu extends Schema.Component {
  collectionName: 'components_menu_item_menus';
  info: {
    displayName: 'Item Menu';
    icon: 'link';
    description: '';
  };
  attributes: {
    label: Attribute.String;
    url: Attribute.String;
  };
}

export interface MenuPreviews extends Schema.Component {
  collectionName: 'components_menu_previews';
  info: {
    displayName: 'Previews';
    icon: 'picture';
  };
  attributes: {
    title: Attribute.String;
    body: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor.CKEditor',
        {
          output: 'HTML';
          preset: 'rich';
        }
      >;
    src: Attribute.String;
  };
}

export interface MenuSectionMenu extends Schema.Component {
  collectionName: 'components_menu_section_menus';
  info: {
    displayName: 'Section Menu';
    icon: 'bulletList';
    description: '';
  };
  attributes: {
    links: Attribute.Component<'menu.item-menu', true>;
    heading: Attribute.String;
    url: Attribute.String;
    previews: Attribute.Component<'menu.previews', true>;
  };
}

export interface UiBlocksBanner extends Schema.Component {
  collectionName: 'components_ui_blocks_banners';
  info: {
    displayName: 'Banner';
    icon: 'picture';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    srcMobile: Attribute.String;
    srcDesktop: Attribute.String;
    labelButton: Attribute.String;
    linkButton: Attribute.String;
    body: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor.CKEditor',
        {
          output: 'HTML';
          preset: 'rich';
        }
      >;
  };
}

export interface UiBlocksFaqItems extends Schema.Component {
  collectionName: 'components_ui_blocks_faq_items';
  info: {
    displayName: 'FAQ Items';
    icon: 'question';
  };
  attributes: {
    faqItem: Attribute.Component<'ui-components.faq-item', true>;
    heading: Attribute.String;
  };
}

export interface UiBlocksFeaturesRow extends Schema.Component {
  collectionName: 'components_ui_blocks_features_rows';
  info: {
    displayName: 'Features Row';
    icon: 'apps';
    description: '';
  };
  attributes: {
    feature: Attribute.Component<'ui-components.feature', true>;
    title: Attribute.String;
  };
}

export interface UiBlocksFeatures extends Schema.Component {
  collectionName: 'components_ui_blocks_features';
  info: {
    displayName: 'Feature';
    icon: 'check';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    src: Attribute.String;
    description: Attribute.Text;
    link: Attribute.String;
  };
}

export interface UiBlocksGridHowBlock extends Schema.Component {
  collectionName: 'components_ui_blocks_grid_how_blocks';
  info: {
    displayName: 'GridHowBlock';
    icon: 'apps';
    description: '';
  };
  attributes: {
    Content: Attribute.Component<'ui-components.grid-how-block', true>;
    title: Attribute.String;
  };
}

export interface UiBlocksReviewsRow extends Schema.Component {
  collectionName: 'components_ui_blocks_reviews_rows';
  info: {
    displayName: 'Reviews Row';
    icon: 'apps';
  };
  attributes: {
    reivew: Attribute.Component<'ui-components.review', true>;
  };
}

export interface UiBlocksSeoBlockModel1 extends Schema.Component {
  collectionName: 'components_ui_blocks_seo_block_model_1_s';
  info: {
    displayName: 'SEO Block (Model 1)';
    icon: 'dashboard';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    src: Attribute.String;
    body: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor.CKEditor',
        {
          output: 'HTML';
          preset: 'rich';
        }
      >;
    button: Attribute.Component<'ui-components.button'>;
  };
}

export interface UiBlocksSeoBlockModel2 extends Schema.Component {
  collectionName: 'components_ui_blocks_seo_block_model_2_s';
  info: {
    displayName: 'SEO Block (Model 2)';
    icon: 'dashboard';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    firstColumn: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor.CKEditor',
        {
          output: 'HTML';
          preset: 'rich';
        }
      >;
    secondColumn: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor.CKEditor',
        {
          output: 'HTML';
          preset: 'rich';
        }
      >;
  };
}

export interface UiBlocksStory extends Schema.Component {
  collectionName: 'components_ui_blocks_stories';
  info: {
    displayName: 'Story';
    description: '';
  };
  attributes: {
    label: Attribute.String;
    src: Attribute.String;
    url: Attribute.String;
    minPrice: Attribute.BigInteger;
    bgColor: Attribute.String &
      Attribute.CustomField<'plugin::color-picker.color'>;
  };
}

export interface UiComponentsButton extends Schema.Component {
  collectionName: 'components_ui_components_buttons';
  info: {
    displayName: 'Button';
    icon: 'link';
  };
  attributes: {
    label: Attribute.String;
    link: Attribute.String;
  };
}

export interface UiComponentsFaqItem extends Schema.Component {
  collectionName: 'components_ui_components_faq_items';
  info: {
    displayName: 'FAQ Item';
  };
  attributes: {
    title: Attribute.String;
    body: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor.CKEditor',
        {
          output: 'HTML';
          preset: 'rich';
        }
      >;
  };
}

export interface UiComponentsFeature extends Schema.Component {
  collectionName: 'components_ui_components_features';
  info: {
    displayName: 'Feature';
    icon: 'plus';
  };
  attributes: {
    title: Attribute.String;
    body: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor.CKEditor',
        {
          output: 'HTML';
          preset: 'rich';
        }
      >;
    src: Attribute.String;
  };
}

export interface UiComponentsGridHowBlock extends Schema.Component {
  collectionName: 'components_ui_components_grid_how_blocks';
  info: {
    displayName: 'GridHowItem';
    icon: 'check';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    body: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor.CKEditor',
        {
          output: 'HTML';
          preset: 'rich';
        }
      >;
    bgColor: Attribute.String &
      Attribute.CustomField<'plugin::color-picker.color'>;
    opacity: Attribute.Decimal;
  };
}

export interface UiComponentsOfferToPurchase extends Schema.Component {
  collectionName: 'components_ui_components_offer_to_purchases';
  info: {
    displayName: 'Offer to purchase';
    icon: 'restaurant';
  };
  attributes: {
    title: Attribute.String;
    price: Attribute.Integer;
  };
}

export interface UiComponentsReview extends Schema.Component {
  collectionName: 'components_ui_components_reviews';
  info: {
    displayName: 'Review';
  };
  attributes: {
    author: Attribute.String;
    src: Attribute.String;
    body: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor.CKEditor',
        {
          output: 'HTML';
          preset: 'rich';
        }
      >;
  };
}

export interface UiComponentsSocialNetworks extends Schema.Component {
  collectionName: 'components_ui_components_social_networks';
  info: {
    displayName: 'Social Networks';
    icon: 'earth';
    description: '';
  };
  attributes: {
    svg: Attribute.Text;
    label: Attribute.String;
    url: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'list-components.grid-banners': ListComponentsGridBanners;
      'list-components.list-features': ListComponentsListFeatures;
      'list-components.list-stories': ListComponentsListStories;
      'menu.item-menu': MenuItemMenu;
      'menu.previews': MenuPreviews;
      'menu.section-menu': MenuSectionMenu;
      'ui-blocks.banner': UiBlocksBanner;
      'ui-blocks.faq-items': UiBlocksFaqItems;
      'ui-blocks.features-row': UiBlocksFeaturesRow;
      'ui-blocks.features': UiBlocksFeatures;
      'ui-blocks.grid-how-block': UiBlocksGridHowBlock;
      'ui-blocks.reviews-row': UiBlocksReviewsRow;
      'ui-blocks.seo-block-model-1': UiBlocksSeoBlockModel1;
      'ui-blocks.seo-block-model-2': UiBlocksSeoBlockModel2;
      'ui-blocks.story': UiBlocksStory;
      'ui-components.button': UiComponentsButton;
      'ui-components.faq-item': UiComponentsFaqItem;
      'ui-components.feature': UiComponentsFeature;
      'ui-components.grid-how-block': UiComponentsGridHowBlock;
      'ui-components.offer-to-purchase': UiComponentsOfferToPurchase;
      'ui-components.review': UiComponentsReview;
      'ui-components.social-networks': UiComponentsSocialNetworks;
    }
  }
}
