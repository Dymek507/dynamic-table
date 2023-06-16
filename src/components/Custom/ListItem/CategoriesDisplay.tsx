import React from 'react'

type CategoriesDisplayProps = {
  categories: string[]
}

const CategoriesDisplay = ({ categories }: CategoriesDisplayProps) => {
  return (
    <div className=''>
      <p>
        <span className='font-semibold'>Categories: </span>{categories.join(', ')}
      </p>
    </div>
  )
}

export default CategoriesDisplay