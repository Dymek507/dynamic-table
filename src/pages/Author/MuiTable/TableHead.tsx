import { Checkbox, TableCell, TableHead, TableRow } from "@mui/material";
import { BookData } from "../../../types/global";

interface HeadCell {
  id: keyof BookData;
  label: string;
}

const headCells: readonly HeadCell[] = [
  {
    id: 'title',
    label: 'Title',
  },
  {
    id: 'authors',
    label: 'Author',
  },
  {
    id: 'categories',
    label: 'Category',
  },
  {
    id: 'publishedDate',
    label: 'Year',
  }
];

interface EnhancedTableProps {
  numSelected: number;
  onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
  rowCount: number;
}

export default function MuiTableHead(props: EnhancedTableProps) {
  const { onSelectAllClick, numSelected, rowCount } =
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