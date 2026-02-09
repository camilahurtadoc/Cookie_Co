import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import React, { useContext, useEffect } from 'react'
import CartCard from '../../components/CartCard/CartCard'
// import cookie_chocolate_amargo_chip_mantequila_mani from '../../assets/images/productos/cookies/chocolate_amargo_chip_mantequila_mani_md.avif'
// import cookie_doble_chip_chocolate from '../../assets/images/productos/cookies/doble_chip_chocolate_md.avif'
// import cookie_vegana_chip_chocolate_nueces from '../../assets/images/productos/cookies/vegana_chip_chocolate_nueces_md.avif'
import Button from '@mui/material/Button'
import TableContainer from '@mui/material/TableContainer'
import Table from '@mui/material/Table'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import TableCell from '@mui/material/TableCell'
import TableBody from '@mui/material/TableBody'
import Paper from '@mui/material/Paper'
import { CartContext } from '../../context/CartContext'
import { UserContext } from '../../context/UserContext'
import Grid from '@mui/material/Grid'
import Swal from 'sweetalert2'
import { AxiosCookiesContext } from '../../context/AxiosCookiesContext'
import CardMedia from '@mui/material/CardMedia'
import Card from '@mui/material/Card'
import { useNavigate } from 'react-router-dom'


const CartPayment = () => {

    const { total, setTotal, cart, setCart,
        cartBackend, setCartBackend,
        cartDetailsBackend, setCartDetailsBackend,
        lastCartBackend, setLastCartBackend,
        lastOrderBackend, setLastOrderBackend } = useContext(CartContext)

    const { tokenJwt, getUserInfo, userId,
        getUserSpecificOrder, specificOrder,
        userOrderBackend, setUserOrderBackend,
        userOrderDetailsBackend, setUserOrderDetailsBackend } = useContext(UserContext)

    const { listaCookies, getCookiesList } = useContext(AxiosCookiesContext)

    const navigate = useNavigate()



    useEffect(() => {
        // getUserSpecificOrder(lastCartBackend.id)
        getCookiesList()
        // getUserInfo()
    }, [])

    //POST cart details
    const fetchCartData = (cartItems) => {
        const cartPromises = cartItems.map(async (cartItem) => {

            try {
                const response = await fetch(`${import.meta.env.VITE_API_URL}/carrito/${lastCartBackend.id}/items`, {
                    // const response = await fetch(`http://localhost:3000/api/carrito/${lastCartBackend.id}/items`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${tokenJwt}`
                    },
                    // cartDetailsBackend es el que pasa por .map
                    body: JSON.stringify({ id_carrito: lastCartBackend.id, id_producto: cartItem.id_producto, cantidad: cartItem.cantidad, fecha_creacion: lastCartBackend.fecha_creacion })
                })

                if (!response.ok) {
                    console.log("error al enviar items del carrito")
                }

                if (response.ok) {
                    // Swal.fire({
                    //     title: "Carrito Enviado",
                    //     text: "Su carrito ha sido registrado correctamente.",
                    //     icon: "success"
                    // })
                    console.log('cart details POST ok')
                }


            } catch (error) {
                console.log("error: ", error)
                console.error('Error fetching cart item', cartItem.id, error);
                return { id: cartItem.id, error: error.message }
            }

        })

        Promise.all(cartPromises).then(results => {
            console.log('All promises in cart settled:', results)
        })
    }

    //POST order details
    const fetchOrderData = (orderItems) => {
        // console.log('lastOrderBackend')
        // console.log(lastOrderBackend)
        const orderPromises = orderItems.map(async (orderItem) => {

            try {
                const response = await fetch(`${import.meta.env.VITE_API_URL}/ordenes/${lastOrderBackend.id}/detalle`, {
                    // const response = await fetch(`http://localhost:3000/api/ordenes/${lastOrderBackend.id}/detalle`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${tokenJwt}`
                    },
                    // cartDetailsBackend es el que pasa por .map
                    body: JSON.stringify({ id_orden: lastOrderBackend.id, id_producto: orderItem.id_producto, cantidad: orderItem.cantidad, fecha_creacion: lastOrderBackend.fecha_creacion })
                })

                if (!response.ok) {
                    console.log("error al enviar items de la orden")
                }

                if (response.ok) {
                    Swal.fire({
                        title: "Carrito Enviado",
                        text: "Su carrito ha sido registrado correctamente.",
                        icon: "success"
                    })
                    console.log('order details POST ok')

                }


            } catch (error) {
                console.log("error: ", error)
                console.error('Error fetching order item', orderItem.id, error);
                return { id: orderItem.id, error: error.message }
            }

        })

        Promise.all(orderPromises).then(results => {
            console.log('All promises in order settled:', results)
            setCart([])
            setTotal(0)
            setCartDetailsBackend(null)
        })
    }


    const payCart = async () => {
        fetchCartData(cartDetailsBackend)
        fetchOrderData(cartDetailsBackend)
        navigate('/')
    }




    return (
        <>
            <Box sx={{ display: 'flex', flexDirection: 'column', my: 2, p: 3 }} >
                <Grid container spacing={2} sx={{ px: { xs: 2, md: 15 } }} >
                    <Grid size={12}>
                        <Typography variant='h5'>Confirmación de Pedido</Typography>
                    </Grid>

                    {/* {
                        cart.map(cookie => (
                            <Grid size={12} key={cookie.id} >
                                <CartCard img={cookie.img} alt={''} title={cookie.name} price={cookie.price} count={cookie.count} id={cookie.id} />
                            </Grid>
                        ))
                    }
                    {
                        total === 0 ? <Typography variant='h6' align='center'>Tu carrito está vacío.</Typography> : null
                    } */}


                    <Grid size={12}>

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
                                    {cartDetailsBackend ? (cartDetailsBackend.map((order, index) => {
                                        const cookie = listaCookies.find(c => c.id === order.id_producto);
                                        return (
                                            <TableRow key={index}>
                                                <TableCell component="th" scope="row" >{++index}</TableCell>
                                                <TableCell align="left">
                                                    <Card sx={{ display: 'flex' }}>
                                                        <Box sx={{ display: 'flex', width: '100%', pb: 0 }}>
                                                            <CardMedia
                                                                component="img"
                                                                height="160"
                                                                image={cookie ? cookie.imagen_url : ''}
                                                                alt={cookie ? cookie.name : ''}
                                                                sx={{ minWidth: 200, maxWidth: 400 }}
                                                            />
                                                        </Box>
                                                    </Card>
                                                </TableCell>
                                                <TableCell align="left">{cookie ? cookie.name : 'Producto no encontrado'}</TableCell>
                                                <TableCell align="left">{order.cantidad || ''}</TableCell>
                                            </TableRow>
                                        )
                                    })) : (<TableRow><TableCell colSpan={4}>No hay productos</TableCell></TableRow>)}
                                </TableBody>
                            </Table>
                        </TableContainer>

                    </Grid>



                    <Grid size={12} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 3 }}>
                        <Typography variant='h5'>Total: ${total.toLocaleString("es-ES", { useGrouping: true })}</Typography>
                        <Button disabled={!tokenJwt} onClick={payCart} variant='contained' sx={{ px: 6, backgroundColor: '#A84A2E' }}>Pagar</Button>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}

export default CartPayment