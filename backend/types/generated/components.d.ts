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
    link: Attribute.String;
  };
}

export interface MenuListItemsMenu extends Schema.Component {
  collectionName: 'components_menu_list_items_menus';
  info: {
    displayName: 'List Items Menu';
    icon: 'bulletList';
  };
  attributes: {
    itemMenu: Attribute.Component<'menu.item-menu', true>;
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

export interface UiBlocksFeatures extends Schema.Component {
  collectionName: 'components_ui_blocks_features';
  info: {
    displayName: 'Feature';
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
    src: Attribute.String;
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

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'list-components.grid-banners': ListComponentsGridBanners;
      'list-components.list-features': ListComponentsListFeatures;
      'list-components.list-stories': ListComponentsListStories;
      'menu.item-menu': MenuItemMenu;
      'menu.list-items-menu': MenuListItemsMenu;
      'ui-blocks.banner': UiBlocksBanner;
      'ui-blocks.features': UiBlocksFeatures;
      'ui-blocks.seo-block-model-1': UiBlocksSeoBlockModel1;
      'ui-blocks.seo-block-model-2': UiBlocksSeoBlockModel2;
      'ui-blocks.story': UiBlocksStory;
      'ui-components.button': UiComponentsButton;
    }
  }
}
