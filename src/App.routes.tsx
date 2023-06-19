import {
  createBrowserRouter
} from "react-router-dom";
import loadable from "@loadable/component";

import RootLayout from "./layout";
// import Catalog from "./pages/Catalog";
import Catalog from "./pages/Author"
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
        children: [
          {
            path: "/catalog/:authorId/:bookId",
            element: <Book />
          }
        ]
      },
      {
        path: "/catalog/:bookId",
        element: <Book />
      },
    ]
  },
]);
// export const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <RootLayout />,
//     errorElement: <ErrorPage />,
//     children: [
//       {
//         path: "/",
//         element: <Home />,
//       },
//       {
//         path: "/catalog",
//         element: <Catalog />,
//       },
//       {
//         path: "/catalog/:bookId",
//         element: <Book />
//       },
//     ]
//   },
// ]);
