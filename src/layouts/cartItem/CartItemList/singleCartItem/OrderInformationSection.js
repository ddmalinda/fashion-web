import { TableBody, TableCell, TableRow, Typography } from '@mui/material'
import React from 'react'
import { Table } from 'react-bootstrap'
import { priceValueFormat } from '../../../../util/Functions'
import SingaleSizeSelecterBox from './SingaleSizeSelecterBox'

export default function OrderInformationSection({ qty, price, size='M' }) {
    return (
        <Table sx={{ ml: 0, minWidth: '100px',}}>
            <TableBody  sx={{
                td: { py: '2px', px: { xs: '10px', sm: '20px'} }, '&:last-child td, &:last-child th': { border: 0 },
            }}>
                <TableRow >

                    <TableCell sx={{ width: '1%', borderRight: '2px solid black !important', }}>
                        <SingaleSizeSelecterBox size={size} />
                    </TableCell>
                    <TableCell sx={{ width: '1%', borderRight: '2px solid black !important' }}>
                        <Typography sx={{ fontFamily: 'ubuntu', fontSize: { xs: '20px', md: '32px' }, color: '#000000',fontWeight:'bold' }}>
                            {qty.toString().padStart(2, 0)}
                        </Typography>
                    </TableCell>
                    <TableCell >
                        <Typography sx={{ fontFamily: 'ubuntu', fontSize: { xs: '20px', md: '32px' }, color: '#FF7D1E', }}>
                            {priceValueFormat(price*qty)}
                        </Typography>
                    </TableCell>
                </TableRow>
            </TableBody>
        </Table>

    )
}
