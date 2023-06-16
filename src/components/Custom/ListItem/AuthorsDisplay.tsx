import React from 'react'

type AuthorsDisplayProps = {
  authors: string[]
}

const AuthorsDisplay = ({ authors }: AuthorsDisplayProps) => {
  return (
    <div className='flex flex-col'>
      <p>
        <span className='font-semibold'>Authors: </span>{authors.join(', ')}
      </p>
    </div>
  )
}

export default AuthorsDisplay