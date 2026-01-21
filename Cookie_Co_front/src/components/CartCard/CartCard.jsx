import React from 'react'
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

const CartCard = ({ img, alt, title, price }) => {
    return (
        <Card sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Box sx={{ display: 'flex', width: '100%' }}>
                <CardMedia
                    component="img"
                    height="140"
                    image={img}
                    alt={alt}
                    sx={{ maxWidth: 200 }}
                />
                <CardContent sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', width: '100%' }} >
                    <Typography gutterBottom variant="h5" component="div" sx={{}}>
                        {title}
                    </Typography>
                    <Typography variant="caption" sx={{ color: '#A84A2E', fontWeight: '700' }}>
                        $ {price}
                    </Typography>
                </CardContent>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', m: 2 }}>
                <CardActions sx={{ display: 'flex', justifyContent: 'center', m: 1 }}>
                    {/* <Button size="small" variant='contained' sx={{ backgroundColor: '#D4A574', color: '#5C4033' }}>
                    -
                    </Button> */}
                    <IconButton>
                        <RemoveIcon />
                    </IconButton>
                    <Typography>1</Typography>
                    {/* <Button size="small" variant='contained' sx={{ backgroundColor: '#D4A574', color: '#5C4033' }}>
                    +
                    </Button> */}
                    <IconButton>
                        <AddIcon />
                    </IconButton>
                </CardActions>
                <Box sx={{ p:2 }}>
                    <Typography variant='body1' sx={{ color: '#A84A2E', fontWeight: '700', p: 1 }}>${price}</Typography>
                </Box>
            </Box>
        </Card>
    )
}

export default CartCard