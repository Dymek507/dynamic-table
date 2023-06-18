import {
  RouterProvider
} from "react-router-dom";
import { router } from './App.routes';
import { Suspense } from "react";
import { LinearProgress } from "@mui/material";

function App() {
  return (
    <Suspense fallback={<div className="w-screen h-screen bg-stone-800">
      LOADING
    </div>}>
      <RouterProvider router={router} />
    </Suspense>

  )
}

export default App
