import { CircularProgress } from '@mui/material';
import { useSwrFetcher } from '../../hooks/useSwrFetcher';
import { useSearchTerm } from '../../layout';
import { BookData } from '../../types/global';
import { convertToBookData } from '../../utils/convertToBookData';
import { useState } from 'react';
import MuiTable from './MuiTable';
import { useParams } from 'react-router-dom';

export type PaginationValues = {
  page: number;
  changePage: (num: number) => void;
}

function Authors() {
  const [page, setPage] = useState(0);
  const { authorId } = useParams();

  const url = `?q=inauthor:%22${authorId}%22&maxResults=10&startIndex=${page * 10}&`;
  const result = useSwrFetcher(url, authorId ? true : false);

  const booksList = result?.data?.items?.map((book: any): BookData => {
    return convertToBookData(book);
  });

  const isLoading = result?.isLoading;

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
        <CircularProgress />
        :
        <MuiTable booksData={booksList} paginationValues={paginationValues} />
      }
    </div>
  )
}

export default Authors