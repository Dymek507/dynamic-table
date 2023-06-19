import React, { useState } from 'react'
import { BookData } from '../../types/global'
import ListItem from './ListItem'
import TableHead from './TableHead'


type TailwindTableProps = {
  booksList: BookData[]
}

const Table = ({ booksList }: TailwindTableProps) => {

  const [selectedBooksIds, setSelectedBooksIds] = useState<string[]>([])


  const handleSelect = (id: string) => {
    const selected = selectedBooksIds.find(selectedId => selectedId === id)
    if (selected) {
      const newSelectedBooksIds = selectedBooksIds.filter(selectedId => selectedId !== id)
      setSelectedBooksIds(newSelectedBooksIds)
    } else {
      setSelectedBooksIds([...selectedBooksIds, id])
    }
  }

  const handleSelectAll = (checkAll: boolean) => {
    if (checkAll && booksList) {
      const newSelectedBooksIds = booksList?.map(book => book.id)
      setSelectedBooksIds(newSelectedBooksIds)
    } else {
      setSelectedBooksIds([])
    }
  }

  return (
    <div className="text-xs bg-slate-200">
      <TableHead select={handleSelectAll} />
      {booksList && booksList.map(book => <ListItem key={book.id} bookData={book} select={handleSelect} selected={selectedBooksIds} />)}
    </div >
  )
}

export default Table