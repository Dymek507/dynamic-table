import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((res) => res.json());
const BOOKS_API_KEY = import.meta.env.VITE_GOOGLE_BOOKS_API_KEY;

export const useSwrFetcher = (endpoint: string, isFetch: boolean) => {
  const { data, error, isLoading } = useSWR(
    isFetch
      ? `https://www.googleapis.com/books/v1/volumes?${endpoint}&key=${BOOKS_API_KEY}`
      : null,
    fetcher
  );

  if (error) throw error;
  if (data && !isLoading) {
    return data;
  }
};
