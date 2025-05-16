
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

export default function MultiSelecterFilter({ filterOptions, handleFilter }) {
    return (
        <FormGroup>
            {filterOptions.map((val, key) => {
                return <FormControlLabel key={key} sx={{
                    textTransform: 'uppercase',
                    color: '#FF7D1D'
                }}
                    control={<Checkbox sx={{
                        color: '#FF7D1D', // Unchecked color
                        '&.Mui-checked': {
                            color: '#FF7D1D', // Checked color
                        },
                    }}
                        checked={val.value}
                        onClick={(e) => handleFilter(val.label, e.target.checked)} />}
                    label={val.label} />

            })}

        </FormGroup>
    )
}
