import Typography from '@mui/material/Typography'
import React, { useContext, useEffect } from 'react'
import { UserContext } from '../../context/UserContext'
import { useNavigate } from 'react-router-dom'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'

const Profile = () => {

  const { getUserInfo, userEmail, userName } = useContext(UserContext)

  const navigate = useNavigate()

  useEffect(() => {
    getUserInfo()
  }, [])

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', my: 2, p: 3 }}>
      <Grid container spacing={2} sx={{ px: { xs: 2, md: 15 } }} >
        <Grid size={12}>
          <Typography variant='h4' sx={{ m: 2, color: 'primary' }}>Perfil de Usuario</Typography>
        </Grid>
        <Grid size={12} sx={{ m: 1 }}>
          <Typography gutterBottom>Nombre: {userName}</Typography>
          <Typography>Mail: {userEmail}</Typography>
        </Grid>
        <Grid size={12}>
          <Box sx={{ m: 1, width: '35ch', display: 'flex', flexDirection: 'column', alignItems: 'center' }} >
            <Button variant="contained" onClick={() => navigate("/logout")} sx={{ backgroundColor: '#D4A574' }}>
              Cerrar sesión
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Profile