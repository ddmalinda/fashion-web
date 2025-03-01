import { Input } from '@mui/material';
import React from 'react';
import SendIcon from '@mui/icons-material/Send';

export default function NewsLetterSubcriptionInput() {
  return (
    <Input sx={{border:"0.5px solid gray",borderRadius:"30px",pl:"20px"}} 
            disableUnderline
            placeholder='Enter your email'
            endAdornment={<SendIcon sx={{p:'4px',bgcolor:"yellow", borderRadius:'50%',fontSize: 30, transform:'rotate(-45deg)'}}/>}
    />
  )
}
