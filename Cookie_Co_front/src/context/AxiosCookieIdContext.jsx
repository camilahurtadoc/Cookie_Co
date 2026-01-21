import axios from "axios";
import { createContext, useState } from "react";

export const AxiosCookieIdContext = createContext();

const AxiosCookieIdProvider = ({ children }) => {
    const [cookie, setCookie] = useState({})

    async function getCookie(cookieId) {
        try {
            const { data } = await axios.get(`http://localhost:5000/api/cookies/${cookieId}`);
            setPizza(data)
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