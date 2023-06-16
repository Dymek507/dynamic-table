import { useState } from 'react'
import ListItem from './ListItem/ListItem'
import { BookData } from '../../types/global'
import { useFetchData } from '../../hooks/useFetchData'

type BooksListProps = {
  searchTerm: string
}

const BooksList = ({ searchTerm }: BooksListProps) => {
  const [selectedBooksIds, setSelectedBooksIds] = useState<string[]>([])

  const booksData: (BookData[] | undefined) = useFetchData(searchTerm);

  const handleSelect = (id: string) => {
    const selected = selectedBooksIds.find(selectedId => selectedId === id)
    if (selected) {
      const newSelectedBooksIds = selectedBooksIds.filter(selectedId => selectedId !== id)
      setSelectedBooksIds(newSelectedBooksIds)
    } else {
      setSelectedBooksIds([...selectedBooksIds, id])
    }
  }

  return (
    <div className='flex flex-col gap-5 p-4 bg-slate-200'>
      {booksData && booksData.map(book => <ListItem key={book.id} bookData={book} handleSelect={handleSelect} selectedBooksIds={selectedBooksIds} />)}
    </div>
  )
}

export default BooksList