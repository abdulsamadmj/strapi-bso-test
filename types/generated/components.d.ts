import type { Schema, Attribute } from '@strapi/strapi';

export interface GeneralProducts extends Schema.Component {
  collectionName: 'components_general_products';
  info: {
    displayName: 'Products';
    icon: 'grid';
  };
  attributes: {
    products: Attribute.Relation<
      'general.products',
      'oneToMany',
      'api::product.product'
    >;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'general.products': GeneralProducts;
    }
  }
}
