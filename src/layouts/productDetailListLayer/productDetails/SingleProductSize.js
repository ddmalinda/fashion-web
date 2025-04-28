import { Box, Typography } from '@mui/material'
import React from 'react'

export default function SingleProductSize({ val, isSelected, handleSelected,isError}) {
  return (
    <Box
      onClick={() => handleSelected(val)}
      sx={{
        border: '1px solid',
        borderColor:isError ? 'red':'black',
        borderRadius: '5px',
        width: '40px',
        height: '40px',
        justifyItems: 'center',
        alignContent: 'center',
        bgcolor: isSelected ? 'black' : '',
        cursor: 'pointer'
      }}>
      <Typography sx={{
        fontFamily: 'Ubuntu',
        fontWeight: 500,
        textTransform: 'uppercase',
        color: isSelected ? '#FFFFFF' : isError ? 'red':'black'
      }}>
        {val}
      </Typography>

    </Box>
  )
}
