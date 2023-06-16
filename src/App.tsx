// import { useState } from 'react'
// import BooksList from './components/BooksList'
// import Navbar from './components/Navbar/Navbar'
// import TailwindTable from './components/TailwindTable/TailwindTable'
import {
  RouterProvider
} from "react-router-dom";
import { router } from './App.routes';

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
