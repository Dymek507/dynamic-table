import { BookData } from "../types/global";

export const convertToList = (data: any[]): BookData[] => {
  const listData = data.map((book: any) => {
    return {
      id: book.id,
      etag: book.etag,
      title: book.volumeInfo.title,
      authors: book.volumeInfo?.authors || [],
      publisher: book.volumeInfo.publisher,
      publishedDate: book.volumeInfo.publishedDate,
      categories: book.volumeInfo?.categories || [],
      maturityRating: book.volumeInfo.maturityRating,
      pageCount: book.volumeInfo.pageCount || "-",
      imageLinks: book.volumeInfo?.imageLinks || {},
    };
  });
  return listData;
};
