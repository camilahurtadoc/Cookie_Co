import React from 'react'
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import StarRateIcon from '@mui/icons-material/StarRate';


const TestimonialsCard = ({ rating, name, img, review }) => {
    const starRating = (rating) => {
        const stars = [];
        for (let i = 0; i < rating; i++) {
            stars.push(<StarRateIcon fontSize="small" sx={{color:'#F2C94C'}} key={i}/>);
        }
        return stars;
    };
    return (
        <Box elevation={10} sx={{ display: 'flex', flexDirection: 'column', m:2, backgroundColor:'#ffffff', boxShadow: 10, borderRadius:'16px' }}>
            <Typography sx={{mt:2, ml:2}}>{starRating(rating)}</Typography>
            <Box sx={{ display:'flex', alignItems:'center', m:2}}>
                <Avatar alt={name} src={img} sx={{width:56, height:56, mr:1}} />
                <Typography variant='h6' color='#5C4033' fontWeight={600}>{name}</Typography>
            </Box>
            <Typography variant='subtitle1' color='#5C4033' sx={{mx:3, my:1}}>{review}</Typography>
        </Box>
    )
}

export default TestimonialsCard