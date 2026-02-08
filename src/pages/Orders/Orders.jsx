import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import CardMedia from '@mui/material/CardMedia'
import Card from '@mui/material/Card'
import TableContainer from '@mui/material/TableContainer'
import Table from '@mui/material/Table'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import TableCell from '@mui/material/TableCell'
import TableBody from '@mui/material/TableBody'
import Paper from '@mui/material/Paper'
import { UserContext } from '../../context/UserContext'
import { AxiosCookiesContext } from '../../context/AxiosCookiesContext'

const Orders = () => {

  const { orderId } = useParams()

  const { getUserSpecificOrder, specificOrder } = useContext(UserContext)
  const { listaCookies, getCookiesList } = useContext(AxiosCookiesContext)
  let count = 0;

  useEffect(() => {
    getUserSpecificOrder(orderId)
    getCookiesList()
  }, [])

  return (
    <Box sx={{ display: 'flex', py: 5, width: '100%', maxWidth: '100vw' }}>
      <Grid container spacing={2} sx={{ px: { xs: 2, md: 15 } }} >
        <Grid size={12}>
          <Typography variant='h4' sx={{ m: 2, color: 'primary' }}>Pedido #{orderId}</Typography>
        </Grid>
        <Grid size={12}>
          <Grid size={12}>
            <Typography variant='h5' sx={{ ml: 2, color: 'primary' }} gutterBottom>Fecha: {specificOrder ? specificOrder[0].fecha_creacion.substring(0, 10) : ''}</Typography>
          </Grid>
          <Grid size={12}></Grid>
          <TableContainer component={Paper} >
            <Table aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell sx={{ fontWeight: 600 }}>Item</TableCell>
                  <TableCell align="left" sx={{ fontWeight: 600 }}>Imagen</TableCell>
                  <TableCell align="left" sx={{ fontWeight: 600 }}>Producto</TableCell>
                  <TableCell align="left" sx={{ fontWeight: 600 }}>Cantidad</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {specificOrder ? (specificOrder.map(order => (
                  <TableRow key={order.id}>
                    <TableCell component="th" scope="row" >{++count}</TableCell>
                    <TableCell align="left">
                      <Card sx={{ display: 'flex' }}>
                        <Box sx={{ display: 'flex', width: '100%', pb: 0 }}>
                          <CardMedia
                            component="img"
                            height="160"
                            image={listaCookies[order.id_producto].imagen_url}
                            alt={listaCookies[order.id_producto].name}
                            sx={{minWidth:200, maxWidth:400}}
                          />
                        </Box>
                      </Card>
                    </TableCell>
                    <TableCell align="left">{listaCookies[order.id_producto].name}</TableCell>
                    <TableCell align="left">{order.cantidad}</TableCell>
                  </TableRow>
                ))) : (<TableRow></TableRow>)}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>



      </Grid>
    </Box>
  )
}

export default Orders