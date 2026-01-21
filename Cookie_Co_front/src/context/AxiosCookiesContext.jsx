import axios from "axios";
import { createContext, useState } from "react";

export const AxiosCookiesContext = createContext();

const AxiosCookiesProvider = ({ children }) => {
    const [listaCookies, setListaCookies] = useState([])

    async function getCookiesList() {
        try {
            const data = (await axios.get('http://localhost:5000/api/cookies')).data;
            setListaCookies(data)
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <AxiosCookiesContext.Provider value={{ listaCookies, getCookiesList }}>
            { children }
        </AxiosCookiesContext.Provider>
    )
}

export default AxiosCookiesProvider;