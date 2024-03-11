import type { Schema, Attribute } from '@strapi/strapi';

export interface MenuItemMenu extends Schema.Component {
  collectionName: 'components_menu_item_menus';
  info: {
    displayName: 'Item Menu';
    icon: 'link';
  };
  attributes: {
    label: Attribute.String;
    link: Attribute.String;
    previews: Attribute.Media;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'menu.item-menu': MenuItemMenu;
    }
  }
}
