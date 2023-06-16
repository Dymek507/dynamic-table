import {
  createBrowserRouter
} from "react-router-dom";
import RootLayout from "./layout/RootLayout";
import TablePage from "./pages/TablePage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/home",
        element: <TablePage />,
      },
    ]
  },
]);
