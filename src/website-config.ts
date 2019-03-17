export interface WebsiteConfig {
  title : string;
  description : string;
  coverImage : string;
  logo : string;
  /**
   * Specifying a valid BCP 47 language helps screen readers announce text properly.
   * See: https://dequeuniversity.com/rules/axe/2.2/valid-lang
   */
  lang : string;
  /**
   * blog full path, no ending slash!
   */
  siteUrl : string;
  facebook?: string;
  archinect?: string;
  /**
   * hide or show all email subscribe boxes
   */
  showSubscribe : boolean;
  /**
   * create a list on mailchimp and then create an embeddable signup form. this is the form action
   */
  mailchimpAction?: string;
  /**
   * this is the hidden input field name
   */
  mailchimpName?: string;
}

const config : WebsiteConfig = {
  title: 'Jeffrey Eichert',
  description: 'Architect | Designer',
  coverImage: 'img/blog-cover.jpg',
  logo: 'img/ghost-logo.png',
  lang: 'en',
  siteUrl: 'https://jeffreyeichert.com',
  facebook: 'https://www.facebook.com/jeffrey.eichert',
  archinect: 'http://archinect.com/jeffreyeichert',
  showSubscribe: false,
  mailchimpAction: '',
  mailchimpName: ''
};

export default config;
