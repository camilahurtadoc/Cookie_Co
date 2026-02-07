import React, { useContext } from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import { CartContext } from '../../context/CartContext';

const CartCard = ({ img, alt, title, price, count, id }) => {

    const { total, setTotal, cart, setCart,
        minusCookie2, plusCookie2 } = useContext(CartContext)

    return (
        <Card sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, justifyContent: 'space-between', minWidth: 250 }}>
            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, width: '100%', pb: 0 }}>
                <CardMedia
                    component="img"
                    height="140"
                    image={img}
                    alt={alt}
                    sx={{ maxWidth: { xs: '100%', md: 200 }, height: { xs: 200, md: 140 } }}
                />
                <CardContent sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', pb: { xs: 0, md: 3 }, '&:last-child': { pb: { xs: 0, md: 3 } } }} >
                    <Typography gutterBottom variant="h5" component="div" >
                        {title}
                    </Typography>
                    <Typography variant="caption" sx={{ color: '#A84A2E', fontWeight: '700' }}>
                        $ {price.toLocaleString("es-ES", { useGrouping: true })}
                    </Typography>
                </CardContent>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, alignItems: 'center', m: { xs: 0, md: 2 } }}>
                <CardActions sx={{ display: 'flex', justifyContent: 'center', m: {xs:0, md:1} }}>
                    <IconButton onClick={() => minusCookie2(price, id)}>
                        <RemoveIcon />
                    </IconButton>
                    <Typography>{count}</Typography>
                    <IconButton onClick={() => plusCookie2(price, id)} >
                        <AddIcon />
                    </IconButton>
                </CardActions>
                <Box sx={{ p: { xs: 0, md: 2 } }}>
                    <Typography variant='body1' sx={{ color: '#A84A2E', fontWeight: '700', p: 1 }}>${(count * price).toLocaleString("es-ES", { useGrouping: true })}</Typography>
                </Box>
            </Box>
        </Card>
    )
}

export default CartCard