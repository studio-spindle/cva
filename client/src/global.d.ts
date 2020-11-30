type PageViewEvent = {
  type: 'PageView';
  pagePath: string;
  pageTitle: string;
}

type SearchEvent = {
  type: 'SearchArticles';
  term: string;
  results: string[];
}

// eslint-disable-next-line import/prefer-default-export
export declare global {
  interface Window {
    GA_INITIALIZED: boolean;
    dataLayer: [{
      event: PageViewEvent | SearchEvent
    }];
  }
}
