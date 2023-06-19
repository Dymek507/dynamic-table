import * as React from 'react';
import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow, Paper } from '@mui/material';

import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';

import { BookData } from '../../../types/global';
import { PaginationValues } from '..';
import MuiTableHead from './TableHead';

import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import { useNavigate } from 'react-router-dom';

type Order = 'asc' | 'desc';

type MuiTableProps = {
  booksData: BookData[];
  paginationValues: PaginationValues;
}

export default function MuiTable({ booksData, paginationValues }: MuiTableProps) {
  const [order, setOrder] = React.useState<Order>('asc');
  const [orderBy, setOrderBy] = React.useState<keyof BookData>('title');
  const [selected, setSelected] = React.useState<readonly string[]>([]);

  const { page, changePage } = paginationValues;

  const navigate = useNavigate()

  const rows = booksData?.map((book: any): BookData => {
    return {
      ...book,
      authors: book.authors[0],
      categories: book.categories[0],
    }
  }) as BookData[];

  const disableNext = booksData?.length !== 10;
  const disablePrev = page < 1;

  const handleRequestSort = (
    event: React.MouseEvent<unknown>,
    property: keyof BookData,
  ) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      const newSelected = rows.map((n) => n.title);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event: React.MouseEvent<unknown>, id: string) => {
    console.log(id)
    navigate(`${id}`)
    // const selectedIndex = selected.indexOf(name);
    // let newSelected: readonly string[] = [];

    // if (selectedIndex === -1) {
    //   newSelected = newSelected.concat(selected, name);
    // } else if (selectedIndex === 0) {
    //   newSelected = newSelected.concat(selected.slice(1));
    // } else if (selectedIndex === selected.length - 1) {
    //   newSelected = newSelected.concat(selected.slice(0, -1));
    // } else if (selectedIndex > 0) {
    //   newSelected = newSelected.concat(
    //     selected.slice(0, selectedIndex),
    //     selected.slice(selectedIndex + 1),
    //   );
    // }

    // setSelected(newSelected);
  };

  const isSelected = (name: string) => selected.indexOf(name) !== -1;

  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * 10 - rows.length) : 0;

  return (
    <Box sx={{ width: '100%' }}>
      {rows &&
        <Paper sx={{ width: '100%', mb: 2 }}>
          <TableContainer>
            <Table
              sx={{ minWidth: 320 }}
              aria-labelledby="tableTitle"
              size='medium'
            >
              <MuiTableHead
                numSelected={selected.length}
                order={order}
                orderBy={orderBy}
                onSelectAllClick={handleSelectAllClick}
                onRequestSort={handleRequestSort}
                rowCount={rows?.length}
              />
              <TableBody>
                {rows?.map((row, index) => {
                  const isItemSelected = isSelected(row.id);
                  const labelId = `enhanced-table-checkbox-${index}`;

                  return (
                    <TableRow
                      hover
                      onClick={(event) => handleClick(event, row.id)}
                      role="checkbox"
                      aria-checked={isItemSelected}
                      tabIndex={-1}
                      key={row.id}
                      selected={isItemSelected}
                      sx={{ cursor: 'pointer' }}
                    >
                      <TableCell padding="checkbox">
                        <Checkbox
                          color="primary"
                          checked={isItemSelected}
                          inputProps={{
                            'aria-labelledby': labelId,
                          }}
                        />
                      </TableCell>
                      <TableCell
                        component="th"
                        id={labelId}
                        scope="row"
                      >
                        {row.title}
                      </TableCell>
                      <TableCell >{row.authors}</TableCell>
                      <TableCell >{row.categories}</TableCell>
                      <TableCell >{row.publishedDate}</TableCell>
                    </TableRow>
                  );
                })}
                {emptyRows > 0 && (
                  <TableRow
                    style={{
                      height: 53 * emptyRows,
                    }}
                  >
                    <TableCell colSpan={6} />
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </TableContainer>
          {/* Pagination */}
          <div className='flex justify-end'>
            <IconButton aria-label="prev" size="large" onClick={() => changePage(-1)} disabled={disablePrev}>
              <KeyboardArrowLeftIcon />
            </IconButton>
            <IconButton aria-label="next" size="large" onClick={() => changePage(1)} disabled={disableNext}>
              <KeyboardArrowRightIcon />
            </IconButton>
          </div>
        </Paper>
      }
    </Box>
  );
}