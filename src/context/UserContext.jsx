import { createContext, useState } from "react";
// import { faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
// import { faEye } from '@fortawesome/free-solid-svg-icons'
import VisibilityIcon from '@mui/icons-material/Visibility';
import Swal from 'sweetalert2'
import { useNavigate } from "react-router-dom";

export const UserContext = createContext();

const UserProvider = ({ children }) => {
    // token asociado a usuario
    const [tokenJwt, setTokenJwt] = useState("")

    const logout = () => {
        localStorage.clear()
        setTokenJwt("")
        setUserEmail(null)
        setUserId(null)
        setUserEmail(null)
        setUserName(null)
        setUserAddress(null)
        setUserCity(null)
        setUserProvince(null)
        setAllOrders(null)
        setSpecificOrder(null)
    }

    // hook para redirigir usuario cuando haga login o register
    const navigate = useNavigate()

    // estado para contraseña escondida o visible
    const [eye, setEye] = useState(<VisibilityOffIcon />)
    const [type, setType] = useState("password")

    const seePassword = () => {
        if (type === "password") {
            setEye(<VisibilityIcon />)
            setType("text")
        } else {
            setEye(<VisibilityOffIcon />)
            setType("password")
        }
    }

    // State para email y password
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // State para generar pedido usuario enviado a backend
    const [userOrderBackend, setUserOrderBackend] = useState({
        id_usuario: null,
        total_pagar: null,
        status: null,
        fecha_creacion: null
    })

    // State para detalles de pedido usuario enviado a backend
    const [userOrderDetailsBackend, setUserOrderDetailsBackend] = useState({
        id_orden: null,
        id_producto: null,
        cantidad: 0,
        decha_creacion: null
    })

    // Login
    // consumo de ruta para hacer login y entrega de token_jwt
    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!email.trim() || !password.trim()) {
            Swal.fire({
                title: "Campos Vacíos",
                text: "Todos los campos son obligatorios.",
                icon: "error"
            })
            return
        }

        if (password.length < 6) {
            Swal.fire({
                title: "Contraseña",
                text: "La contraseña debe tener al menos 6 caracteres.",
                icon: "error"
            })
            return
        }

        try {
            const response = await fetch(`${import.meta.env.VITE_API_URL}/auth/login`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ email, password })
            })

            if (!response.ok) {
                console.log("error en el login")
                Swal.fire({
                    title: "Error en Log In",
                    text: "Datos de usuario y/o contraseña incorrectos.",
                    icon: "error"
                })
                return
            }

            const data = await response.json()

            localStorage.setItem("token_jwt", data.token)
            setTokenJwt(localStorage.getItem("token_jwt"))

            if (response.ok) {
                Swal.fire({
                    title: "Log In",
                    text: "Datos ingresados correctamente.",
                    icon: "success"
                })

                navigate("/")
                // getUserInfo()
                const today = new Date()
                // setUserOrderBackend({
                //     id_usuario: userId,
                //     total_pagar: null,
                //     status: 'Pendiente',
                //     fecha_creacion: null
                // })
            }

        } catch (error) {
            console.log("error: ", error)
        }

        setEmail("")
        setPassword("")
        setEye(<VisibilityOffIcon />)
        setType("password")
    }

    // Register
    // consumo de ruta para registrar nuevo usuario y entrega de token_jwt
    const [nombre, setNombre] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleSubmitRegister = async (event) => {
        event.preventDefault();

        if (!nombre.trim() || !email.trim() || !password.trim() || !confirmPassword.trim()) {
            Swal.fire({
                title: "Campos Vacíos",
                text: "Todos los campos son obligatorios.",
                icon: "error"
            })
            return
        }

        if (password.length < 6) {
            Swal.fire({
                title: "Contraseña",
                text: "La contraseña debe tener al menos 6 caracteres.",
                icon: "error"
            })
            return
        }

        if (password != confirmPassword) {
            Swal.fire({
                title: "Contraseña",
                text: "La contraseña y confirmación de contraseña deben ser iguales.",
                icon: "error"
            })
            return
        }

        try {
            const response = await fetch(`${import.meta.env.VITE_API_URL}/auth/register`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ nombre, email, password })
            })

            if (!response.ok) {
                console.log("error en el registro")
                return
            }

            const data = await response.json()

            localStorage.setItem("token_jwt", data.token)
            setTokenJwt(localStorage.getItem("token_jwt"))

            if (response.ok) {
                Swal.fire({
                    title: "Registro Exitoso",
                    text: "Datos ingresados correctamente.",
                    icon: "success"
                })

                navigate("/")
                // getUserInfo()
                const today = new Date()
                // setUserOrderBackend({
                //     id_usuario: userId,
                //     total_pagar: null,
                //     status: 'Pendiente',
                //     fecha_creacion: null
                // })
            }

        } catch (error) {
            console.log("error: ", error)
        }

        setNombre("")
        setEmail("")
        setPassword("")
        setConfirmPassword("")
        setEye(<VisibilityOffIcon />)
        setType("password")
    }

    // Profile
    // consumo de ruta para datos de usuario en el perfil desde backend

    const [userId, setUserId] = useState(null)
    const [userEmail, setUserEmail] = useState(null)
    const [userName, setUserName] = useState(null)
    const [userAddress, setUserAddress] = useState(null)
    const [userCity, setUserCity] = useState(null)
    const [userProvince, setUserProvince] = useState(null)

    const getUserInfo = async () => {

        const token = localStorage.getItem("token_jwt")
        setTokenJwt(localStorage.getItem("token_jwt"))


        if (!token) {
            console.log("El usuario no posee token")
            return
        }

        try {
            const response = await fetch(`${import.meta.env.VITE_API_URL}/auth/me`, {
                // const response = await fetch(`http://localhost:3000/api/auth/me`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${tokenJwt}`
                },
            })


            if (!response.ok) {
                console.log("error en perfil usuario")
                return
            }

            const data = await response.json()

            setUserId(data.id)
            setUserEmail(data.email)
            setUserName(data.nombre)
            setUserAddress(data.direccion)
            setUserCity(data.ciudad)
            setUserProvince(data.comuna)

        } catch (error) {
            console.log("error: ", error)
        }
    }


    //Profile orders
    // consumo de ruta para compras de usuario en el perfil desde backend

    const [allOrders, setAllOrders] = useState(null)

    const getUserOrders = async (userId) => {
        setTokenJwt(localStorage.getItem("token_jwt"))

        if (!tokenJwt) {
            console.log("El usuario no posee token")
            return
        }

        try {
            const response = await fetch(`${import.meta.env.VITE_API_URL}/ordenes/usuario/${userId}`, {
                // const response = await fetch(`http://localhost:3000/api/ordenes/usuario/${userId}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${tokenJwt}`
                },
            })


            if (!response.ok) {
                console.log("error en perfil usuario")
                return
            }

            const data = await response.json()
            setAllOrders(data)

        } catch (error) {
            console.log("error: ", error)
        }
    }


    //Profile specific order
    // consumo de ruta para detalle de pedido de usuario en el perfil desde backend

    const [specificOrder, setSpecificOrder] = useState(null)

    const getUserSpecificOrder = async (orderId) => {
        setTokenJwt(localStorage.getItem("token_jwt"))

        if (!tokenJwt) {
            console.log("El usuario no posee token")
            return
        }

        try {
            const response = await fetch(`${import.meta.env.VITE_API_URL}/ordenes/${orderId}/detalle`, {
                // const response = await fetch(`http://localhost:3000/api/ordenes/${orderId}/detalle`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${tokenJwt}`
                },
            })


            if (!response.ok) {
                console.log("error en perfil usuario")
                return
            }

            const data = await response.json()
            setSpecificOrder(data)

        } catch (error) {
            console.log("error: ", error)
        }
    }

    return (
        <UserContext.Provider value={{
            tokenJwt, setTokenJwt,
            logout,
            email, setEmail,
            password, setPassword,
            eye, setEye,
            type, setType,
            seePassword, handleSubmit,
            nombre, setNombre,
            confirmPassword, setConfirmPassword,
            handleSubmitRegister,
            getUserInfo, userId, userEmail, userName,
            userAddress, userCity, userProvince,
            getUserOrders, allOrders,
            getUserSpecificOrder, specificOrder, setSpecificOrder,
            userOrderBackend, setUserOrderBackend,
            userOrderDetailsBackend, setUserOrderDetailsBackend
        }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider;