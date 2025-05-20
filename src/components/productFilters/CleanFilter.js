import { Button, Grid2, Typography } from '@mui/material'
import React from 'react'

export default function CleanFilter({ hadleCleanFilter,title }) {
    return (
        <Grid2 sx={{display:'flex',justifyContent:"space-between"}}>
            <Typography sx={{
                fontFamily: "Ubuntu",
                fontSize: "20px",
                fontWeight: "bold",
                color: "#323232",
                textTransform: 'uppercase'
            }}>
                {title}
            </Typography>
            <Button onClick={() => hadleCleanFilter()}>
                Clean
            </Button>
        </Grid2>
    )
}

