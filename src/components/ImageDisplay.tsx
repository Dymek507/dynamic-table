import { BookData } from '../types/global'

type ImageDisplayProps = {
  book: BookData
  className?: string
}

const ImageDisplay = ({ book, className }: ImageDisplayProps) => {
  return (
    <img className={`object-cover object-center bg-slate-900 ${className}`} src={book.imageLinks?.thumbnail} alt={book.title || ""} />
  )
}

export default ImageDisplay