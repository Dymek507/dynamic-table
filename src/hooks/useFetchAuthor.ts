import useSWR from "swr";
import { convertToBookData } from "../utils/convertToBookData";

const fetcher = (url: string) => fetch(url).then((res) => res.json());
const BOOKS_API_KEY = import.meta.env.VITE_GOOGLE_BOOKS_API_KEY;

const getAuthorQuery = (author: string | null) => {
  const authorSplit = author?.split(" ");
  const authorQuery = authorSplit?.join("+");
  return authorQuery;
};

export const useFetchAuthor = (author: string | null) => {
  const authorQuery = getAuthorQuery(author);
  const { data, error, isLoading } = useSWR(
    author
      ? `https://www.googleapis.com/books/v1/volumes?q=inauthor:%22${authorQuery}%22&key=${BOOKS_API_KEY}`
      : null,
    fetcher
  );
  console.log(data);

  if (error) throw error;
  if (isLoading) console.log(isLoading);
  if (author && data && !isLoading) {
    const idArray = data.map((book: any) => {
      return book.id;
    });
    return idArray;
  }
};
