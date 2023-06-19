import { useState } from 'react'
import Navbar from './Navbar';
import { Outlet, useOutletContext } from "react-router-dom";
import Breadcrumbs from './Breadcrumbs';

type CrumbContextType = { crumb: string, setCrumb: (string: string) => void };

const RootLayout = () => {
  const [crumb, setCrumb] = useState<string>('')

  return (
    <div className='flex flex-col min-h-screen gap-2 sm:px-8 lg:px-32 bg-[#f3f3f3]'>
      <Navbar />
      <Breadcrumbs lastCrumb={crumb} />
      <Outlet context={{ setCrumb }} />
    </div>
  )
}

export default RootLayout

export function useCrumb() {
  return useOutletContext<CrumbContextType>();
}