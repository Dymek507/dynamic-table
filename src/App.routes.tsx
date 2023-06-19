import {
  createHashRouter
} from "react-router-dom";

import RootLayout from "./layout";
import Authors from "./pages/Author"
import ErrorPage from "./layout/ErrorPage";
import Book from "./pages/Book";
import Home from "./pages/Home";

export const router = createHashRouter([
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
        path: "/:authorId",
        element: <Authors />,
      },
      {
        path: "/:authorId/:bookId",
        element: <Book />,
      },
    ]
  },
]);
