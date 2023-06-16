import BooksList from '../../components/Custom/BooksList'
import { useSearchTerm } from '../../layout/RootLayout';

const Categories = () => {
  const { searchTerm } = useSearchTerm()
  return (
    <BooksList searchTerm={searchTerm} />
  )
}

export default Categories