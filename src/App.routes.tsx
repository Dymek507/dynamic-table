import {
  createBrowserRouter
} from "react-router-dom";
import RootLayout from "./layout/RootLayout";
import TablePage from "./pages/TablePage";
import ErrorPage from "./layout/ErrorPage";
import BookPage from "./pages/BookPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/catalog",
        element: <TablePage />,
      },
      {
        path: "/catalog/:bookId",
        element: <BookPage />
      },
    ]
  },
]);
