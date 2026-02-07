import React from 'react'

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';
import Divider from '@mui/material/Divider';
import { useNavigate } from 'react-router-dom';
import CardActionArea from '@mui/material/CardActionArea';

const HighlightsCard = ({ alt, img, title, price, desc, id }) => {

    const navigate = useNavigate()
    const goToCookie = () => {
        navigate(`/menu/${id}`)
    }

    return (
        <Card sx={{ maxWidth: {xs:'auto', md:345} }} >
            <CardActionArea onClick={goToCookie}>
                <CardMedia
                    component="img"
                    alt={alt}
                    height="250"
                    image={img}
                />
                <CardContent>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Typography gutterBottom variant="h6" component="div" >
                            {title}
                        </Typography>
                        <Typography gutterBottom variant="subtitle2" component="div" color='#A84A2E' >
                            ${price.toLocaleString("es-ES", { useGrouping: true })}
                        </Typography>
                    </Box>
                    <Divider variant="middle" />
                    <Typography variant="body2"
                        sx={{
                            color: 'text.secondary',
                            pt: 3,
                            display: '-webkit-box',
                            overflow: 'hidden',
                            WebkitBoxOrient: 'vertical',
                            WebkitLineClamp: 2,
                        }} >
                        {desc}
                    </Typography>
                </CardContent>

                <Box sx={{display:'flex', alignItems:'center', gap:1, mb:2}}>
                    <Typography variant='button' fontSize={'small'} align='center' sx={{ color: "#333333", ml: 2 }}>Pide a domicilio </Typography>
                    <DeliveryDiningIcon />
                </Box>
            </CardActionArea>
        </Card>
    )
}

export default HighlightsCard