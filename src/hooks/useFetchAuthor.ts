import { convertToBookData } from "../utils/convertToBookData";
import { useSwrFetcher } from "./useSwrFetcher";

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
