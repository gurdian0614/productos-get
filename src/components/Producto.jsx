import useProducto from "../hooks/useProducto";
import { useEffect } from "react";

const Producto = () => {
    const {
        fetchProducts,
        products,
        loading,
        error,
    } = useProducto();

    useEffect(() => {
        fetchProducts();
    }, []);

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
            {
                products.map((product) => (
                    <div key={product.id} className="bg-white">
                        <img src={product.images[0]} alt={product.title} className="w-full h-48 object-cover" />

                        <div className="p-4">
                            <h3 className="text-lg font-semibold text-gray-800">{product.title}</h3>
                            <p className="text-2xl font-bold text-indigo-600 mt-2">
                               ${product.price.toFixed(2)} 
                            </p>
                            <p className="text-sm text-gray-500 mt-1">
                                {product.description}
                            </p> 
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default Producto;