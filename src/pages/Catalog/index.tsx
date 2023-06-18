import { CircularProgress } from '@mui/material';
import TailwindTable from '../../components/TailwindTable';
import { useSwrFetcher } from '../../hooks/useSwrFetcher';
import { useSearchTerm } from '../../layout';
import { BookData } from '../../types/global';
import { convertToBookData } from '../../utils/convertToBookData';

const Catalog = () => {
  const { searchTerm } = useSearchTerm()

  const url = `?q=${searchTerm}&maxResults=10&startIndex=0&`;
  const result = useSwrFetcher(url, searchTerm ? true : false);

  const booksList = result.data?.items?.map((book: any): BookData => {
    return convertToBookData(book);
  }) as BookData[];

  const isLoading = result.isLoading;

  return (
    <div className='h-full flex-center'>
      {isLoading ?
        <CircularProgress />
        :
        <TailwindTable booksList={booksList} />
      }
    </div>
  )
}

export default Catalog