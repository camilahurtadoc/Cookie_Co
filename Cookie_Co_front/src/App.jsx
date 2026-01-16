import './App.css'
import { Route, Routes } from 'react-router-dom';

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

function App() {

  return (
    <>
      <Banner />
      <Navbar />
      <Routes >
        <Route path='/' element={<Home />} />
        <Route path='/menu' element={<Menu />} />
        <Route path='/locales' element={<Locations />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/carrito' element={<Cart />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/perfil' element={<Profile />} />
        <Route path='/perfil/pedidos' element={<Orders />} />
        <Route path='/perfil/direcciones' element={<ProfileAdress />} />
        <Route path='/perfil/favoritos' element={<Favorites />} />
        <Route path='/perfil/logout' element={<Logout />} />
        {/* <Route path='' element={ }/> */}
        <Route path='/*' element={<NotFound />} />

      </Routes>

    </>
  )
}

export default App
