import { CircularProgress } from '@mui/material';
import TailwindTable from './TailwindTable';
import { useSwrFetcher } from '../../hooks/useSwrFetcher';
import { useSearchTerm } from '../../layout';
import { BookData } from '../../types/global';
import { convertToBookData } from '../../utils/convertToBookData';

import React, { useState } from 'react';
import EnhancedTable from './MuiTable/Table';
import MuiTable from './MuiTable/Table';

export type PaginationValues = {
  page: number;
  limit: number;
  total: number;
  changePage: (page: number) => void;
  changeLimit: (limit: number) => void;
}


function Catalog() {
  const { searchTerm } = useSearchTerm()
  const [page, setPage] = useState(0);
  const [limit, setLimit] = useState(10);
  console.log(page, limit)

  const changePage = (page: number) => {
    setPage(page);
  };

  const changeLimit = (limit: number) => {
    setLimit(limit);
  };

  const url = `?q=${searchTerm}&maxResults=${limit}&startIndex=0&`;
  const result = useSwrFetcher(url, searchTerm ? true : false);

  // const booksList = BOOK_LIST.items.map((book: any): BookData => {
  //   return convertToBookData(book);
  // }) as BookData[];


  const booksList = result.data?.items?.map((book: any): BookData => {
    return convertToBookData(book);
  }) as BookData[];

  console.log(booksList)

  const isLoading = result.isLoading;

  const paginationValues: PaginationValues = {
    page,
    limit,
    total: booksList?.length || 0,
    changePage,
    changeLimit,
  };

  return (
    <div className='h-full'>
      {isLoading ?
        <CircularProgress />
        :
        // <TailwindTable booksList={booksList} paginationValues={paginationValues} />
        <MuiTable booksData={booksList} paginationValues={paginationValues} />
      }
    </div>
  )
}

export default Catalog