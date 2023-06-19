import { CircularProgress } from '@mui/material';
import { useState } from 'react';
import MuiTable from './MuiTable';
import { useParams } from 'react-router-dom';
import { PaginationValues } from './types/author';
import { useGetAuthorList } from './hooks/useGetAuthorList';

function Authors() {
  const [page, setPage] = useState(0);
  const { authorId } = useParams();

  const { booksList, isLoading } = useGetAuthorList(authorId, page);

  const changePage = (num: number) => {
    if (page + num < 0) return;
    if (booksList.length < 10) return;
    setPage(prev => prev + num);
  };

  const paginationValues: PaginationValues = {
    page,
    changePage,
  };

  return (
    <div className='h-full'>
      {isLoading ?
        <div className='h-full flex-center'>
          <CircularProgress />
        </div>
        :
        <MuiTable booksData={booksList} paginationValues={paginationValues} />
      }
    </div>
  )
}

export default Authors