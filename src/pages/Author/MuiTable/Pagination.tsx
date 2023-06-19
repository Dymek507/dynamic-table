import { IconButton } from '@mui/material';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';

import { PaginationValues } from '../types/author';

type PaginationProps = {
  paginationValues: PaginationValues;
  arrLength: number
}

const Pagination = ({ paginationValues, arrLength }: PaginationProps) => {
  const { page, changePage } = paginationValues;

  const disableNext = arrLength !== 10;
  const disablePrev = page < 1;
  return (
    <div className='flex justify-end'>
      <IconButton aria-label="prev" size="large" onClick={() => changePage(-1)} disabled={disablePrev}>
        <KeyboardArrowLeftIcon />
      </IconButton>
      <IconButton aria-label="next" size="large" onClick={() => changePage(1)} disabled={disableNext}>
        <KeyboardArrowRightIcon />
      </IconButton>
    </div>
  )
}

export default Pagination