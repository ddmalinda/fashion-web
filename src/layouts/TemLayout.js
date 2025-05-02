import React from 'react'
import CommoneWrapLayout from '../components/commen/CommoneWrapLayout'
import { Typography } from '@mui/material'
import styled from '@emotion/styled';
//import {keyframs} from '@emotion/react';

 const AnimetionTypogragphy= styled(Typography)`
 font-family:Ubuntu;
 font-size:50px;
 position :absolute;
 top:40%;
 left:59%;
 transform:translate(-50%,-50%);
 font-Weight:600;
 text-align:center;

 `
export default function TemLayout() {
  return (
   <CommoneWrapLayout>
   <AnimetionTypogragphy>
    page will be created 
   </AnimetionTypogragphy>
   </CommoneWrapLayout>
  )
}
