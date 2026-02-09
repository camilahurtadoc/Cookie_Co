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

const CookiePage = () => {

    const { cookieId } = useParams()

    const { cookie, getCookie } = useContext(AxiosCookieIdContext)

    const { cart, handleclick2,
        minusCookie2, plusCookie2 } = useContext(CartContext)

    const [cookieInCart, setCookieInCart] = useState(null)


    useEffect(() => {
        getCookie(cookieId)
        // console.log(cookie)
    }, [])

    useEffect(() => {
        const index = cart.findIndex(ThisCookie => ThisCookie.id === cookie.id)
        index === -1 ? (setCookieInCart(0)) : (setCookieInCart(cart[index].count))
    })

    return (
        <Box sx={{ display: 'flex', py: 5, width: '100%', maxWidth: '100vw' }}>
            <Grid container spacing={2} sx={{ px: { xs: 2, md: 15 } }} >
                <Grid size={{ xs: 12, md: 8 }}>
                    <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', }}>
                        <Box sx={{ borderRadius: '16px', overflow: 'hidden', border: '#D4A574 2px solid' }}>
                            <img src={cookie.imagen_url} alt={cookie.name} height='100%' width='100%' style={{ maxHeight: 650 }} />
                        </Box>
                    </Box>
                </Grid>
                <Grid size={{ xs: 12, md: 4 }}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'start', mt: { xs: 1, md: 1 } }} >
                        <Typography variant='h3' component='div' align='left'>
                            {cookie.name}
                        </Typography>
                        <Typography variant='h6' component='div' sx={{ mt: 4 }} gutterBottom>
                            {cookie.description}
                        </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'center', m: 2 }}>
                        <CardActions sx={{ display: 'flex', justifyContent: 'center', pt: 0 }}>
                            {
                                cart.findIndex(item => item.id === cookie.id) === -1 ? (
                                    <Box sx={{ display: 'flex', alignItems: 'center', m: 1 }}>
                                        <CardActions sx={{ display: 'flex', justifyContent: 'center' }}>
                                            <Button size="small" variant='contained' sx={{ backgroundColor: '#D4A574', color: '#5C4033' }}
                                                onClick={() => handleclick2(cookie.name, cookie.precio, cookie.imagen_url, cookie.id)}>
                                                Agregar <AddShoppingCartIcon sx={{ ml: 1 }} />
                                            </Button>
                                        </CardActions>
                                    </Box>
                                ) : (
                                    <Box sx={{ display: 'flex', alignItems: 'center', m: 1 }}>
                                        <CardActions sx={{ display: 'flex', justifyContent: 'center' }}>
                                            <Button size="small" variant='contained'
                                                sx={{ backgroundColor: '#D4A574', color: '#5C4033', px: 1.5, minWidth: 'auto' }}
                                                onClick={() => minusCookie2(cookie.precio, cookie.id)}
                                            >
                                                <RemoveIcon />
                                            </Button>
                                            <Typography>{cookieInCart}</Typography>
                                            <Button size="small" variant='contained'
                                                sx={{ backgroundColor: '#D4A574', color: '#5C4033', px: 1.5, minWidth: 'auto' }}
                                                onClick={() => plusCookie2(cookie.precio, cookie.id)}
                                            >
                                                <AddIcon />
                                            </Button>
                                        </CardActions>
                                    </Box>
                                )
                            }
                        </CardActions>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
}

export default CookiePage