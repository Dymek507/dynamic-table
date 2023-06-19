import { BookData } from "../types/global";
import { dateStrToYear } from "./dateStrToYear";

export const convertToBookData = (data: any): BookData => {
  if (!data) return {} as BookData;
  const bookData = {
    id: data.id,
    etag: data.etag,
    description: data.volumeInfo.description,
    title: data.volumeInfo.title,
    authors: data.volumeInfo?.authors || [],
    publisher: data.volumeInfo.publisher,
    publishedDate: dateStrToYear(data?.volumeInfo?.publishedDate) || "-",
    categories: data.volumeInfo?.categories || [],
    maturityRating: data.volumeInfo.maturityRating,
    pageCount: data.volumeInfo.pageCount || "-",
    imageLinks: data.volumeInfo?.imageLinks || {},
  };
  return bookData;
};
