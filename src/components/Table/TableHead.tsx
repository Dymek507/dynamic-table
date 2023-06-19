import React from 'react'

type TableHeadProps = {
  select: (e: boolean) => void
}

const TableHead = ({ select }: TableHeadProps) => {

  return (
    <thead>
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" onChange={(e) => select(e.target.checked)} />
          </label>
        </th>
        <th></th>
        <th className='text-center'>Title/Author</th>
        <th className='text-start'>Category</th>
        <th className='text-start'>Release</th>
        <th></th>
      </tr>
    </thead>
  )
}

export default TableHead