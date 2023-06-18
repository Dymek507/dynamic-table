import { Link } from 'react-router-dom'
import { BookData } from '../../types/global'
import { useState, useEffect } from 'react'
import { cutString } from '../../utils/cutString'

type TableRowProps = {
  bookData: BookData
  select: (id: string) => void
  selected: string[]
}

const ListItem = ({ bookData, select, selected }: TableRowProps) => {
  const { id, title, authors, publisher, publishedDate, pageCount, categories, imageLinks } = bookData

  const [isSelected, setIsSelected] = useState(false)

  useEffect(() => {
    const isSelected = selected.includes(bookData.id)
    setIsSelected(isSelected)
  }, [bookData.id, selected])

  return (
    <tr>
      <th>
        <label>
          <input type="checkbox" className="checkbox" onChange={() => select(id)} checked={isSelected} />
        </label>
      </th>
      <td>
        <div className="flex items-center space-x-3">
          {/* Image display */}
          <div className="avatar">
            <div className="w-12 h-12 mask mask-squircle flex-center">
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
        <span className="text-sm badge badge-ghost badge-sm">{categories}</span>
      </td>
      <td>{publishedDate?.slice(0, 4) || ""}</td>
      <th>
        <Link to={`/catalog/${id}`}>
          <button className="btn btn-ghost btn-xs">details</button>
        </Link>
      </th>
    </tr>
  )
}

export default ListItem

