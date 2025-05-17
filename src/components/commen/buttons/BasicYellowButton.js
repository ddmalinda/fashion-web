import { Button } from '@mui/material'

export default function BasicYellowButton({text}) {
  return (
    <Button sx={{
      fontFamily:'Ubuntu',
      textTransform:'capitalize',
      color:'black',
      bgcolor:'#FBD103',
      width:'250px',
      borderRadius:'10px',
      fontSize:'35px',
      fontWeight:'500',
      p:'0px 10px 0px 10px',
      '&:hover':{
        bgcolor:'black',
        color:'white',
      
      }
    }}>{text}  </Button>
 
  )
}
