import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { AxiosCookieIdContext } from '../../context/AxiosCookieIdContext'
import { CartContext } from '../../context/CartContext'
import Box from '@mui/material/Box'

const CookiePage = () => {

    const { cookieId } = useParams()

    const { cookie, getCookie } = useContext(AxiosCookieIdContext)

    const { cart, handleclick2,
        minusCookie2, plusCookie2 } = useContext(CartContext)

    const [cookieInCart, setCookieInCart] = useState(null)


    useEffect(() => {
        getCookie(cookieId)
    }, [])

    useEffect(() => {
        const index = cart.findIndex(ThisCookie => ThisCookie.id === cookie.id)
        index === -1 ? (setCookieInCart(0)) : (setCookieInCart(cart[index].count))
    })

  return (
    <Box>CookiePage</Box>
  )
}

export default CookiePage