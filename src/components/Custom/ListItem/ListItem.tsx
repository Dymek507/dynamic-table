import { BookData } from '../../../types/global'
import AuthorsDisplay from './AuthorsDisplay'
import CategoriesDisplay from './CategoriesDisplay'
import DefaultImage from '../../ImageDisplay/DefaultImage'
import { Link } from 'react-router-dom'

type ListItemProps = {
  bookData: BookData,
  handleSelect: (id: string) => void,
  selectedBooksIds: string[]
}

const ListItem = ({ bookData, handleSelect, selectedBooksIds }: ListItemProps) => {
  const { id, title, authors, publisher, publishedDate, pageCount, categories, imageLinks } = bookData

  const selected = selectedBooksIds.find(selectedId => selectedId === id)

  return (
    <div className={`flex flex-wrap text-gray-600 border-b-2 border-gray-300 p-2 h-56 ${selected ? "bg-gray-400" : ""}`} onClick={() => handleSelect(id)}>
      {/* Image Display */}
      <div className='w-32 pr-3 border-r-2 border-gray-300 flex-center' >
        {imageLinks.thumbnail ?
          <img className='w-full' src={imageLinks?.thumbnail} alt={title} />
          : <DefaultImage title={title} />}
      </div >
      {/* Info Display */}
      < div className='flex flex-col flex-grow gap-2 m-2' >
        <p className='mb-5 text-xl font-bold'>
          {title}
        </p>
        <AuthorsDisplay authors={authors} />
        <CategoriesDisplay categories={categories} />
      </div >
      {/* Details Buttons */}
      < div className='flex-col w-40 gap-2 m-2 flex-center justify-self-end' >
        <Link to={`/catalog/${id}`}>
          <button>Details</button>
        </Link>
      </div >
    </div >
  )
}

export default ListItem