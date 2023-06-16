import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { useEffect, useState } from 'react';
import { BookData } from '../../types/global';
import { useFetchData } from '../../hooks/useFetchList';
import { columns } from '../BooksTable/columns';


export const BooksTable = () => {
  const [searchText, setSearchText] = useState('robin');
  // const [booksData, setBooksData] = useState<BookData[]>([]);

  const booksData: BookData[] = useFetchData(searchText).data;


  return (
    <div style={{ height: '100%', width: '100%' }}>
      <DataGrid
        rows={booksData}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  );
}