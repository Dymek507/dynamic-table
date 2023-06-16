import { GridColDef } from "@mui/x-data-grid";

export const columns: GridColDef[] = [
  { field: "etag", headerName: "ID", width: 70 },
  { field: "smallThumbnail", headerName: "Thumbnail", width: 130 },
  { field: "title", headerName: "Title", width: 130 },
  { field: "authors", headerName: "Authors", width: 130 },
  {
    field: "category",
    headerName: "Category",
    // description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
  },
  {
    field: "pageCount",
    headerName: "Pages",
    type: "number",
    width: 90,
  },
  {
    field: "publishedDate",
    headerName: "Published",
    width: 130,
  },
  {
    field: "MaturityRating",
    headerName: "Maturity Rating",
    width: 100,
  },
];
