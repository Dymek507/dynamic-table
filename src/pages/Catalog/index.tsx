import TailwindTable from '../../components/TailwindTable';
import { useSearchTerm } from '../../layout';

const Catalog = () => {
  const { searchTerm } = useSearchTerm()
  return (
    <TailwindTable searchTerm={searchTerm} />
  )
}

export default Catalog