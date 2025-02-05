import { useState } from "react";
import AuthContext from "./AuthContext";
import { authenticateUser } from "../services/api";

export const AuthProvider = ({children}) => {
    const [token, setToken] = useState("");

    const login = async (username, password) => {
        const newToken = await authenticateUser(username, password);
        if (newToken) {
            setToken(newToken);
        }
    };

    return (
        <AuthContext.Provider value={{token, login}}>
            {children}
        </AuthContext.Provider>
    );
};
