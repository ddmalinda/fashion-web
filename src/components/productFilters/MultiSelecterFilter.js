
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Grid2, Typography } from '@mui/material';

export default function MultiSelecterFilter({ title, filterOptions, handleFilter }) {
    return (
        <Grid2 sx={{m:'10px -20px 40px 0px'}}>
            <Typography sx={{
        fontFamily: "Ubuntu",
        fontSize: "20px",
        fontWeight:"bold",
        color: "#323232",
        textTransform:'uppercase'

      }}>
            {title}
            </Typography>
            <FormGroup>

                {filterOptions.map((val, key) => {
                    return <FormControlLabel key={key} sx={{
                        color: '#000000'
                    }}
                        control={<Checkbox sx={{
                            color: '#000000', // Unchecked color
                            '&.Mui-checked': {
                                color: '#FF7D1D', // Checked color
                            },
                        }}
                            checked={val.value}
                        
                            onClick={(e) => handleFilter(val.label, e.target.checked)} />}
                        label={val.name} />

                })}
            </FormGroup>
        </Grid2>
    )
}
