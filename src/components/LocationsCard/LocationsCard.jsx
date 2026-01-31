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
import LocationPinIcon from '@mui/icons-material/LocationPin';
import PhoneEnabledIcon from '@mui/icons-material/PhoneEnabled';
import EmailIcon from '@mui/icons-material/Email';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';

const LocationsCard = ({ img, alt, shopName, address, phoneNumber, email, horarioLV, horarioS, horarioD }) => {
    return (
        <>
            <Card sx={{ display: 'flex', maxWidth: { xs: '400', md: 'auto' } }}>
                <Box sx={{ display: 'flex', justifyContent: 'center', p: 'auto', flexDirection: { xs: 'column', md: 'row' } }}>
                    <CardMedia
                        component="img"
                        image={img}
                        alt={alt}
                        sx={{ width: 400 }}
                    />
                    <CardContent sx={{display:'flex', flexDirection:'column', gap:2}}>
                        <Typography gutterBottom variant="h5" component="div" sx={{ml:1}}>
                            {shopName}
                        </Typography>
                        <Box sx={{display:'flex', flexDirection:'column', gap:1}}>
                            <Typography variant="body2" sx={{ color: 'text.secondary', display:'flex', alignItems:'center' }}>
                                <LocationPinIcon sx={{mr:1}}/>
                                {address}
                            </Typography>
                            <Typography variant="body2" sx={{ color: 'text.secondary', display:'flex', alignItems:'center' }}>
                                <PhoneEnabledIcon sx={{mr:1}}/>
                                {phoneNumber}
                            </Typography>
                            <Typography variant="body2" sx={{ color: 'text.secondary', display:'flex', alignItems:'center'}}>
                                <EmailIcon sx={{mr:1}}/>
                                {email}
                            </Typography>
                            <Typography variant="body2" sx={{ color: 'text.secondary', display:'flex', alignItems:'center' }}>
                                <AccessTimeFilledIcon sx={{mr:1}}/>
                                Horario Atención:
                            </Typography>
                            <Box sx={{ml:5}}>
                            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                Lunes a Viernes: {horarioLV}
                            </Typography>
                            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                Sábado: {horarioS}
                            </Typography>
                            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                Domingo: {horarioD}
                            </Typography>
                            </Box>
                        </Box>
                    </CardContent>
                </Box>
            </Card>
            {/* <Card sx={{ maxWidth: 345,  margin: 'auto' }}>
                <CardActionArea >
                    <CardMedia
                        component="img"
                        height="140"
                        image={img}
                        alt={alt}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div" sx={{ height: { md: 97 } }} onClick={goToCookie}>
                            {title}
                        </Typography>
                        <Typography variant="body1" sx={{ color: '#A84A2E', fontWeight: '700', textAlign: 'center' }}>
                            Precio: ${price.toLocaleString("es-ES", { useGrouping: true })}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions sx={{ display: 'flex', justifyContent: 'center' }}>
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
            </Card> */}
        </>
    )
}

export default LocationsCard