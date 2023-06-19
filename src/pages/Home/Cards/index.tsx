import AUTHORS_DATA from '../../../data/authors-data.json'
import AuthorCard from './AuthorCard'
import { Author } from '../types/home'


const Cards = () => {
  const authorsData = AUTHORS_DATA.authors as Author[]
  return (
    <div className='flex flex-row flex-wrap justify-around gap-2 p-2 '>
      {authorsData.map(author => (
        <AuthorCard key={author.name} author={author} />
      )
      )}
    </div>
  )
}

export default Cards