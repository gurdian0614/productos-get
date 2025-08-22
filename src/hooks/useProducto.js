import { useState } from "react";

const useProducto = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const API_URL = "https://api.escuelajs.co/api/v1/products";

    const fetchProducts = async () => {
        try {
            const response = await fetch(API_URL);

            if (!response.ok) {
                throw new Error(`Error en la solicitud: ${response.status}`);
            }

            const data = await response.json();
            setProducts(data);
            setLoading(false);
        } catch (e) {
            console.error("Error al obtener los productos: ", e);
            setError(e.message);
            setLoading(false);
        }
    }

    return {
        fetchProducts,
        products,
        loading,
        error,
    }
}

export default useProducto;