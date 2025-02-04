

const apiBaseUrl = "https://172.31.150.146:8443/api-manager/v1"
const token = import.meta.env.VITE_APP_TOKEN;
console.log(token)


export const fetchBlocks = () => {
    return fetch(`${apiBaseUrl}/blocks`, {
        headers: {
            Authorization: `Token ${token}`,
        },
    }).then((res) => res.json());
};

export const fetchApartments = (blockId) => {
    return fetch(`${apiBaseUrl}/apartments/${blockId}/block`, {
        headers: {
            Authorization: `Token ${token}`,
        },
    }).then((res) => res.json());
};