import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Author } from '../types/home';
import { Link } from 'react-router-dom';

type AuthorCardProps = {
  author: Author
}

export default function AuthorCard({ author }: AuthorCardProps) {
  const { name, photo, category } = author
  const authorQuery = name.replace(' ', '+')
  return (
    <Card sx={{
      width: '240px',
      ':hover': {
        boxShadow: 20,
      },
    }}>
      <Link to={`/${authorQuery}`}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="120"
            image={photo}
            alt={name}
            sx={{ "&.MuiCardMedia-root": { height: '360px' } }}
          />
          <CardContent>
            <Typography gutterBottom variant="h6" component="div">
              {name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {category}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Link>
    </Card >
  );
}