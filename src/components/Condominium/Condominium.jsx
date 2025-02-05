import { useEffect, useState } from "react";
import { fetchApartments, fetchBlocks } from "../../services/api";
import BlockList from "./BlockList";
import { useAuth } from "../../context/AuthContext";



export default function Condominium() {
    const { token } = useAuth();
    const [blocks, setBlocks] = useState([]);
    const [apartments, setApartments] = useState([]);

    useEffect(() => {
        if (token) {
            fetchBlocks(token).then((data) => setBlocks(data.data || []));
        }
    }, [token]);
    
    const handleFetchApartments = (blockId) => {
        if (apartments[blockId]) return;

        fetchApartments(blockId, token).then((data) => {
            setApartments((prev) => ({
                ...prev,
                [blockId]: data.data,
            }));
        });
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2x1 font-bold mb-4">Condomínio</h1>
            <BlockList blocks={blocks} apartments={apartments} onFetchApartments={handleFetchApartments}/>
        </div>
    );
}