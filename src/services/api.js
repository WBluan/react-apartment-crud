

const apiBaseUrl = import.meta.env.VITE_APP_BASE_URL;
let token = ""
console.log(token)


export const authenticateUser = async (username, password) => {
    try {
        const response = await fetch(`${apiBaseUrl}/login`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ username, password })
        });

        console.log("Status da resposta:", response.status); 

        if (!response.ok) {
            throw new Error(`Erro ao fazer login: ${response.status} ${response.statusText}`);
        }

        const data = await response.json();

        if (!data.data || !data.data.token) {
            throw new Error("Token nao recebido pelo servidor")
        }
        console.log(data.data.token);
        
        return data.data.token;
    } catch (error) {
        console.error("Erro de login:", error.message);
        return "";
    }
};


export const fetchBlocks = (token) => {
    return fetch(`${apiBaseUrl}/blocks`, {
        headers: {
            Authorization: `Token ${token}`,
        },
    }).then((res) => res.json());
};

export const fetchApartments = (blockId, token) => {
    return fetch(`${apiBaseUrl}/apartments/${blockId}/block`, {
        headers: {
            Authorization: `Token ${token}`,
        },
    }).then((res) => res.json());
};