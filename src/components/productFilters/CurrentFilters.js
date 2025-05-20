import React, { useEffect, useState } from 'react'
import CleanFilter from './CleanFilter'
import { Box } from '@mui/material';

export default function CurrentFilter({title,hadleCleanFilter,filter}){
      const [activeFilter, setAcvitveFilter] = useState([])
      useEffect(()=>{
        const temp=[]
        
        filter.forEach(element => {
           if(element.isActive){
                temp.push(element.name)
           }
        });
        setAcvitveFilter(temp) 
      },[filter])
      console.log(activeFilter)
    return(
        <div>
            <CleanFilter title={title} hadleCleanFilter={hadleCleanFilter}/>
            {activeFilter.length>0?(
                 activeFilter.map((val,key)=>{
                return(
            
            <Box key={key} sx={{
                display:'inline-block',
                border:'1px solid #000000',
                borderRadius:'10px',
                px:'10px',
                mx:'5px'}}>
                {val}
            </Box>
            
                )
            })
            ):(
            <Box sx={{
                color:'gray',
                
            }}>
                no active filters
            </Box>)}
            <hr/> 
        </div>
    )
}