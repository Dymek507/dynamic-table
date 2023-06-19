import { Checkbox, TableCell, TableHead, TableRow } from "@mui/material";
import { BookData } from "../../../types/global";

interface HeadCell {
  disablePadding: boolean;
  id: keyof BookData;
  label: string;
}

type Order = 'asc' | 'desc';

const headCells: readonly HeadCell[] = [
  {
    id: 'title',
    disablePadding: false,
    label: 'Title',
  },
  {
    id: 'authors',
    disablePadding: false,
    label: 'Author',
  },
  {
    id: 'categories',
    disablePadding: false,
    label: 'Category',
  },
  {
    id: 'publishedDate',
    disablePadding: false,
    label: 'Year',
  }
];

interface EnhancedTableProps {
  numSelected: number;
  onRequestSort: (event: React.MouseEvent<unknown>, property: keyof BookData) => void;
  onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
  order: Order;
  orderBy: string;
  rowCount: number;
}

export default function MuiTableHead(props: EnhancedTableProps) {
  const { onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } =
    props;

  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox
            color="primary"
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
          // inputProps={{
          //   'aria-label': 'select all desserts',
          // }}
          />
        </TableCell>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            padding={'normal'}
          >
            {headCell.label}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}