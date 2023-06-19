export type BookResponse = {
  kind: string;
  totalItems: number;
  items: BookItem[];
};

export type BookItem = {
  kind: string;
  id: string;
  etag: string;
  selfLink: string;
  volumeInfo: BookData;
  saleInfo: {
    country: string;
    saleability: string;
    isEbook: boolean;
  };
  accessInfo: {
    country: string;
    viewability: string;
    embeddable: boolean;
    publicDomain: boolean;
    textToSpeechPermission: string;
    epub: {
      isAvailable: boolean;
    };
    pdf: {
      isAvailable: boolean;
    };
    webReaderLink: string;
    accessViewStatus: string;
    quoteSharingAllowed: boolean;
  };
  searchInfo: {
    textSnippet: string;
  };
};

export type BookData = {
  id: string;
  etag: string;
  title: string;
  description?: string;
  authors: string[];
  publisher: string;
  publishedDate: string;
  categories: string[];
  maturityRating: string;
  pageCount: number | string;
  imageLinks: {
    extraLarge?: string;
    large?: string;
    medium?: string;
    small?: string;
    smallThumbnail: string;
    thumbnail: string;
  };
};
