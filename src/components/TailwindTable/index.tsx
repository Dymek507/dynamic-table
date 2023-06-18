import React, { useState } from 'react'
import { BookData } from '../../types/global'
import { useFetchData } from '../../hooks/useFetchList'
import ListItem from './ListItem'
import TableHead from './TableHead'
import { useSwrFetcher } from '../../hooks/useSwrFetcher'
import { convertToBookData } from '../../utils/convertToBookData'


type TailwindTableProps = {
  booksList: BookData[]
}

const TailwindTable = ({ booksList }: TailwindTableProps) => {

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
    <div className="p-4 overflow-x-auto bg-slate-200">
      {
        <table className="table w-full ">
          {/* head */}
          <TableHead select={handleSelectAll} />
          <tbody>
            {booksList && booksList.map(book => <ListItem key={book.id} bookData={book} select={handleSelect} selected={selectedBooksIds} />)}
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
      }
    </div>
  )
}

export default TailwindTable