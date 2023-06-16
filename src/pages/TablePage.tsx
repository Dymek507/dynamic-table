import BooksList from '../components/Custom/BooksList'
import { useSearchTerm } from '../layout/RootLayout';

const TablePage = () => {
  const { searchTerm } = useSearchTerm()
  return (
    <BooksList searchTerm={searchTerm} />
  )
}

export default TablePage