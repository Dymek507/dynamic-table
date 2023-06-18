import React from 'react'
import { BookData } from '../../types/global'
import { Chip } from '@mui/material';

type InfoProps = {
  book: BookData
}

const Info = ({ book }: InfoProps) => {
  const { title, authors, categories } = book || {}
  return (
    <div className='p-2'>
      <p className="font-semibold">{title}</p>
      <p className="text-sm font-light">{authors?.[0]}</p>
      <div>
        {categories?.map((category: string) => {
          return <Chip size="small" label={category} variant="outlined" />
        })
        }
      </div>
    </div>
  )
}
export default Info
