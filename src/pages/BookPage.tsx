import { useParams } from "react-router-dom"
import { useFetchBook } from "../hooks/useFetchBook"

const BookPage = () => {
  const { bookId } = useParams<{ bookId: string }>()
  const bookData = useFetchBook(bookId)
  console.log(bookData)

  return (
    <div className="h-screen text-2xl bg-sky-200 flex-center">
      <div></div>
    </div>
  )
}

export default BookPage