import React from 'react'
import { useContext } from 'react';
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { UserContext } from '../../context/UserContext';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


const Login = () => {

  const { email, setEmail,
    password, setPassword,
    eye,
    type,
    seePassword,
    handleSubmit } = useContext(UserContext);

  return (
    <div className='mx-auto p-2 pt-5' style={{ width: "450px" }}>
      <h2 className='text-center'>Ingresa a tu cuenta</h2>
      <Box component={'form'} onSubmit={handleSubmit}
        sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' } }}
        noValidate
        autoComplete="off"
      >
        <div>
          <TextField
            required
            id="outlined-required"
            label="Correo electrónico"
            onChange={event => setEmail(event.target.value)}
            value={email}
          />
          <TextField
            id="outlined-password-input"
            label="Contraseña"
            type={type}
            autoComplete="current-password"
            onChange={event => setPassword(event.target.value)}
            value={password}
          />
          <span className='span-icon position-absolute end-0 translate-middle-x'
            onClick={seePassword}>
            {eye}
          </span>
        </div>

        <Box sx={{m:3, display:'flex'}} >
          <Button variant="contained" type="submit" sx={{backgroundColor:'#D4A574'}}>
            Ingresar
          </Button>
        </Box> 
      </Box>
    </div>
  )
}

export default Login
