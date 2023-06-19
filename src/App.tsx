import {
  RouterProvider
} from "react-router-dom";
import { router } from './App.routes';
import { ThemeProvider } from "@mui/material";
import { themeMain } from "./AppMuiTheme";

function App() {
  return (
    <ThemeProvider theme={themeMain}>
      <RouterProvider router={router} />
    </ThemeProvider>
  )
}

export default App
