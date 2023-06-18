import React from 'react'
import { cutString } from '../../utils/cutString'
import { IconButton } from '@mui/material'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

type DescriptionProps = {
  description: string
}

const removeHtmlTags = (str: string) => {
  return str.replace(/<[^>]*>?/gm, '');
}


const Description = ({ description }: DescriptionProps) => {
  const [isExpanded, setIsExpanded] = React.useState(false)
  const descriptionWithoutHtml = removeHtmlTags(description)
  const slicedDescription = cutString(descriptionWithoutHtml, 100)
  return (
    <div className="flex flex-col items-center mx-3 border-y-2 " >
      {description !== "" ?
        <>
          <p className="text-sm text-justify">{isExpanded ? descriptionWithoutHtml : slicedDescription}</p>
          <IconButton onClick={() => setIsExpanded(p => !p)}>
            {isExpanded ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </>
        : <p>
          No description
        </p>
      }
    </div >
  )
}

export default Description