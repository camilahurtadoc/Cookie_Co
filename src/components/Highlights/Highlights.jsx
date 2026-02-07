import React, { useContext, useEffect } from 'react'
import HighlightsCard from '../HighlightsCard/HighlightsCard'
// import imageCookie1 from '../../../public/images/tienda/2150687989.jpg'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { AxiosCookiesContext } from '../../context/AxiosCookiesContext'
import Grid from '@mui/material/Grid'


const Highlights = () => {

  // const imageCookie1 = '/images/tienda/2150687989.jpg'

  const { listaCookies, getCookiesList } = useContext(AxiosCookiesContext)

  useEffect(() => {
    getCookiesList()
  }, [])

  return (
    <>
      <Box sx={{ display: 'flex', flexDirection: 'column', py: 5, backgroundColor: '#5C4033' }} >
        <Grid container spacing={3} alignItems="center" justifyContent="center" sx={{ px: { xs: 2, md: 15 } }}>
          <Grid size={12}>
            <Typography variant='h4' sx={{ m: 2, color: '#F5E8C7' }}>¡Los más vendidos!</Typography>
          </Grid>
          {
            listaCookies.slice(1, 4).map(item => (
              <Grid key={item.id} size={{ xs: 12, md: 4 }} sx={{ display: { xs: 'flex', md: 'inherit' }, alignItems: 'center', justifyContent: 'center' }} >
                <HighlightsCard alt={'cookie'} img={item.imagen_url} title={item.name} price={item.precio} desc={item.description} id={item.id} />
              </Grid>
            ))
          }
        </Grid>
      </Box>
    </>
  )
}

export default Highlights