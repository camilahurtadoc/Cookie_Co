import { Navigate, Route, Routes } from 'react-router-dom';

import Banner from './components/Banner/Banner'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home/Home'
import Menu from './pages/Menu/Menu';
import Locations from './pages/Locations/Locations';
import Blog from './pages/Blog/Blog';
import Cart from './pages/Cart/Cart';
import Profile from './pages/Profile/Profile';
import Orders from './pages/Orders/Orders';
import Favorites from './pages/Favorites/Favorites';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Logout from './pages/Logout/Logout';
import NotFound from './pages/NotFound/NotFound';
import ProfileAdress from './pages/ProfileAdress/ProfileAdress';
import Footer from './components/Footer/Footer';
import './App.css'
import { useContext, useEffect } from 'react';
import { UserContext } from './context/UserContext';
import { CartContext } from './context/CartContext';
import CookiePage from './pages/CookiePage/CookiePage';
import Box from '@mui/material/Box';


function App() {

  const { tokenJwt, setTokenJwt } = useContext(UserContext)
  const { cart, total } = useContext(CartContext)

  useEffect(() => {
    setTokenJwt(localStorage.getItem("token_jwt"))
  }, [])

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart))
    localStorage.setItem("total", total)
  }, [cart, total])

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', width:'100%' }} >
      {/* <Banner /> */}
      <Navbar />
      <Routes >
        <Route path='/' element={<Home />} />
        <Route path='/menu' element={<Menu />} />
        <Route path='/menu/:cookieId' element={<CookiePage />} />
        <Route path='/locales' element={<Locations />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/carrito' element={<Cart />} />
        <Route path='/login' element={tokenJwt ? <Navigate to="/" /> : <Login />} />
        <Route path='/register' element={tokenJwt ? <Navigate to="/" /> : <Register />} />
        <Route path='/logout' element={tokenJwt ? <Logout /> : <Navigate to="/" />} />
        <Route path='/perfil' element={tokenJwt ? <Profile /> : <Navigate to="/" />} />
        <Route path='/perfil/:orderId' element={tokenJwt ? <Orders /> : <Navigate to="/" />} />
        <Route path='/perfil/direcciones' element={tokenJwt ? <ProfileAdress /> : <Navigate to="/" />} />
        <Route path='/perfil/favoritos' element={tokenJwt ? <Favorites /> : <Navigate to="/" />} />
        <Route path='/*' element={<NotFound />} />
      </Routes>
      <Footer />

    </Box>
  )
}

export default App
