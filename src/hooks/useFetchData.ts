import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export const useFetchData = (endpoint: string) => {
  return ({ data, error, isLoading } = useSWR("/api/user", fetcher));
};
