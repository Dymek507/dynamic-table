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

  const authorSliced = cutString(authors[0], 20)

  return (
    <tr className='px-2 bg-slate-300'>
      <th>
        <label>
          <input type="checkbox" className="checkbox" onChange={() => select(id)} checked={isSelected} />
        </label>
      </th>
      <td>
        {/* Image display */}
        <div className="avatar">
          {/* <div className="w-12 h-12 flex-center">
            {imageLinks?.smallThumbnail ?
              <img className='h-full' src={imageLinks.smallThumbnail} alt={title} />
              :
              null
            }
          </div> */}
        </div>
      </td>
      <td>
        <div className="flex items-center space-x-3">
          <div>
            <div className="font-bold">{title}</div>
            <div className="text-[0.9em] opacity-50">{authorSliced}</div>
          </div>
        </div>
      </td>
      <td>
        <span className="text-[0.9em]">{categories[0]}</span>
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

