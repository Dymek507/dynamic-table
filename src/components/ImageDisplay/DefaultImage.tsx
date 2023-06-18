type DefaultImageProps = {
  title: string
  className?: string
}

const DefaultImage = ({ title, className }: DefaultImageProps) => {
  return (
    <div className={`p-2 text-sm border-2 border-black h-52 flex-center bg-slate-500 ${className}`}>
      <p className='text-center'>
        {title}
      </p>
    </div>
  )
}

export default DefaultImage