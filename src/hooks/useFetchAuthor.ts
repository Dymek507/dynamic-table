import useSWR from "swr";
import { convertToBookData } from "../utils/convertToBookData";
import { useSwrFetcher } from "./useSwrFetcher";

const fetcher = (url: string) => fetch(url).then((res) => res.json());
const BOOKS_API_KEY = import.meta.env.VITE_GOOGLE_BOOKS_API_KEY;

const getAuthorQuery = (author: string | null) => {
  const authorSplit = author?.split(" ");
  const authorQuery = authorSplit?.join("+");
  return authorQuery;
};

export const useFetchAuthor = (author: string | null) => {
  const authorQuery = getAuthorQuery(author);
  const url = `q=inauthor:%22${authorQuery}%22`;
  const data = useSwrFetcher(url, author ? true : false);

  if (author && data && data.items) {
    const booksData = data?.items?.map((book: any) => {
      return convertToBookData(book);
    });
    return booksData || [];
  }
};
