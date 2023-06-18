import { useSwrFetcher } from "../../../hooks/useSwrFetcher";
import { BookData } from "../../../types/global";
import { convertToBookData } from "../../../utils/convertToBookData";
import { getAuthorQuery } from "../helpers/getAuthorQuery";

export const useGetBookData = (bookId: string) => {
  //Fetch book
  const bookUrl = `/${bookId}?&`;
  const resultBook = useSwrFetcher(bookUrl, bookId ? true : false);

  const bookData = convertToBookData(resultBook?.data) as BookData;

  //Fetch books by this author
  const authors = resultBook?.data?.volumeInfo?.authors;
  const authorQuery = getAuthorQuery(authors?.[0]);
  const url = `?q=inauthor:%22${authorQuery}%22&`;
  const result = useSwrFetcher(url, authorQuery ? true : false);

  const booksThisAuthor = result.data?.items?.map((book: any): BookData => {
    return convertToBookData(book);
  });

  return {
    bookData,
    booksThisAuthor,
    isLoading: resultBook.isLoading || result.isLoading,
  };
};
