import React, { useContext, useEffect, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
// import logoHorizontal from '../../../public/images/logos/logo_horizontal_bg_4.png';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Link as RouterLink } from 'react-router-dom';
import Divider from '@mui/material/Divider';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { CartContext } from '../../context/CartContext';
import { UserContext } from '../../context/UserContext';

const theme = createTheme({
    palette: {
        primary: {
            main: '#5C4033',
        },
        secondary: {
            main: '#EDE4D9',
        },
    },
});

const pages = ['Inicio', 'Pide Aquí', 'Locales', 'Blog', 'Mi Cuenta'];
const settings = ['Perfil', 'Mis Pedidos', 'Direcciones', 'Favoritos'];

function ResponsiveAppBar() {

    const logoHorizontal = '/images/logos/logo_horizontal_bg_4.PNG'
    const logoSinTexto = '/images/logos/logo_sin_texto_1.png'

    const [anchorElNav, setAnchorElNav] = useState(null);
    const [anchorElUser, setAnchorElUser] = useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const { total, cartCount, cartCounter } = useContext(CartContext);
    const { tokenJwt } = useContext(UserContext);

    //innecesario?
    const setActiveClass = ({ isActive, isPending }) => (isPending ? "pending nav-link" : isActive ? "active nav-link" : "nav-link");

    useEffect(() => {
        cartCounter();
    })

    return (
        <ThemeProvider theme={theme}>

            <AppBar position="static" sx={{ width: '100%', maxWidth: '100vw' }}>
                <Container maxWidth="xl" disableGutters sx={{ px: { xs: 2, md: 12 } }}>
                    <Toolbar disableGutters>
                        <Box
                            component='img'
                            sx={{ maxWidth: 180, display: { xs: 'none', md: 'flex' } }}
                            alt='logo'
                            src={logoHorizontal}
                        />

                        <Box sx={{ display: { xs: 'flex', md: 'none' } }} >
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}
                                color="secondary"
                            >
                                <MenuIcon />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorElNav}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                                open={Boolean(anchorElNav)}
                                onClose={handleCloseNavMenu}
                                sx={{ display: { xs: 'block', md: 'none' } }}
                            >
                                {/* {pages.map((page) => (
                                    <MenuItem key={page} onClick={handleCloseNavMenu}>
                                        <Typography sx={{ textAlign: 'center' }} color='primary' >{page}</Typography>
                                    </MenuItem>
                                ))} */}
                                <MenuItem onClick={handleCloseNavMenu} component={RouterLink} to='/'>
                                    <Typography sx={{ textAlign: 'center' }} color='primary' >Inicio</Typography>
                                </MenuItem>
                                <MenuItem onClick={handleCloseNavMenu} component={RouterLink} to='/menu'>
                                    <Typography sx={{ textAlign: 'center' }} color='primary' >Pide Aquí</Typography>
                                </MenuItem>
                                <MenuItem onClick={handleCloseNavMenu} component={RouterLink} to='/locales'>
                                    <Typography sx={{ textAlign: 'center' }} color='primary' >Locales</Typography>
                                </MenuItem>
                                {/* <MenuItem onClick={handleCloseNavMenu} component={RouterLink} to='/blog'>
                                    <Typography sx={{ textAlign: 'center' }} color='primary' >Blog</Typography>
                                </MenuItem> */}
                                {
                                    tokenJwt ? (
                                        <MenuItem onClick={handleCloseNavMenu} component={RouterLink} to='/perfil'>
                                            <Typography sx={{ textAlign: 'center' }} color='primary' >Mi Cuenta</Typography>
                                        </MenuItem>
                                    ) : (
                                        <MenuItem onClick={handleCloseNavMenu} component={RouterLink} to='/login'>
                                            <Typography sx={{ textAlign: 'center' }} color='primary' >Mi Cuenta</Typography>
                                        </MenuItem>
                                    )
                                }

                            </Menu>
                        </Box>
                        <Box
                            component='img'
                            sx={{ maxWidth: 100, display: { xs: 'flex', md: 'none' } }}
                            alt='logo'
                            src={logoSinTexto}
                        />
                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                            {/* {pages.map((page) => (
                                <Button
                                    key={page}
                                    onClick={handleCloseNavMenu}
                                    sx={{ my: 2, display: 'block' }}
                                    color='secondary'
                                >
                                    {page}
                                </Button>
                            ))} */}
                            <Button component={RouterLink} to='/' sx={{ my: 2, display: 'block' }} color='secondary' >
                                Inicio
                            </Button>
                            <Button component={RouterLink} to='/menu' sx={{ my: 2, display: 'block' }} color='secondary' >
                                Pide Aquí
                            </Button>
                            <Button component={RouterLink} to='/locales' sx={{ my: 2, display: 'block' }} color='secondary' >
                                Locales
                            </Button>
                            {/* <Button component={RouterLink} to='/blog' sx={{ my: 2, display: 'block' }} color='secondary' >
                                Blog
                            </Button> */}
                            {/* <Divider orientation="vertical" variant="middle" flexItem sx={{ bgcolor:'#EDE4D9', }}/> */}
                            {/* {
                                tokenJwt ? (
                                    <>
                                        <Button component={RouterLink} to='/perfil' sx={{ my: 2, display: 'block' }} color='secondary' >
                                            Mi Cuenta
                                        </Button>
                                        <Button component={RouterLink} to='/logout' sx={{ my: 2, display: 'block' }} color='secondary' >
                                            Cerrar Sesión
                                        </Button>
                                    </>
                                ) : (
                                    <>
                                        <Button component={RouterLink} to='/login' sx={{ my: 2, display: 'block' }} color='secondary' >
                                            Login
                                        </Button>
                                        <Button component={RouterLink} to='/register' sx={{ my: 2, display: 'block' }} color='secondary' >
                                            Register
                                        </Button>
                                    </>
                                )
                            } */}
                        </Box>

                        {/* Avatar + menú usuario */}
                        {/* <Box sx={{ flexGrow: 0 }}>
                            <Tooltip title="Open settings">
                                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                    <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                                </IconButton>
                            </Tooltip>
                            <Menu
                                sx={{ mt: '45px' }}
                                id="menu-appbar"
                                anchorEl={anchorElUser}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={Boolean(anchorElUser)}
                                onClose={handleCloseUserMenu}
                            > */}

                        {/* {settings.map((setting) => (
                                    <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                    <Typography sx={{ textAlign: 'center' }} color='primary'>{setting}</Typography>
                                    </MenuItem>
                                    ))} */}

                        {/* <MenuItem onClick={handleCloseUserMenu} component={RouterLink} to='/perfil'>
                                    <Typography sx={{ textAlign: 'center' }} color='primary'>Perfil</Typography>
                                </MenuItem>
                                <MenuItem onClick={handleCloseUserMenu} component={RouterLink} to='/perfil/pedidos'>
                                    <Typography sx={{ textAlign: 'center' }} color='primary'>Mis Pedidos</Typography>
                                </MenuItem>
                                <MenuItem onClick={handleCloseUserMenu} component={RouterLink} to='/perfil/direcciones'>
                                    <Typography sx={{ textAlign: 'center' }} color='primary'>Direcciones</Typography>
                                </MenuItem>
                                <MenuItem onClick={handleCloseUserMenu} component={RouterLink} to='/perfil/favoritos'>
                                    <Typography sx={{ textAlign: 'center' }} color='primary'>Favoritos</Typography>
                                </MenuItem>
                                <MenuItem onClick={handleCloseUserMenu} component={RouterLink} to='/perfil/logout'>
                                    <Typography sx={{ textAlign: 'center' }} color='primary'>Cerrar Sesión</Typography>
                                </MenuItem>
                            </Menu>
                        </Box> */}

                        {/* <Divider orientation="vertical" variant="middle" sx={{ color: '#EDE4D9', m: 1, height: '50px' }}  ></Divider> */}
                        <Box sx={{ ml: 3, display: 'flex', alignItems: 'center' }}>
                            {
                                tokenJwt ? (
                                    <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                                        <Button component={RouterLink} to='/perfil' sx={{ my: 2, display: 'block' }} color='secondary' >
                                            Mi Cuenta
                                        </Button>
                                        <Button component={RouterLink} to='/logout' sx={{ my: 2, display: 'block' }} color='secondary' >
                                            Cerrar Sesión
                                        </Button>
                                    </Box>
                                ) : (
                                    <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                                        <Button component={RouterLink} to='/login' sx={{ my: 2, display: 'block' }} color='secondary' >
                                            Login
                                        </Button>
                                        <Button component={RouterLink} to='/register' sx={{ my: 2, display: 'block' }} color='secondary' >
                                            Register
                                        </Button>
                                    </Box>
                                )
                            }
                            <Button component={RouterLink} to='/carrito' sx={{ minWidth: 'auto' }}>
                                <Badge color='secondary' badgeContent={cartCount}>
                                    <ShoppingCartIcon fontSize="large" sx={{ color: '#F5E8C7' }} />
                                </Badge>
                                <Typography variant='button' sx={{ color: '#F5E8C7', ml: 2, display: { xs: 'none', md: 'block' } }}>
                                    Total: ${total.toLocaleString("es-ES", { useGrouping: true })}
                                </Typography>
                            </Button>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
        </ThemeProvider>
    );
}
export default ResponsiveAppBar;
