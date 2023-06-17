import React, { useState } from 'react'
import Navbar from './Navbar/Navbar';
import { Outlet, useOutletContext } from "react-router-dom";
import Breadcrumbs from './Breadcrumbs';

type ContextType = { searchTerm: string };

const RootLayout = () => {
  const [searchTerm, setSearchTerm] = useState<string>('')
  const inputHandler = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setSearchTerm(e.target.value)
  }
  return (
    <div className='h-screen p-8'>
      <Navbar setSearchTerm={inputHandler} />
      <Breadcrumbs />
      <Outlet context={{ searchTerm }} />
    </div>
  )
}

export default RootLayout

export function useSearchTerm() {
  return useOutletContext<ContextType>();
}