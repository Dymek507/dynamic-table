import useSWR from "swr";
import { BookData } from "../../../types/global";
import { convertToBookData } from "../../../utils/convertToBookData";
import { getAuthorQuery } from "../helpers/getAuthorQuery";

const fetcher = (url: string) => fetch(url).then((res) => res.json());
const BOOKS_API_KEY = import.meta.env.VITE_GOOGLE_BOOKS_API_KEY;

export const useGetBookData = (bookId: string) => {
  //Fetch book
  const { data, error, isLoading } = useSWR(
    `https://www.googleapis.com/books/v1/volumes/${bookId}?key=${BOOKS_API_KEY}`,
    fetcher
  );
  const bookData = convertToBookData(data) as BookData;

  //Fetch books by this author

  const authors = data?.volumeInfo?.authors;
  const authorQuery = getAuthorQuery(authors?.[0]);
  const {
    data: booksList,
    error: listError,
    isLoading: isListLoading,
  } = useSWR(
    authorQuery
      ? `https://www.googleapis.com/books/v1/volumes?q=inauthor:%22${authorQuery}%22&key=${BOOKS_API_KEY}`
      : null,
    fetcher
  );

  console.log(booksList);

  const booksThisAuthor = booksList?.items?.map((book: any): BookData => {
    return convertToBookData(book);
  });

  return {
    bookData,
    booksThisAuthor,
    isLoading: isLoading || isListLoading,
  };
};
