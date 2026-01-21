import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';

const MenuCards = ({ img, alt, title, price}) => {
    return (
        <>
            <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="140"
                        image={img}
                        alt={alt}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div" sx={{height:{md:97}}}>
                            {title}
                        </Typography>
                        <Typography variant="body1" sx={{ color: '#A84A2E', fontWeight:'700', textAlign:'center' }}>
                            $ {price}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions sx={{display:'flex', justifyContent:'center'}}>
                    <Button size="small" variant='contained' sx={{backgroundColor:'#D4A574', color:'#5C4033'}}>
                        Agregar
                    </Button>
                </CardActions>
            </Card>
        </>
    )
}

export default MenuCards