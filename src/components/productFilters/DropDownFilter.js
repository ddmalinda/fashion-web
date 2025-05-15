import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function DropDownFilter({options,hadleFilter}) {
  const [filter, setFilter] = React.useState('none');

  const handleChange = (event) => {
    hadleFilter(event.target.value)
    setFilter(event.target.value);
  };

  return (
    <Box  >
      <FormControl fullWidth size={'small'} sx={{
        width:'250px',
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
          value={filter}
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
