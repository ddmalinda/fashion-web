import React, { useEffect, useState } from 'react'
import CleanFilter from './CleanFilter'
import { Box } from '@mui/material';
import { Animated } from 'react-animated-css';

export default function CurrentFilter({ title, hadleCleanFilter, filter }) {
    const [activeFilter, setAcvitveFilter] = useState([])
    useEffect(() => {
        const temp = []

        filter.forEach(element => {
            if (element.isActive) {
                temp.push(element.name)
            }
        });
        setAcvitveFilter(temp)
    }, [filter])

    return (
        <div>
            <CleanFilter title={title} hadleCleanFilter={hadleCleanFilter} />
            {activeFilter.length > 0 ? (
                activeFilter.map((val, key) => {
                    return (

                        <Animated key={key}  style={{ display: 'inline-block' }} animationIn="flipInX" animationOut="flipOutX" >
                            <Box  sx={{
                                border: '1px solid #000000',
                                borderRadius: '10px',
                                px: '10px',
                                mx: '5px'
                            }}>
                                {val}
                            </Box>
                        </Animated>

                    )
                })
            ) : (
                <Animated animationIn="flipInX" animationOut="bounceOut" isVisible={true}>
                    <Box sx={{
                        color: 'gray',
                        
                    }}>
                        no active filters
                    </Box>
                </Animated>)}
            <hr />
        </div>
    )
}