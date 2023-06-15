import { BookData, RawBookData } from "../types/global";

const truncate = (str: string, n: number) => {
  return str.length > n ? str.slice(0, n - 1) + "&hellip;" : str;
};

export const convertToTable = (data: RawBookData[]): BookData[] => {
  const tableData = data.map((book: RawBookData) => {
    return {
      id: book.etag,
      title: book.volumeInfo.title,
      authors: book.volumeInfo?.authors?.[0] || "Unknown",
      publisher: book.volumeInfo.publisher,
      publishedDate: book.volumeInfo.publishedDate,
      category:
        truncate(book.volumeInfo?.categories?.toString(), 20) || "Unknown",
      maturityRating: book.volumeInfo.maturityRating,
      pageCount: book.volumeInfo.pageCount,
    };
  });
  return tableData;
};
