import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import React, { useContext, useEffect } from 'react'
import CartCard from '../../components/CartCard/CartCard'
// import cookie_chocolate_amargo_chip_mantequila_mani from '../../assets/images/productos/cookies/chocolate_amargo_chip_mantequila_mani_md.avif'
// import cookie_doble_chip_chocolate from '../../assets/images/productos/cookies/doble_chip_chocolate_md.avif'
// import cookie_vegana_chip_chocolate_nueces from '../../assets/images/productos/cookies/vegana_chip_chocolate_nueces_md.avif'
import Button from '@mui/material/Button'
import { CartContext } from '../../context/CartContext'
import { UserContext } from '../../context/UserContext'
import Grid from '@mui/material/Grid'
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom'


const Cart = () => {

  const { total, setTotal, cart, setCart,
    cartBackend, setCartBackend,
    cartDetailsBackend, setCartDetailsBackend,
    lastCartBackend, setLastCartBackend,
    lastOrderBackend, setLastOrderBackend } = useContext(CartContext)

  const { tokenJwt, getUserInfo, userId,
    userOrderBackend, setUserOrderBackend,
    userOrderDetailsBackend, setUserOrderDetailsBackend } = useContext(UserContext)

  useEffect(() => {
    getUserInfo()
  }, [])

  const navigate = useNavigate()

  const sendCart = async () => {

    // const today = new Date()
    // const todayISO = today.toISOString().split('T')[0]
    // setCartBackend({
    //   id_usuario: userId,
    //   fecha_creacion: null
    // })
    // setUserOrderBackend({
    //   id_usuario: userId,
    //   total_pagar: total,
    //   status: 'Pendiente',
    //   fecha_creacion: null
    // })

    //POST cart with user id (no details)
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/carrito`, {
        // const response = await fetch(`http://localhost:3000/api/carrito`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${tokenJwt}`
        },
        body: JSON.stringify({ id_usuario: userId, fecha_creacion: new Date() })
      })

      if (!response.ok) {
        console.log("error al enviar carrito")
      }

      if (response.ok) {
        // Swal.fire({
        //   title: "Carrito Enviado",
        //   text: "Su carrito ha sido registrado correctamente.",
        //   icon: "success"
        // })


      }

    } catch (error) {
      console.log("error: ", error)
    }


    //POST product order with user id (no details)
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/ordenes`, {
        // const response = await fetch(`http://localhost:3000/api/ordenes`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${tokenJwt}`
        },
        body: JSON.stringify({ id_usuario: userId, total_pagar: total, status: 'Pendiente', fecha_creacion: new Date() })
      })

      if (!response.ok) {
        console.log("error al enviar pedido")
      }

      if (response.ok) {
        // Swal.fire({
        //   title: "Pedido Enviado!",
        //   text: "Su pedido ha sido registrado correctamente.",
        //   icon: "success"
        // })
        // setCart([])
        // setTotal(0)
        // navigate("/pago")
      }

    } catch (error) {
      console.log("error: ", error)
    }

    //GET latest cart of user
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/carrito/usuario/${userId}`, {
        // const response = await fetch(`http://localhost:3000/api/carrito/usuario/${userId}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${tokenJwt}`
        },
      })

      if (!response.ok) {
        console.log("error al recibir carrito")
        return
      }

      const data = await response.json()
      // console.log('data carritos')
      // console.log(data)
      setLastCartBackend(data)

    } catch (error) {
      console.log("error: ", error)
    }


    //GET orders of user
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/ordenes/usuario/${userId}`, {
        // const response = await fetch(`http://localhost:3000/api/ordenes/usuario/${userId}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${tokenJwt}`
        },
      })

      if (!response.ok) {
        console.log("error al recibir carrito")
        return
      }

      const data = await response.json()
      const latestOrder = data.reduce((max, order) => order.id > max.id ? order : max, data[0])
      setLastOrderBackend(latestOrder)
      if (response.ok) {
        // Swal.fire({
        //   title: "Pedido Enviado!",
        //   text: "Su pedido ha sido registrado correctamente.",
        //   icon: "success"
        // })
        // setCart([])
        // setTotal(0)
        navigate("/pago")
      }

    } catch (error) {
      console.log("error: ", error)
    }






  }




  return (
    <>
      <Box sx={{ display: 'flex', flexDirection: 'column', my: 2, p: 3 }} >
        <Grid container spacing={2} sx={{ px: { xs: 2, md: 15 } }} >
          <Grid size={12}>
            <Typography variant='h5'>Carrito</Typography>
          </Grid>

          {
            cart.map(cookie => (
              <Grid size={12} key={cookie.id} >
                <CartCard img={cookie.img} alt={''} title={cookie.name} price={cookie.price} count={cookie.count} id={cookie.id} />
              </Grid>
            ))
          }
          {
            total === 0 ? <Typography variant='h6' align='center'>Tu carrito está vacío.</Typography> : null
          }
          <Grid size={12} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 3 }}>
            <Typography variant='h5'>Total: ${total.toLocaleString("es-ES", { useGrouping: true })}</Typography>
            <Button disabled={!tokenJwt} onClick={sendCart} variant='contained' sx={{ px: 6, backgroundColor: '#A84A2E' }}>Confirmar Pedido</Button>
          </Grid>
        </Grid>
      </Box>
    </>
  )
}

export default Cart