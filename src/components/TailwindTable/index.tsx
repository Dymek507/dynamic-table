import React, { useState } from 'react'
import { BookData } from '../../types/global'
import { useFetchData } from '../../hooks/useFetchList'
import ListItem from './ListItem'
import TableHead from './TableHead'


type TailwindTableProps = {
  searchTerm: string
}

const TailwindTable = ({ searchTerm }: TailwindTableProps) => {

  const [selectedBooksIds, setSelectedBooksIds] = useState<string[]>([])

  const booksData: (BookData[] | undefined) = useFetchData(searchTerm);

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
    if (checkAll && booksData) {
      const newSelectedBooksIds = booksData?.map(book => book.id)
      setSelectedBooksIds(newSelectedBooksIds)
    } else {
      setSelectedBooksIds([])
    }
  }

  return (
    <div className="p-4 overflow-x-auto bg-slate-200">
      <table className="table w-full ">
        {/* head */}
        <TableHead select={handleSelectAll} />
        <tbody>
          {booksData && booksData.map(book => <ListItem key={book.id} bookData={book} select={handleSelect} selected={selectedBooksIds} />)}
        </tbody>
        {/* foot */}
        {/* <tfoot>
        <tr>
          <th></th>
          <th>Name</th>
          <th>Job</th>
          <th>Favorite Color</th>
          <th></th>
        </tr>
      </tfoot> */}
      </table>
    </div>
  )
}

export default TailwindTable