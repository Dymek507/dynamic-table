import { useSnapCarousel } from "react-snap-carousel";
import { BookData } from "../../types/global";
import ImageDisplay from "../ImageDisplay/ImageDisplay";
import DefaultImage from "../ImageDisplay/DefaultImage";

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
          className="p-2 shrink-0"
        >
          {book.imageLinks.thumbnail ? <ImageDisplay book={book} /> : <DefaultImage title={book.title} />}
        </li>
      ))}
    </ul>
  );
};

