type DefaultImageProps = {
  title: string
}

const DefaultImage = ({ title }: DefaultImageProps) => {
  return (
    <div className='p-2 text-sm border-2 border-black h-52 w-36 flex-center bg-slate-300'>
      <p className='text-center'>
        {title}
      </p>
    </div>
  )
}

export default DefaultImage