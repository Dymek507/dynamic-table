import { useSnapCarousel } from "react-snap-carousel";
import { BookData } from "../../types/global";
import ImageDisplay from "../../components/ImageDisplay/ImageDisplay";
import DefaultImage from "../../components/ImageDisplay/DefaultImage";
import { Link } from "react-router-dom";

type CarouselProps = {
  books: BookData[]
}

export const Carousel = ({ books }: CarouselProps) => {
  // const { scrollRef } = useSnapCarousel();
  return (
    <ul
      // ref={scrollRef}
      className="flex h-full overflow-auto scroll-snap-x-mandatory"
    >
      {books.map((book, i) => (
        <li key={i}
          className="p-2 shrink-0 w-36"
        >
          <Link to={`/catalog/${book.id}`}>
            {book.imageLinks.thumbnail ? <ImageDisplay book={book} /> : <DefaultImage title={book.title} className="w-full" />}
            <p className="w-full text-sm text-center">{book.title}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
};

