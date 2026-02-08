import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { AxiosCookieIdContext } from '../../context/AxiosCookieIdContext'
import { CartContext } from '../../context/CartContext'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import Button from '@mui/material/Button'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import TableContainer from '@mui/material/TableContainer'
import Table from '@mui/material/Table'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import TableCell from '@mui/material/TableCell'
import TableBody from '@mui/material/TableBody'
import Paper from '@mui/material/Paper'
import { UserContext } from '../../context/UserContext'

const Orders = () => {

  const { orderId } = useParams()
  // console.log('oderIdk:' + orderId)

  // const { cookie, getCookie } = useContext(AxiosCookieIdContext)

  const { getUserSpecificOrder, specificOrder } = useContext(UserContext)
  let count = 0;

  // const { cart, handleclick2,
  //   minusCookie2, plusCookie2 } = useContext(CartContext)

  // const [cookieInCart, setCookieInCart] = useState(null)


  useEffect(() => {
    getUserSpecificOrder(orderId)
    //  console.log('oderId en useEffect:' + orderId)
    // getCookie(cookieId)
  }, [])

  useEffect(() => {
    // const index = cart.findIndex(ThisCookie => ThisCookie.id === cookie.id)
    // index === -1 ? (setCookieInCart(0)) : (setCookieInCart(cart[index].count))
  })

  return (
    <Box sx={{ display: 'flex', py: 5, width: '100%', maxWidth: '100vw' }}>
      <Grid container spacing={2} sx={{ px: { xs: 2, md: 15 } }} >
        <Grid size={12}>
          <Typography variant='h4' sx={{ m: 2, color: 'primary' }}>Pedido #{orderId}</Typography>
        </Grid>
        <Grid size={12}>
          <Grid size={12}>
          <Typography variant='h5' sx={{ ml: 2, color: 'primary' }} gutterBottom>Fecha: {specificOrder[0].fecha_creacion ? specificOrder[0].fecha_creacion.substring(0, 10) : ''}</Typography>
        </Grid>
        <Grid size={12}></Grid>
          <TableContainer component={Paper} >
            <Table aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell sx={{ fontWeight: 600 }}>Item</TableCell>
                  <TableCell align="left" sx={{ fontWeight: 600 }}>ID Producto</TableCell>
                  <TableCell align="left" sx={{ fontWeight: 600 }}>Cantidad</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {specificOrder ? (specificOrder.map(order => (
                  <TableRow key={order.id}>
                    <TableCell component="th" scope="row" >{++count}</TableCell>
                    <TableCell align="left">{order.id_producto}</TableCell>
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