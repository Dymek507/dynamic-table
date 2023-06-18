import { BookData } from "../../../types/global";
import { cutString } from "../../../utils/cutString";

export const sliceBookArrayTitle = (books: BookData[]) => {
  return books.map((book) => {
    return {
      ...book,
      title: cutString(book.title, 26),
    };
  });
};
