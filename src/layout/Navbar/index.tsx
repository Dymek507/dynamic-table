import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import { Link } from 'react-router-dom';
import { Menu } from '@mui/material';

type NavbarProps = {
  setSearchTerm: (searchTerm: string) => void
}

const Navbar = ({ setSearchTerm }: NavbarProps) => {
  const [input, setInput] = React.useState('' as string)

  // const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault()
  //   setInput('')
  //   setSearchTerm(e.target.value)
  // }

  return (
    <AppBar position="static">
      <Toolbar>
        <MenuBookIcon sx={{ mr: 1 }} />
        <Link to="/">
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            Books List
          </Typography>
        </Link>
        {/* <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
              onChange={(e) => handleSubmit(e)}
              value={input}
            />
          </Search> */}
      </Toolbar>
    </AppBar>
  );
}

export default Navbar

