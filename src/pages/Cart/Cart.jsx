import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import React, { useContext } from 'react'
import CartCard from '../../components/CartCard/CartCard'
// import cookie_chocolate_amargo_chip_mantequila_mani from '../../assets/images/productos/cookies/chocolate_amargo_chip_mantequila_mani_md.avif'
// import cookie_doble_chip_chocolate from '../../assets/images/productos/cookies/doble_chip_chocolate_md.avif'
// import cookie_vegana_chip_chocolate_nueces from '../../assets/images/productos/cookies/vegana_chip_chocolate_nueces_md.avif'
import Button from '@mui/material/Button'
import { CartContext } from '../../context/CartContext'
import { UserContext } from '../../context/UserContext'
import Grid from '@mui/material/Grid'


const Cart = () => {

  const { total, setTotal, cart, setCart,
    minusCookie2, plusCookie2 } = useContext(CartContext)

  const { tokenJwt } = useContext(UserContext)

  const sendCart = async () => {
    console.log('cart:' + cart)

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/carrito`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${tokenJwt}`
        },
        body: JSON.stringify({ cart })
      })

      if (!response.ok) {
        console.log("error al enviar carrito")
      }

      if (response.ok) {
        Swal.fire({
          title: "Pedido Enviado",
          text: "Su pedido ha sido registrado correctamente.",
          icon: "success"
        })
        setCart([])
        setTotal(0)
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
            <Button disabled={!tokenJwt} onClick={sendCart} variant='contained' sx={{ px: 6, backgroundColor: '#A84A2E' }}>Pagar</Button>
          </Grid>
        </Grid>
      </Box>
    </>
  )
}

export default Cart