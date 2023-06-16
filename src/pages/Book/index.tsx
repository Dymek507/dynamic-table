import { useParams } from "react-router-dom"
import { useFetchBook } from "../../hooks/useFetchBook"
import { BookData } from "../../types/global"
import { useFetchAuthor } from "../../hooks/useFetchAuthor"


const Book = () => {
  const { bookId } = useParams<{ bookId: string }>()
  const bookData = useFetchBook(bookId) as unknown as BookData
  const { title, authors, publisher, publishedDate, description, pageCount, categories, imageLinks } = bookData || {}

  const booksThisAuthor = useFetchAuthor(authors?.[0]) as unknown as BookData[]

  return (
    <div className="grid h-4/5 grid-cols-[1fr_2fr] grid-rows-[1fr_3fr_3fr] text-2xl bg-sky-200 ">
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
      <div className="col-span-2 row-span-1 bg-yellow-500">
        <h2 className="text-center">Books this Author:</h2>
        <div className="flex flex-row ">
          {booksThisAuthor && booksThisAuthor.map((book: BookData) => (
            <div key={book.id} className="flex items-center">
              <img className="h-5/6" src={book.imageLinks?.thumbnail} alt={book.title || ""} />
              {/* <p>{book.title}</p> */}
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}

export default Book