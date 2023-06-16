import {
  createBrowserRouter
} from "react-router-dom";
import RootLayout from "./layout/RootLayout";
import Categories from "./pages/Categories";
import ErrorPage from "./layout/ErrorPage";
import Book from "./pages/Book";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/catalog",
        element: <Categories />,
      },
      {
        path: "/catalog/:bookId",
        element: <Book />
      },
    ]
  },
]);
