import React from 'react'
import CoomigSoonButton from '../../components/commen/buttons/CoomigSoonButton'
import { Grid2 } from '@mui/material';

const images = [
    {
      url: 'https://i.pinimg.com/1200x/fb/41/52/fb4152fec6bf3905b827ff6061ca4226.jpg',
      title: 'Coomig Soon',
      width: '40%',
    },
    {
        url: '	https://i.pinimg.com/736x/63/70/96/6370969620b1d4c196eae4e9a00c3257.jpg',
        title: 'Coomig Soon',
        width: '40%',
      }
  ];
export default function CoomigSoonSection() {
  return (
    <Grid2 sx={{m:'20px 0px 40px 0px '}}>
    <CoomigSoonButton images={images}/>
    </Grid2>
  )
}
