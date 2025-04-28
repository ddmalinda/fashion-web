import { Grid2, IconButton, Typography } from '@mui/material'
import EastIcon from '@mui/icons-material/East';
import WestIcon from '@mui/icons-material/West';

const qtyButton = [
  { type: 'remove', icon: <WestIcon /> },
  { type: 'add', icon: <EastIcon /> }
]
export default function SelecteQtyButton({ qty, handleQtyChange }) {

  const hadleOnClick = (type) => {
    if (type === 'add' && qty < 10) {
      handleQtyChange(qty + 1);
    } else if (type === 'remove' && qty > 1) {
      handleQtyChange(qty - 1);
    }
  }

  return (
    <Grid2 container
      justifyContent={'flex-start'}
      alignItems={'center'}
      spacing={1}
      x={{
        ustifyContent: "center",
        alignItems: "center",
      }}
      direction="row"
    >
      <Grid2>
        <Typography sx={{ fontFamily: 'Ubuntu', fontSize: '36px', fontWeight: '700' }}>
          {qty.toString().padStart(2, 0)}
        </Typography>
      </Grid2>
      {qtyButton.map((val, key) => {
        return (
          <Grid2 key={key}>
            <IconButton
              onClick={() => hadleOnClick(val.type)}
              sx={{ border: '1px solid gray', borderRadius: '20px', '&:hover': { bgcolor: 'black', color: 'white' }, }}>
              {val.icon}
            </IconButton>
          </Grid2>
        )
      })}

    </Grid2>
  )
}
