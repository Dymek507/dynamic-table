import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((res) => res.json());
const BOOKS_API_KEY = import.meta.env.VITE_GOOGLE_BOOKS_API_KEY;

export const useFetchBook = (bookId: string | undefined) => {
  const { data, error, isLoading } = useSWR(
    bookId
      ? `https://www.googleapis.com/books/v1/volumes/${bookId}?key=${BOOKS_API_KEY}`
      : null,
    fetcher
  );

  if (error) throw error;
  // if (isLoading) console.log(isLoading);
  if (data && !isLoading) {
    return data;
  }
};
