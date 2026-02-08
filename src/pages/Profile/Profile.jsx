import Typography from '@mui/material/Typography'
import React, { useContext, useEffect } from 'react'
import { UserContext } from '../../context/UserContext'
import { useNavigate } from 'react-router-dom'
import { Link as RouterLink } from 'react-router-dom';
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const Profile = () => {



  const { getUserInfo, userId, userEmail, userName,
    userAddress, userCity, userProvince,
    getUserOrders, allOrders
  } = useContext(UserContext)

  const navigate = useNavigate()

  useEffect(() => {
    getUserInfo()
    // getUserOrders(userId)
    // console.log(allOrders)
  }, [])

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', my: 2, p: 3 }}>
      <Grid container spacing={2} sx={{ px: { xs: 2, md: 15 } }} >
        <Grid size={12}>
          <Typography variant='h4' sx={{ m: 2, color: 'primary' }}>Perfil de Usuario</Typography>
        </Grid>
        <Grid size={12}>
          <Box sx={{ m: 1, width: '35ch', display: 'flex', flexDirection: 'column', alignItems: 'center' }} >
            <Button variant="contained" onClick={() => navigate("/logout")} sx={{ backgroundColor: '#A84A2E' }}>
              Cerrar sesión
            </Button>
          </Box>
        </Grid>
        <Grid size={12}>
          <Typography variant='h6' sx={{ ml: 2, color: 'primary' }}>Mis datos</Typography>
        </Grid>
        <Grid size={{ xs: 12, md: 6 }} sx={{ m: 1 }}>
          <TableContainer component={Paper} >
            <Table aria-label="simple table">
              <TableBody>
                <TableRow >
                  <TableCell component="th" scope="row" sx={{ fontWeight: 600 }}>
                    Nombre
                  </TableCell>
                  <TableCell align="left">{userName}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="th" scope="row" sx={{ fontWeight: 600 }}>
                    Mail
                  </TableCell>
                  <TableCell align="left">{userEmail}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="th" scope="row" sx={{ fontWeight: 600 }}>
                    Dirección
                  </TableCell>
                  <TableCell align="left">{userAddress}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="th" scope="row" sx={{ fontWeight: 600 }}>
                    Comuna
                  </TableCell>
                  <TableCell align="left">{userProvince}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="th" scope="row" sx={{ fontWeight: 600 }}>
                    Ciudad
                  </TableCell>
                  <TableCell align="left">{userCity}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
        <Grid size={12}>
          <Typography variant='h6' sx={{ ml: 2, color: 'primary' }}>Mis compras</Typography>
        </Grid>
        <Grid size={12}>
          {allOrders == null ? (
            <Box sx={{ m: 1, width: '35ch', display: 'flex', flexDirection: 'column', alignItems: 'center' }} >
              <Button variant="contained" onClick={() => getUserOrders(userId)} sx={{ backgroundColor: '#A84A2E' }}>
                Ver mis compras
              </Button>
            </Box>
          ) : (

            <TableContainer component={Paper} >
              <Table aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell sx={{ fontWeight: 600 }}>Pedido</TableCell>
                    <TableCell align="left" sx={{ fontWeight: 600 }}>Fecha</TableCell>
                    <TableCell align="left" sx={{ fontWeight: 600 }}>Estado de pago</TableCell>
                    <TableCell align="left" sx={{ fontWeight: 600 }}>Total</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {allOrders ? (allOrders.map(order => (
                    <TableRow key={order.id}>
                      <TableCell component="th" scope="row" sx={{}}>
                        <Button component={RouterLink} to={`/perfil/${order.id}`}
                          sx={{
                            display: 'block', fontWeight: 600, color: '#A84A2E',
                            '&:hover': {
                              textDecoration: 'underline',
                              transform: 'scale(1.05)',
                            },
                            transition: 'background-color 0.3s ease, transform 0.2s ease, box-shadow 0.3s ease',
                          }} >
                          {order.id}
                        </Button>
                      </TableCell>
                      <TableCell align="left">{order.fecha_creacion ? order.fecha_creacion.substring(0, 10) : ''}</TableCell>
                      <TableCell align="left">{order.status}</TableCell>
                      <TableCell align="left">{order.total_pagar ? `$${order.total_pagar.toLocaleString("es-ES", { useGrouping: true })}` : ''}</TableCell>
                    </TableRow>
                  ))) : (<TableRow></TableRow>)}

                </TableBody>
              </Table>
            </TableContainer>
          )

          }
        </Grid>
        <Grid size={12} sx={{ m: 1 }}>
        </Grid>

      </Grid>
    </Box>
  )
}

export default Profile