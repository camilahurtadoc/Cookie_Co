import Typography from '@mui/material/Typography'
import React, { useContext, useEffect } from 'react'
import { UserContext } from '../../context/UserContext'
import { useNavigate } from 'react-router-dom'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'

const Profile = () => {

  const { getUserInfo, userEmail } = useContext(UserContext)

  const navigate = useNavigate()

  useEffect(() => {
    getUserInfo()
  }, [])

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', my: 2, mx: 10, p: 3 }}>
      <Typography variant='h4'>Perfil de Usuario</Typography>
      <Box sx={{ m: 1 }}>
        <Typography>Mail: {userEmail}</Typography>
      </Box>
      <Box sx={{ m: 1, width: '35ch', display: 'flex', flexDirection: 'column', alignItems: 'center' }} >
        <Button variant="contained" onClick={() => navigate("/logout")} sx={{ backgroundColor: '#D4A574' }}>
          Cerrar sesión
        </Button>
      </Box>

    </Box>
  )
}

export default Profile