import { CircularProgress } from '@mui/material';
import { useSwrFetcher } from '../../hooks/useSwrFetcher';
import { useSearchTerm } from '../../layout';
import { BookData } from '../../types/global';
import { convertToBookData } from '../../utils/convertToBookData';

import React, { useState } from 'react';
import MuiTable from './MuiTable/Table';
import { useGetBookData } from './hooks/useGetBookData';
import { getAuthorQuery } from './helpers/getAuthorQuery';

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
    const newPage = limit * page;
    setPage(newPage);
  };

  const changeLimit = (limit: number) => {
    setLimit(limit);
  };

  const author = "Stephen King"
  //Fetch books by this author
  const authorQuery = getAuthorQuery(author);
  const url = `?q=inauthor:%22${authorQuery}%22&maxResults=${limit}&startIndex=0&`;
  const result = useSwrFetcher(url, authorQuery ? true : false);

  const booksList = result?.data?.items?.map((book: any): BookData => {
    return convertToBookData(book);
  });

  const isLoading = result?.isLoading;

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
        <MuiTable booksData={booksList} paginationValues={paginationValues} />
      }
    </div>
  )
}

export default Catalog