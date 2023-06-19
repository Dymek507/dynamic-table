import { BookData } from "../../types/global";
import ImageDisplay from "../../components/ImageDisplay";
import DefaultImage from "../../components/DefaultImage";
import { Link } from "react-router-dom";
import { sliceBookArrayTitle } from "./helpers/sliceBookArrayTitle";

type CarouselProps = {
  books: BookData[]
}

export const Carousel = ({ books }: CarouselProps) => {
  const booksWithSlicedTitle = sliceBookArrayTitle(books)
  return (
    <ul
      className="flex h-full overflow-auto scroll-snap-x-mandatory"
    >
      {booksWithSlicedTitle.map((book, i) => (
        <li key={i}
          className="w-32 p-2 h-52 shrink-0"
        >
          <Link to={`/catalog/${book.id}`}>
            {book.imageLinks.thumbnail ?
              <ImageDisplay book={book} className="h-40 duration-300 w-28 hover:scale-105" />
              :
              <DefaultImage title={book.title} className="h-40 duration-300 w-28 hover:scale-105" />
            }
            <p className="w-full text-sm text-center">{book.title}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
};

