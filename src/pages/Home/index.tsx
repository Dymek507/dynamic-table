import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useSearchTerm } from '../../layout';
import { Button } from '@mui/material';
import bookImg from '../../assets/book_home.webp'


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
    <div className='flex flex-col items-center h-full'>
      <img src={bookImg} alt="book" className="w-1/3 h-1/4" />
      <Box
        component="form"
        onSubmit={handleSubmit}
        noValidate
        sx={{ mt: 1 }}
      >
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

