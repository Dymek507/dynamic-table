import useSWR from "swr";
import { convertToList } from "../utils/convertToList";
import { BookData } from "../types/global";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export const useFetchData = (searchText: string) => {
  const { data, error, isLoading } = useSWR(
    searchText.length > 2
      ? `https://www.googleapis.com/books/v1/volumes?q=${searchText}&key=AIzaSyD5KvSNppxxis32OoGtIqx8ypYE0xqzZXw`
      : null,
    fetcher
  );

  if (error) console.log(error);
  if (isLoading) console.log(isLoading);
  if (searchText && data && data.items) {
    return convertToList(data.items);
  }
};
