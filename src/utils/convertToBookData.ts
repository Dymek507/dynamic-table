import { BookData } from "../types/global";

const dateStrToYear = (dateStr: string): string => {
  //remove "*" from dateStr
  dateStr = dateStr.replace("*", "");
  //split dateStr by "-"
  const dateArr = dateStr.split("-");
  return dateArr[0];
};

export const convertToBookData = (data: any): BookData => {
  if (!data) return {} as BookData;
  const bookData = {
    id: data.id,
    etag: data.etag,
    description: data.volumeInfo.description,
    title: data.volumeInfo.title,
    authors: data.volumeInfo?.authors || [],
    publisher: data.volumeInfo.publisher,
    publishedDate: dateStrToYear(data.volumeInfo.publishedDate) || "-",
    categories: data.volumeInfo?.categories || [],
    maturityRating: data.volumeInfo.maturityRating,
    pageCount: data.volumeInfo.pageCount || "-",
    imageLinks: data.volumeInfo?.imageLinks || {},
  };
  return bookData;
};
