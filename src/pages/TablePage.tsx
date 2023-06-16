import React from 'react'
import BooksList from '../components/Custom/BooksList'
import { useOutletContext } from "react-router-dom";
import { useSearchTerm } from '../layout/rootLayout';

const TablePage = () => {
  // const { searchTerm } = useOutletContext<{ searchTerm: string }>();
  const { searchTerm } = useSearchTerm()
  console.log(searchTerm)
  return (
    <BooksList searchTerm={searchTerm} />
  )
}

export default TablePage