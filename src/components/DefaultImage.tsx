import { cutString } from "../utils/cutString"

type DefaultImageProps = {
  title: string
  className?: string
}

const DefaultImage = ({ title, className }: DefaultImageProps) => {
  const slicedTitle = cutString(title, 50)
  return (
    <div className={`p-2 text-sm border-2 border-black flex-center bg-slate-500 ${className}`}>
      <p className='text-center'>
        {slicedTitle}
      </p>
    </div>
  )
}

export default DefaultImage