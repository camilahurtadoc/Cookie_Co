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
    }

    const minusCookie2 = (price, id) => {
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
    }

    const plusCookie2 = (price, id) => {
        const index = cart.findIndex(cookie => cookie.id === id);

        let newCart = cart;
        newCart.map(cartItem => (cartItem.id === cart[index].id ? (cartItem.count += 1) : null));

        setCart(newCart);
        setTotal(total + price)
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
                cartCount, cartCounter
            }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;