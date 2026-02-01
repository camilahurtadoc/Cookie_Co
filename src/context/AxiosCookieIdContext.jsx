import axios from "axios";
import { createContext, useState } from "react";

export const AxiosCookieIdContext = createContext();

const AxiosCookieIdProvider = ({ children }) => {
    const [cookie, setCookie] = useState({})

    async function getCookie(cookieId) {
        try {
            const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/productos/${cookieId}`);
            setCookie(data)
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <AxiosCookieIdContext.Provider value={{ cookie, getCookie }}>
            { children }
        </AxiosCookieIdContext.Provider>
    )
}

export default AxiosCookieIdProvider;