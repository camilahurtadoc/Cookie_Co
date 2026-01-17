import React from 'react'
import HighlightsCard from '../HighlightsCard/HighlightsCard'
import imageCookie1 from '../../assets/images/tienda/2150687989.jpg'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'


const Highlights = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', my: 2, mx: 10, p:3, backgroundColor: '#5C4033' }}>
      <Typography variant='h4' sx={{m:2, color:'#F5E8C7'}}>¡Los más vendidos!</Typography>
      <Box sx={{display: 'flex', gap:2 }}>
        <HighlightsCard alt={'cookie'} img={imageCookie1} title={'Cookie Choc'} price={2990} desc={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ac purus nec urna varius faucibus sit amet sed. '} />
        <HighlightsCard alt={'cookie'} img={imageCookie1} title={'Cookie Manjar'} price={3120} desc={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ac purus nec urna varius faucibus sit amet sed. '} />
        <HighlightsCard alt={'cookie'} img={imageCookie1} title={'Cookie Limón'} price={3500} desc={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ac purus nec urna varius faucibus sit amet sed. '} />
      </Box>
    </Box>
  )
}

export default Highlights