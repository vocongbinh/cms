import type { Schema, Attribute } from '@strapi/strapi';

export interface SharedTest extends Schema.Component {
  collectionName: 'components_shared_tests';
  info: {
    displayName: 'Button';
    description: '';
  };
  attributes: {
    theme: Attribute.Enumeration<['primary', 'secondary']>;
    href: Attribute.String;
    label: Attribute.String;
    target: Attribute.Enumeration<['_blank']>;
  };
}

export interface SharedSocialNetwork extends Schema.Component {
  collectionName: 'components_shared_social_networks';
  info: {
    displayName: 'SocialNetwork';
  };
  attributes: {
    url: Attribute.String;
  };
}

export interface SharedSeo extends Schema.Component {
  collectionName: 'components_shared_seos';
  info: {
    displayName: 'Seo';
  };
  attributes: {
    metaTitle: Attribute.String;
    metaDescription: Attribute.String;
    keywords: Attribute.Text;
    metaImage: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    metaViewport: Attribute.String;
    metaRobots: Attribute.String;
  };
}

export interface SharedLink extends Schema.Component {
  collectionName: 'components_shared_links';
  info: {
    displayName: 'Link';
  };
  attributes: {
    href: Attribute.String;
    label: Attribute.String;
    target: Attribute.Enumeration<['_blank']>;
  };
}

export interface SharedFooterColumn extends Schema.Component {
  collectionName: 'components_shared_footer_columns';
  info: {
    displayName: 'FooterColumn';
  };
  attributes: {
    label: Attribute.String;
    button: Attribute.Component<'shared.test'>;
    link: Attribute.Component<'shared.link'>;
    social: Attribute.Component<'shared.social-network'>;
  };
}

export interface HomePageBanner extends Schema.Component {
  collectionName: 'components_home_page_banners';
  info: {
    displayName: 'Banner';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    link: Attribute.Component<'shared.link'>;
  };
}

export interface GlobalNavigation extends Schema.Component {
  collectionName: 'components_global_navigations';
  info: {
    displayName: 'Navigation';
  };
  attributes: {
    links: Attribute.Component<'shared.link', true>;
  };
}

export interface GlobalFooter extends Schema.Component {
  collectionName: 'components_global_footers';
  info: {
    displayName: 'Footer';
  };
  attributes: {
    label: Attribute.String;
    footerColumns: Attribute.Component<'shared.footer-column', true>;
  };
}

export interface BlocksCta extends Schema.Component {
  collectionName: 'components_blocks_ctas';
  info: {
    displayName: 'Cta';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    subTitle: Attribute.Text;
    buttons: Attribute.Component<'shared.test', true>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'shared.test': SharedTest;
      'shared.social-network': SharedSocialNetwork;
      'shared.seo': SharedSeo;
      'shared.link': SharedLink;
      'shared.footer-column': SharedFooterColumn;
      'home-page.banner': HomePageBanner;
      'global.navigation': GlobalNavigation;
      'global.footer': GlobalFooter;
      'blocks.cta': BlocksCta;
    }
  }
}
