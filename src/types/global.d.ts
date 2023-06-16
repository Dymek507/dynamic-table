export type BookData = {
  id: string;
  etag: string;
  title: string;
  authors: string[];
  publisher: string;
  publishedDate: string;
  categories: string[];
  maturityRating: string;
  pageCount: number | string;
  imageLinks: {
    smallThumbnail: string;
    thumbnail: string;
  };
};
