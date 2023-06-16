import React, { useState } from 'react'
import Navbar from './Navbar/Navbar';
import { BookData } from '../types/global';
import { Outlet, useOutletContext } from "react-router-dom";

type ContextType = { searchTerm: string };

const RootLayout = () => {
  const [searchTerm, setSearchTerm] = useState<string>('')
  const inputHandler = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setSearchTerm(e.target.value)
  }
  return (
    <div className='m-8'>
      <Navbar setSearchTerm={inputHandler} />
      <Outlet context={{ searchTerm }} />
    </div>
  )
}

export default RootLayout

export function useSearchTerm() {
  return useOutletContext<ContextType>();
}