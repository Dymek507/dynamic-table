import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { useEffect, useState } from 'react';
import { convertToTable } from '../utils/convertToTable';
import { BookData } from '../types/global';


const columns: GridColDef[] = [
  { field: 'etag', headerName: 'ID', width: 70 },
  { field: 'title', headerName: 'Title', width: 130 },
  { field: 'authors', headerName: 'Authors', width: 130 },
  {
    field: 'category',
    headerName: 'Category',
    // description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (params: GridValueGetterParams) =>
      `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  },
  {
    field: 'category',
    headerName: 'Category',
    width: 90,
  },
  {
    field: 'pageCount',
    headerName: 'Pages',
    type: 'number',
    width: 90,
  },
  {
    field: 'publishedDate',
    headerName: 'Published',
    width: 130,
  },
  {
    field: 'MaturityRating',
    headerName: '+18',
    width: 130,
  }
];

export const BooksTable = () => {
  const [searchText, setSearchText] = useState('react');
  const [booksData, setBooksData] = useState<BookData[]>([]);

  useEffect(() => {
    fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchText}&key=AIzaSyD5KvSNppxxis32OoGtIqx8ypYE0xqzZXw`).then((response) => {
      response.json().then((data) => {
        const formatedData = convertToTable(data.items);
        setBooksData(formatedData);
      });
    });
  }, [searchText]);


  return (
    <div style={{ height: 400, width: '100%' }}>
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