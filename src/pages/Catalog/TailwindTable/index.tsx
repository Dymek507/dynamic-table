import React, { useState } from 'react'
import { BookData } from '../../../types/global'
import ListItem from './ListItem'
import TableHead from './TableHead'
import RowsSelect from './Pagination'
import Pagination from './Pagination'
import { PaginationValues } from '..'


type TailwindTableProps = {
  booksList: BookData[]
  paginationValues: PaginationValues
}

const TailwindTable = ({ booksList, paginationValues }: TailwindTableProps) => {

  const [selectedBooksIds, setSelectedBooksIds] = useState<string[]>([])
  const booksNumber = booksList?.length

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
    <div className="text-sm sm:text-lg lg:text-xl xl:text-2xl bg-slate-200">
      {
        <table className="table w-full border-separate border-spacing-y-2">
          <TableHead select={handleSelectAll} />
          <tbody className=''>
            {booksList && booksList.map((book, index) => <ListItem key={index} bookData={book} select={handleSelect} selected={selectedBooksIds} />)}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan={4} className="p-2">
                <Pagination values={paginationValues} />
              </td>
            </tr>
          </tfoot>
        </table>
      }
    </div>
  )
}

export default TailwindTable