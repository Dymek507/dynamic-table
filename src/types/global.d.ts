export interface RawBookData {
  id: string;
  etag: string;
  volumeInfo: {
    authors: string[];
    categories: string[];
    publisher: string;
    maturityRating: string;
    pageCount: number;
    publishedDate: string;
    title: string;
  };
}

export interface BookData {
  id: string;
  title: string;
  authors: string;
  publisher: string;
  publishedDate: string;
  category: string;
  maturityRating: string;
  pageCount: number;
}
