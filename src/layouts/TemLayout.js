import React from 'react'
import CommoneWrapLayout from '../components/commen/CommoneWrapLayout'
import { Typography } from '@mui/material'
import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

const colorChangeAnimtion = keyframes`
  0%   { color: #ff6b6b; }  
  25%  { color: #feca57; }   
  50%  { color: #1dd1a1; }   
  75%  { color: #54a0ff; }   
  100% { color: #ff6b6b; }  
`;

const AnimetionTypogragphy = styled(Typography)`
 font-family:Ubuntu;
 font-size:50px;
 position :absolute;
 top:40%;
 left:50%;
 transform:translate(-50%,-50%);
 font-Weight:600;
 text-align:center;
animation: ${colorChangeAnimtion} 5s linear infinite ;

 `;
export default function TemLayout() {
    return (
        <CommoneWrapLayout>
            <AnimetionTypogragphy>
                page will be created
            </AnimetionTypogragphy>
        </CommoneWrapLayout>
    )
}
