import React, { useContext, useEffect, useState } from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import { CartContext } from '../../context/CartContext';
import { useNavigate } from 'react-router-dom';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import Divider from '@mui/material/Divider';

const MenuCards = ({ img, alt, title, price, id }) => {

    const { cart, handleclick2,
        minusCookie2, plusCookie2 } = useContext(CartContext)

    const [cookieInCart, setCookieInCart] = useState(null)

    const navigate = useNavigate()
    const goToCookie = () => {
        navigate(`/cookie/${id}`)
    }

    useEffect(() => {
        const index = cart.findIndex(cookie => cookie.id === id)
        index === -1 ? (setCookieInCart(0)) : (setCookieInCart(cart[index].count))

    })

    return (
        <>
            <Card sx={{ maxWidth: 345,  margin: 'auto' }}>
                <CardActionArea >
                    <CardMedia
                        component="img"
                        height="250"
                        image={img}
                        alt={alt}
                    />
                    <CardContent sx={{pb:0}}>
                        <Typography gutterBottom variant="h5" component="div" sx={{ height: { md: 97, lg:'auto' } }} onClick={goToCookie}>
                            {title}
                        </Typography>
                        <Divider variant="middle" />
                        <Typography variant="subtitle2" sx={{ color: '#A84A2E', fontWeight: '700', textAlign: 'center', mt:2 }}>
                            ${price.toLocaleString("es-ES", { useGrouping: true })}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions sx={{ display: 'flex', justifyContent: 'center', pt:0 }}>
                    {
                        cart.findIndex(cookie => cookie.id === id) === -1 ? (
                            <Box sx={{ display: 'flex', alignItems: 'center', m: 1 }}>
                                <CardActions sx={{ display: 'flex', justifyContent: 'center' }}>
                                    <Button size="small" variant='contained' sx={{ backgroundColor: '#D4A574', color: '#5C4033' }}
                                        onClick={() => handleclick2(title, price, img, id)}>
                                        Agregar <AddShoppingCartIcon sx={{ ml: 1 }} />
                                    </Button>
                                </CardActions>
                            </Box>
                        ) : (
                            <Box sx={{ display: 'flex', alignItems: 'center', m: 1 }}>
                                <CardActions sx={{ display: 'flex', justifyContent: 'center' }}>
                                    <Button size="small" variant='contained'
                                        sx={{ backgroundColor: '#D4A574', color: '#5C4033', px: 1.5, minWidth: 'auto' }}
                                        onClick={() => minusCookie2(price, id)}
                                    >
                                        <RemoveIcon />
                                    </Button>
                                    <Typography>{cookieInCart}</Typography>
                                    <Button size="small" variant='contained'
                                        sx={{ backgroundColor: '#D4A574', color: '#5C4033', px: 1.5, minWidth: 'auto' }}
                                        onClick={() => plusCookie2(price, id)}
                                    >
                                        <AddIcon />
                                    </Button>
                                </CardActions>
                            </Box>
                        )
                    }
                </CardActions>
            </Card>
        </>
    )
}

export default MenuCards