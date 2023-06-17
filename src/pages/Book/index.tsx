import { useParams } from "react-router-dom"
import { useFetchBook } from "../../hooks/useFetchBook"
import { BookData } from "../../types/global"
import { useFetchAuthor } from "../../hooks/useFetchAuthor"
import ImageDisplay from "../../components/ImageDisplay/ImageDisplay"
import DefaultImage from "../../components/ImageDisplay/DefaultImage"
import { Carousel } from "../../components/Carousel/Carousel"


const Book = () => {
  const { bookId } = useParams<{ bookId: string }>()
  const bookData = useFetchBook(bookId) as unknown as BookData
  const { title, authors, publisher, publishedDate, description, pageCount, categories, imageLinks } = bookData || {}

  const booksThisAuthor = useFetchAuthor(authors?.[0]) as unknown as BookData[]

  return (
    <div className="grid h-4/5 grid-cols-[1fr_3fr] grid-rows-[1fr_3fr_3fr] text-2xl bg-sky-200 ">
      {/* Image display */}
      <div className="col-span-1 row-span-2 bg-red-500 flex-center">
        <img className="h-5/6" src={imageLinks?.thumbnail} alt={title || ""} />
      </div>
      {/* Title display */}
      <div className="col-span-1 row-span-1 pl-2 bg-green-500 flex-center">
        <p className="text-slate-600">{title}</p>
      </div>
      {/* Info display */}
      <div className="col-span-1 row-span-1 p-2 bg-blue-500">
        <p className="text-sm">{description || "No description"}</p>
      </div>
      {/* Other books display */}
      <div className="flex flex-col col-span-2 row-span-1 bg-yellow-500">
        <h2 className="text-center">Books this Author:</h2>
        {booksThisAuthor?.length > 0 ? <Carousel books={booksThisAuthor} /> : <div className="h-full flex-center">
          <p>No other books by this author</p>
        </div>
        }
      </div>
    </div>
  )
}

export default Book