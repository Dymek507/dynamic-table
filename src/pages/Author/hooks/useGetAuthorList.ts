import useSWR from "swr";
import { BookData, BookItem } from "../../../types/global";
import { convertToBookData } from "../../../utils/convertToBookData";

const fetcher = (url: string) => fetch(url).then((res) => res.json());
const BOOKS_API_KEY = import.meta.env.VITE_GOOGLE_BOOKS_API_KEY;

export const useGetAuthorList = (
  authorQuery: string | undefined,
  page: number
) => {
  const { data, error, isLoading } = useSWR(
    authorQuery
      ? `https://www.googleapis.com/books/v1/volumes?q=inauthor:%22${authorQuery}%22&maxResults=10&startIndex=${
          page * 10
        }&key=${BOOKS_API_KEY}`
      : null,
    fetcher
  );

  const booksList = data?.items?.map((book: BookItem): BookData => {
    return convertToBookData(book);
  });

  if (error) throw new Error(error);

  return {
    booksList,
    isLoading,
  };
};
