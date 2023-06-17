import { BookData } from '../../types/global'

type ImageDisplayProps = {
  book: BookData
}

const ImageDisplay = ({ book }: ImageDisplayProps) => {
  return (
    <img className="object-cover object-center w-36 h-52" src={book.imageLinks?.thumbnail} alt={book.title || ""} />
  )
}

export default ImageDisplay