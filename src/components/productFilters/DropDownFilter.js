import * as React from 'react';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Typography } from '@mui/material';

export default function DropDownFilter({value,options,hadleFilter,title}) {


  const handleChange = (event) => {
    hadleFilter(event.target.value)
  };

  return (
    <Box  >
      <Typography sx={{
        fontFamily: "Ubuntu",
        fontSize: "20px",
        fontWeight:"bold",
        color: "#323232",
        textTransform:'uppercase'
      }}>
            {title}
      </Typography>

      <FormControl fullWidth size={'small'} sx={{
        width:'100%',
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: '#FF7D1D', // Default border color
      },
      '&:hover fieldset': {
        borderColor: '#000000', // Hover border color
      },
      '&.Mui-focused fieldset': {
        borderColor: '#FF7D1D', // Focused (active/blur) border color
      },
    },
  }}>
          
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={value}
          onChange={handleChange}
         sx={{
    color: '#FFFFFF', // Select text color
    backgroundColor: '#FF7D1D', // Select background
    '& .MuiSelect-icon': {
      color: '#FFFFFF', // Dropdown arrow color
    }
  }}
        >
            <MenuItem value={'none'} sx={{
               color: '#FF7D1D'
            }}><em>Default</em></MenuItem>
            {options.map((val,key)=>{
                return(
                    <MenuItem key={key}
                     value={val.type}
                      sx={{
        color: '#FF7D1D', // Change menu item text color
      }}>{val.name}</MenuItem>
                )
            })}
        </Select>
      </FormControl>
    </Box>
  );
}
