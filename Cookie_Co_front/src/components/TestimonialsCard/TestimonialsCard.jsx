import React from 'react'
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import StarRateIcon from '@mui/icons-material/StarRate';


const TestimonialsCard = ({ rating, name, img, review }) => {
    const starRating = (rating) => {
        const stars = [];
        for (let i = 0; i < rating; i++) {
            stars.push(<StarRateIcon fontSize="small" sx={{color:'#F2C94C'}}/>);
        }
        return stars;
    };
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', m:2, border:'solid', backgroundColor:'#5C4033' }}>
            <Typography sx={{mt:2, ml:2}}>{starRating(rating)}</Typography>
            <Box sx={{ display:'flex', alignItems:'center', m:2}}>
                <Avatar alt={name} src={img} sx={{width:56, height:56, mr:1}} />
                <Typography color='#EDE4D9'>{name}</Typography>
            </Box>
            <Typography color='#EDE4D9' sx={{m:1}}>{review}</Typography>
        </Box>
    )
}

export default TestimonialsCard