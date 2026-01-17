import React from 'react'

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';

const HighlightsCard = ({ alt, img, title, price, desc }) => {
    return (
        <Card sx={{ maxWidth: 345 }} >
            <CardMedia
                component="img"
                alt={alt}
                height="140"
                image={img}
            />
            <CardContent>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Typography gutterBottom variant="h5" component="div">
                        {title}
                    </Typography>
                    <Typography gutterBottom variant="caption" component="div" color='#A84A2E'>
                        ${price}
                    </Typography>
                </Box>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    {desc}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" sx={{color:"#333333"}}>Pide a domicilio <DeliveryDiningIcon sx={{mx:1}} /></Button>
            </CardActions>
        </Card>
    )
}

export default HighlightsCard