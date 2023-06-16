import useSWR from "swr";
import { convertToList } from "../utils/convertToList";

const fetcher = (url: string) => fetch(url).then((res) => res.json());
const BOOKS_API_KEY = import.meta.env.VITE_GOOGLE_BOOKS_API_KEY;

export const useFetchData = (searchText: string) => {
  const { data, error, isLoading } = useSWR(
    searchText.length > 2
      ? `https://www.googleapis.com/books/v1/volumes?q=${searchText}&key=${BOOKS_API_KEY}`
      : null,
    fetcher
  );

  if (error) throw error;
  // if (isLoading) console.log(isLoading);
  if (searchText && data && data.items) {
    return convertToList(data.items);
  }
};
