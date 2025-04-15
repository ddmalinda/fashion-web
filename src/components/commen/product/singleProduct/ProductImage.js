import { Box } from '@mui/material'
import React, { useEffect, useState } from 'react'

export default function ProductImage({ images }) {

  const [imagSrc, setImageSrc] = useState(images[0]);

  useEffect(() => { setImageSrc(images[0]); }, [images[0]]);
  return (
    <Box component={'img'}
      src={imagSrc}
      onMouseOver={() => setImageSrc(images[1])}
      onMouseOut={() => setImageSrc(images[0])}
      sx={{
        width: "100%",
        height: '350px',
        objectFit: 'cover',
        borderRadius: '10px'
      }}>

    </Box>
  )
}
