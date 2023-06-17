import BooksList from '../../components/Custom/BooksList'
import TailwindTable from '../../components/TailwindTable/TailwindTable';
import { useSearchTerm } from '../../layout/RootLayout';

const Categories = () => {
  const { searchTerm } = useSearchTerm()
  return (
    // <BooksList searchTerm={searchTerm} />
    <TailwindTable searchTerm={searchTerm} />
  )
}

export default Categories