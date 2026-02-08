import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
    const [total, setTotal] = useState(() => {
        const storedTotal = localStorage.getItem("total")
        return storedTotal ? parseInt(storedTotal) : 0
    })
    const [cart, setCart] = useState(() => {
        const storedCart = localStorage.getItem("cart")
        return storedCart ? JSON.parse(storedCart) : []
    })
    const [cartCount, setCartCount] = useState(null)

    const [cartBackend, setCartBackend] = useState({
        id_usuario: null,
        fecha_creacion: null
    })

    const [cartDetailsBackend, setCartDetailsBackend] = useState(() => {
        const storedCartDetailsBackend = localStorage.getItem("cartDetailsBackend")
        return storedCartDetailsBackend ? JSON.parse(storedCartDetailsBackend) : []
    })

    const handleclick2 = (name, price, img, id) => {

        const cookieToAdd = {
            id: id,
            name: name,
            price: price,
            count: 1,
            img: img,
        }

        setCart([...cart, cookieToAdd]);
        setTotal(total + price);

        const cookieToAddBackend = {
            id_carrito: null,
            id_producto: id,
            cantidad: 1,
            fecha_creacion: null
        }

        setCartDetailsBackend([...cartDetailsBackend, cookieToAddBackend])
    }

    const minusCookie2 = (price, id) => {
        //para localStorage
        const index = cart.findIndex(cookie => cookie.id === id);

        if (cart[index].count - 1 < 0) {
            return
        }

        let newCart = cart;
        newCart.map(cartItem => (cartItem.id === cart[index].id ? (cartItem.count -= 1) : null));

        if (cart[index].count === 0) {
            newCart.splice(index, 1);
        }
        setCart(newCart);
        setTotal(total - price)

        //para enviar a backend
        const index2 = cartDetailsBackend.findIndex(cookie => cookie.id_producto === id);

        if (cartDetailsBackend[index2].cantidad - 1 < 0) {
            return
        }

        let newCartBack = cartDetailsBackend;
        newCartBack.map(cartItem => (cartItem.id_producto === cartDetailsBackend[index2].id_producto ? (cartItem.cantidad -= 1) : null));

        if (cartDetailsBackend[index2].cantidad === 0) {
            newCartBack.splice(index2, 1);
        }

        setCartDetailsBackend(newCartBack);
    }

    const plusCookie2 = (price, id) => {
        //para localStorage
        const index = cart.findIndex(cookie => cookie.id === id);

        let newCart = cart;
        newCart.map(cartItem => (cartItem.id === cart[index].id ? (cartItem.count += 1) : null));

        setCart(newCart);
        setTotal(total + price)

        //para enviar a backend
        const index2 = cartDetailsBackend.findIndex(cookie => cookie.id_producto === id);

        let newCartBack = cartDetailsBackend;
        newCartBack.map(cartItem => (cartItem.id_producto === newCartBack[index2].id_producto ? (cartItem.cantidad += 1) : null));

        setCartDetailsBackend(newCartBack);
    }

    const cartCounter = () => {
        let count = 0;
        cart.map(cookie => count += cookie.count)
        setCartCount(count)
    }

    return (
        <CartContext.Provider
            value={{
                total, setTotal,
                cart, setCart,
                handleclick2,
                minusCookie2, plusCookie2,
                cartCount, cartCounter,
                cartBackend, setCartBackend,
                cartDetailsBackend, setCartDetailsBackend
            }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;