import { useSwrFetcher } from "../../../hooks/useSwrFetcher";
import { BookData } from "../../../types/global";
import { convertToBookData } from "../../../utils/convertToBookData";
import { getAuthorQuery } from "../helpers/getAuthorQuery";

export const useGetBookData = (author: string) => {
  //Fetch books by this author
  const authorQuery = getAuthorQuery(author);
  const url = `?q=inauthor:%22${authorQuery}%22&`;
  const result = useSwrFetcher(url, authorQuery ? true : false);

  const booksThisAuthor = result.data?.items?.map((book: any): BookData => {
    return convertToBookData(book);
  });

  return {
    booksThisAuthor,
    isLoading: result.isLoading,
  };
};
