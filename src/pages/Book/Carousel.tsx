import { useSnapCarousel } from "react-snap-carousel";
import { BookData } from "../../types/global";
import ImageDisplay from "../../components/ImageDisplay/ImageDisplay";
import DefaultImage from "../../components/ImageDisplay/DefaultImage";
import { Link } from "react-router-dom";
import { cutString } from "../../utils/cutString";
import { sliceBookArrayTitle } from "./helpers/sliceBookArrayTitle";

type CarouselProps = {
  books: BookData[]
}

export const Carousel = ({ books }: CarouselProps) => {
  // const { scrollRef } = useSnapCarousel();
  const booksWithSlicedTitle = sliceBookArrayTitle(books)
  return (
    <ul
      // ref={scrollRef}
      className="flex h-full overflow-auto scroll-snap-x-mandatory"
    >
      {booksWithSlicedTitle.map((book, i) => (
        <li key={i}
          className="w-32 p-2 h-52 shrink-0"
        >
          <Link to={`/catalog/${book.id}`}>
            {book.imageLinks.thumbnail ?
              <ImageDisplay book={book} className="h-40 w-28" />
              :
              <DefaultImage title={book.title} className="h-40 w-28" />
            }
            <p className="w-full text-sm text-center">{book.title}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
};

