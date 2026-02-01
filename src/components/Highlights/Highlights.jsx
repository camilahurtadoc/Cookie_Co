import React, { useContext, useEffect } from 'react'
import HighlightsCard from '../HighlightsCard/HighlightsCard'
// import imageCookie1 from '../../../public/images/tienda/2150687989.jpg'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { AxiosCookiesContext } from '../../context/AxiosCookiesContext'


const Highlights = () => {

  // const imageCookie1 = '/images/tienda/2150687989.jpg'

  const { listaCookies, getCookiesList } = useContext(AxiosCookiesContext)

  useEffect(() => {
    getCookiesList()
  }, [])

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', px: 15, py: 5, backgroundColor: '#5C4033' }}>
      <Typography variant='h4' sx={{ m: 2, color: '#F5E8C7' }}>¡Los más vendidos!</Typography>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', gap: 2 }}>
        {
          listaCookies.slice(0, 3).map(item => (
            <HighlightsCard key={item.id} alt={'cookie'} img={item.imagen_url} title={item.name} price={item.precio} desc={item.description} />
          ))
        }
      </Box>
    </Box>
  )
}

export default Highlights