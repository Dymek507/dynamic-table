import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useSearchTerm } from '../../layout';
import { Button } from '@mui/material';
import bookImg from '../../assets/book_home.webp'
import { Link } from 'react-router-dom';


const authors = [
  { id: "1", name: 'Stephen', surname: 'King' },
  { id: "2", name: 'Jo', surname: 'Nesbo' },
  { id: "3", name: 'Dmitry', surname: 'Gluhovsky' },
  { id: "4", name: 'J.R.R.', surname: 'Tolkien' },
  { id: "5", name: 'Andrzej', surname: 'Sapkowski' },
]

const Home = () => {
  const { inputHandler } = useSearchTerm()

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const data = new FormData(e.currentTarget);
    if (data.get("searchTerm") !== "" && data.get("searchTerm") !== null) {
      inputHandler(data.get("searchTerm")!.toString())
    }
  }

  return (
    <div className='flex flex-col items-center h-full p-3'>
      <aside className='self-end'>
        <nav className='border-2 '>
          <ul>
            {authors.map((author) => (
              <Link to={`/author/${author.id}`} key={author.id}>
                <li className='p-2 hover:bg-gray-200'>{author.name} {author.surname}</li>
              </Link>
            ))}
          </ul>
        </nav>
      </aside>
      <Box
        component="form"
        onSubmit={handleSubmit}
        noValidate
        sx={{ mt: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}
      >
        <img src={bookImg} alt="book" className="w-72" />
        <TextField
          margin="normal"
          fullWidth
          name="searchTerm"
          label="Search"
          type="text"
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Search
        </Button>
      </Box>
    </div>
  )
}

export default Home

