import {
  createBrowserRouter
} from "react-router-dom";
import RootLayout from "./layout";
import Catalog from "./pages/Catalog";
import ErrorPage from "./layout/ErrorPage";
import Book from "./pages/Book";
import Home from "./pages/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/catalog",
        element: <Catalog />,
      },
      {
        path: "/catalog/:bookId",
        element: <Book />
      },
    ]
  },
]);
