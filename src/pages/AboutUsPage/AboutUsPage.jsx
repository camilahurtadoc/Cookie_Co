import React, { useContext, useEffect } from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import AboutUs from '../../components/AboutUs/AboutUs'

const AboutUsPage = () => {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', my: 2, p: 3 }}>
            <Grid container spacing={2} sx={{ px: { xs: 2, md: 15 } }} >
                <Grid size={12}>
                    <Typography variant='h4' sx={{ m: 2, color: 'primary' }}>¿Quienes Somos?</Typography>
                </Grid>
                <Grid size={12} sx={{borderRadius:'16px', overflow:'hidden'}}>
                    <AboutUs />
                </Grid>
            </Grid>
        </Box>
    )
}

export default AboutUsPage