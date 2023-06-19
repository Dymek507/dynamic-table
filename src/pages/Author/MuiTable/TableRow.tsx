import React from 'react'

import { TableCell, Checkbox, TableRow } from '@mui/material';
import { BookData } from '../../../types/global';

type MuiRowProps = {
  index: number;
  row: BookData;
  selected: readonly string[];
  handleOpenBook: (id: string) => void;
  handleCheckbox: (event: React.MouseEvent<unknown>, id: string) => void;
}

const MuiRow = ({ index, row, selected, handleOpenBook, handleCheckbox }: MuiRowProps) => {
  const isSelected = (name: string) => selected.indexOf(name) !== -1;
  const isItemSelected = isSelected(row.id);
  const labelId = `enhanced-table-checkbox-${index}`;
  return (
    <>
      <TableRow
        hover
        onClick={() => handleOpenBook(row.id)}
        role="checkbox"
        aria-checked={isItemSelected}
        tabIndex={-1}
        selected={isItemSelected}
        sx={{ cursor: 'pointer' }}
      >
        <TableCell padding="checkbox">
          <Checkbox
            onClick={(event) => handleCheckbox(event, row.id)}
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
      </TableRow >

    </>
  )
}


export default MuiRow

