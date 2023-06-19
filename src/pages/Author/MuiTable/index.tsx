import * as React from 'react';
import { useNavigate } from 'react-router-dom';

import { Box, Table, TableBody, TableContainer, Paper } from '@mui/material';

import MuiTableHead from './TableHead';
import Pagination from './Pagination';
import MuiRow from './TableRow';

import { PaginationValues } from '../types/author';
import { BookData } from '../../../types/global';
import { RowBookData } from './types/table';

type MuiTableProps = {
  booksData: BookData[];
  paginationValues: PaginationValues;
}

export default function MuiTable({ booksData, paginationValues }: MuiTableProps) {
  const [selected, setSelected] = React.useState<readonly string[]>([]);
  const navigate = useNavigate()

  const rows = booksData?.map((book: BookData) => {
    return {
      ...book,
      authors: book.authors[0],
      categories: book.categories[0],
    }
  }) as RowBookData[];

  const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      const newSelected = rows.map((n) => n.id);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  const handleOpenBook = (id: string) => {
    navigate(`${id}`)
  }

  const handleCheckbox = (event: React.MouseEvent<unknown>, id: string) => {
    event.stopPropagation();
    const selectedIndex = selected.indexOf(id);
    let newSelected: readonly string[] = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }
    setSelected(newSelected);
  }

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
                onSelectAllClick={handleSelectAllClick}
                rowCount={rows?.length}
              />
              <TableBody>
                {rows?.map((row, index) => (
                  <MuiRow
                    index={index}
                    row={row}
                    key={row.id}
                    selected={selected}
                    handleOpenBook={handleOpenBook}
                    handleCheckbox={handleCheckbox}
                  />
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <Pagination paginationValues={paginationValues} arrLength={booksData?.length} />
        </Paper>
      }
    </Box>
  );
}