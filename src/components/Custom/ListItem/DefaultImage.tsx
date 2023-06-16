import React from 'react'

type DefaultImageProps = {
  title: string
}

const DefaultImage = ({ title }: DefaultImageProps) => {
  return (
    <div className='wh-full flex-center border-2 border-black p-2 bg-slate-300'>
      <p className='text-center'>
        {title}
      </p>
    </div>
  )
}

export default DefaultImage