import React from 'react'

type TableHeadProps = {
  select: (e: boolean) => void
}

const TableHead = ({ select }: TableHeadProps) => {

  return (
    <thead className='border-b-2 border-black'>
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" onChange={(e) => select(e.target.checked)} />
          </label>
        </th>
        <th className='text-start'>Title/Author</th>
        <th className='text-start'>Category</th>
        <th className='text-start'>Release</th>
      </tr>
    </thead>
  )
}

export default TableHead