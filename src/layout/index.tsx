import React, { useState } from 'react'
import Navbar from './Navbar';
import { Outlet, useNavigate, useOutletContext, useParams } from "react-router-dom";
import Breadcrumbs from './Breadcrumbs';

type SearchContextType = { searchTerm: string, inputHandler: (string: string) => void };
type CrumbContextType = { crumb: string, setCrumb: (string: string) => void };

const RootLayout = () => {
  const navigate = useNavigate()
  //active path
  const { authorId } = useParams();

  const [searchTerm, setSearchTerm] = useState<string>('')
  const [crumb, setCrumb] = useState<string>('')
  const inputHandler = (string: string) => {
    setSearchTerm(string)
    navigate(`/catalog/${searchTerm}`)
  }

  return (
    <div className='flex flex-col h-screen gap-2 sm:px-8 lg:px-32'>
      <Navbar setSearchTerm={inputHandler} />
      <Breadcrumbs lastCrumb={crumb} />
      <Outlet context={{ searchTerm, inputHandler, setCrumb }} />
    </div>
  )
}

export default RootLayout

export function useSearchTerm() {
  return useOutletContext<SearchContextType>();
}
export function useCrumb() {
  return useOutletContext<CrumbContextType>();
}