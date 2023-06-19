import React from 'react';
import TablePagination from '@mui/material/TablePagination';
import { PaginationValues } from '..';
import PageContext from '../index';

type PaginationProps = {
  values: PaginationValues
}

const Pagination = ({ values }: PaginationProps) => {
  const { page, limit, total, changePage, changeLimit } = values

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number,
  ) => {
    changePage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    changeLimit(parseInt(event.target.value, 10));
    changePage(0);
  };

  return (
    <TablePagination
      component="div"
      count={total}
      page={page}
      onPageChange={handleChangePage}
      rowsPerPage={limit}
      onRowsPerPageChange={handleChangeRowsPerPage}
    />
  );
}

export default Pagination