import React, { useState } from 'react'
import { BookData } from '../../types/global'
import { useFetchData } from '../../hooks/useFetchList'

type TableRowProps = {
  bookData: BookData
}

const TableRow = ({ bookData }: TableRowProps) => {
  const { id, title, authors, publisher, publishedDate, pageCount, categories, imageLinks } = bookData

  return (
    <tr>
      <th>
        <label>
          <input type="checkbox" className="checkbox" />
        </label>
      </th>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="w-12 h-12 mask mask-squircle">
              {imageLinks?.smallThumbnail ?
                <img className='h-full' src={imageLinks.smallThumbnail} alt={title} />
                :
                null
              }
            </div>
          </div>
          <div>
            <div className="font-bold">{title}</div>
            <div className="text-sm opacity-50">{authors}</div>
          </div>
        </div>
      </td>
      <td>
        Carroll Group
        <br />
        <span className="badge badge-ghost badge-sm">{categories}</span>
      </td>
      <td>Red</td>
      <th>
        <button className="btn btn-ghost btn-xs">details</button>
      </th>
    </tr>
  )
}

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

  console.log(booksData)

  return (
    // <div className="overflow-x-auto">
    <table className="table w-full bg-slate-200">
      {/* head */}
      <thead>
        <tr>
          <th>
            <label>
              <input type="checkbox" className="checkbox" />
            </label>
          </th>
          <th>Name</th>
          <th>Job</th>
          <th>Favorite Color</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {booksData && booksData.map(book => <TableRow key={book.id} bookData={book} />)}
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
    // </div>
  )
}

export default TailwindTable