import { BookData } from '../../types/global'
import { Chip } from '@mui/material';
import { cutString } from '../../utils/cutString';

type InfoProps = {
  book: BookData
}

const Info = ({ book }: InfoProps) => {
  const { title, authors, categories } = book || {}
  const slicedTitle = cutString(title || "", 50)
  return (
    <div className='p-2'>
      <p className="font-semibold">{slicedTitle}</p>
      <p className="text-sm font-light">{authors?.[0]}</p>
      <div className='flex flex-col gap-2 mt-2'>
        {categories?.slice(0, 4).map((category: string, id) => {
          return <Chip key={id} size="small" className='w-fit' label={category} variant="outlined" />
        })
        }
      </div>
    </div>
  )
}
export default Info
