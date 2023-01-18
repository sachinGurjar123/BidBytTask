import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import VisibilityIcon from '@mui/icons-material/Visibility';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { Div, Heart, Status, Status2 } from './style';

const FoodCard = ({
  src = '',
  title = 'Hello',
  price = 10,
  description = 'adsasdsad',
  name = 'sad',
  day = 'sad'
}) => (
  <>
    <Div>
      <Card
        sx={{
          boxShadow: '0px 1px 6px 1px #e7e0e0',
          marginRight: '20px',
          borderRadius: '20px'
        }}>
        <CardMedia component="img" alt="green iguana" height="200px" image={src} />
        <CardContent>
          <Typography
            gutterBottom
            variant="p"
            style={{
              fontWeight: 'lighter',
              fontSize: '18px'
            }}
            // height="20px"
            component="div">
            <strong> {title}</strong>
          </Typography>
          <Typography
            gutterBottom
            variant="p"
            height="20px"
            color="gray"
            component="div"
            marginBottom={'20px'}>
            <span style={{ color: '#2ef0e3', fontSize: '14px' }}>
              <VisibilityIcon style={{ fontSize: '1rem' }} />
              {price}
            </span>
            <span style={{ fontSize: '14px' }}>.&#8377; 837{description}</span>
          </Typography>
        </CardContent>
      </Card>

      <Status>
        <strong>{name}</strong>
      </Status>
      <Status2>
        <span> {day}</span>
        <p style={{ color: 'gray', fontWeight: 'lighter' }}>Lunch</p>
      </Status2>
      <Heart style={{ right: '25px' }}>
        <FavoriteBorderIcon style={{ color: 'gray' }} />
      </Heart>
    </Div>
  </>
);

export default FoodCard;
