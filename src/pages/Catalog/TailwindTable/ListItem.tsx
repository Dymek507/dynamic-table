import { Link, useNavigate } from 'react-router-dom'
import { BookData } from '../../../types/global'
import { useState, useEffect } from 'react'
import { cutString } from '../../../utils/cutString'

type TableRowProps = {
  bookData: BookData
  select: (id: string) => void
  selected: string[]
}

const ListItem = ({ bookData, select, selected }: TableRowProps) => {
  const { id, title, authors, publisher, publishedDate, pageCount, categories, imageLinks } = bookData

  const navigate = useNavigate();

  const [isSelected, setIsSelected] = useState(false)

  useEffect(() => {
    const isSelected = selected.includes(bookData.id)
    setIsSelected(isSelected)
  }, [bookData.id, selected])


  const goRouteId = () => {
    navigate(`/catalog/${id}`);
  }

  const authorSliced = cutString(authors[0], 20)

  return (
    <tr className='w-full px-2 cursor-pointer bg-slate-300' onClick={goRouteId}>
      <th>
        <label onClick={(e) => e.stopPropagation()}>
          <input type="checkbox" className="z-10 checkbox" onChange={() => select(id)} checked={isSelected} />
        </label>
      </th>
      {/* <td > */}
      <td className="flex items-center max-w-[40%] space-x-3 overflow-hidden bg-slate-700 whitespace-nowrap text-ellipsis">
        <div>
          <p className="font-bold bg-purple-600 ">{title}</p>
          <p className="text-[0.9em] opacity-50">{authorSliced}</p>
        </div>
      </td>
      {/* </td> */}
      <td>
        <span className="text-[0.9em]">{categories[0]}</span>
      </td>
      <td>{publishedDate?.slice(0, 4) || ""}</td>
    </tr >
  )
}

export default ListItem

