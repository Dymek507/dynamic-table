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
