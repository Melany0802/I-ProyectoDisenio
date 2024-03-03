import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import Header from "../Header";

function Principal() {
    const [index, setIndex] = useState(0);
    const limit = 12;
    const navigate = useNavigate();
    const [products, setProducts] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [searchTerm, setSearchTerm] = useState(""); // Estado para almacenar el término de búsqueda

    const handleProductClick = (product) => {
        setSelectedProduct(product);
    };

    const handleCloseClick = () => {
        setSelectedProduct(null);
    };

    const handleNextPage = () => {
        setIndex((prevIndex) => prevIndex + limit);
    };

    const handlePrevPage = () => {
        setIndex((prevIndex) => Math.max(prevIndex - limit, 0));
    };

    useEffect(() => {
        getProducts();
    }, [index]);

    useEffect(() => {
        // Llama a la función de búsqueda cada vez que cambia el término de búsqueda
        searchProducts(searchTerm);
    }, [searchTerm]);

    const getProducts = async () => {
        try {
            const response = await fetch(
                `https://api.escuelajs.co/api/v1/products?offset=${index}&limit=${limit}`
            );
            const data = await response.json();
            setProducts(data);
        } catch (error) {
            console.error("Error:", error);
            toast.error("Hubo un error al cargar los productos");
        }
    };

    // Función para buscar productos basados en el término de búsqueda
    const searchProducts = async (term) => {
        try {
            const response = await fetch(
                `https://api.escuelajs.co/api/v1/products?title=${term}`
                
            
            );
            const data = await response.json();
            setProducts(data);
        } catch (error) {
            console.error("Error:", error);
            toast.error("Hubo un error al buscar productos");
        }
    };
    
    

    return (
        <div>
            <div className="">
                <Header />
            </div>
            
            {/* Barra de búsqueda */}
            <div className="flex justify-center mt-5">
                <input
                    type="text"
                    placeholder="Buscar..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="px-3 py-2 border border-gray-300 rounded-lg"
                />
            </div>

            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-center">
                {products.map((product) => (
                    <li key={product.id} className="p-4">
                        <div className="bg-white rounded p-6 shadow">
                            <img
                                onClick={() => handleProductClick(product)}
                                src={product.image}
                                className="h-48 w-full object-cover mb-4 rounded-lg"
                            />
                            <h2 className="text-xl font-bold mb-2">{product.title}</h2>
                            <p className="text-gray-700 mb-2">${product.price.toFixed(2)}</p>
                        </div>
                    </li>
                ))}
            </ul>
            {selectedProduct && (
                <div className="bg-white rounded p-6 shadow fixed top-0 left-0 right-0 bottom-0 z-50 overflow-auto">
                    <div className="max-w-lg mx-auto">
                        <button
                            onClick={handleCloseClick}
                            className="absolute top-2 right-2 bg-gray-200 rounded-full p-2 text-gray-700 hover:bg-gray-300"
                        >
                            X
                        </button>
                        <h2 className="text-2xl font-bold mb-4">{selectedProduct.title}</h2>
                        <img src={selectedProduct.image} alt={selectedProduct.title} className="mb-4 rounded-lg" />
                        <p className="text-gray-700 mb-2">Precio: ${selectedProduct.price.toFixed(2)}</p>
                        <p className="text-gray-600 text-justify">{selectedProduct.description}</p>
                        <p className="text-gray-600 text-justify my-5">Categoría: {selectedProduct.category.name}</p>
                    </div>
                </div>
            )}
            <div className="flex justify-center items-center gap-5 ">
                <button
                    onClick={handlePrevPage}
                    className="bg-rose-400 uppercase text-white font-bold p-3 mt-8 hover:bg-rose-500 cursor-pointer transition-all"
                >
                    <Link to="/on-line-shop">Anterior</Link>
                </button>
                <button
                    onClick={handleNextPage}
                    className="bg-rose-400 uppercase text-white font-bold p-3 mt-8 hover:bg-rose-500 cursor-pointer transition-all"
                >
                    <Link to="/on-line-shop">Siguiente</Link>
                </button>
            </div>
            <Toaster position="top-right" reverseOrder={true} />
        </div>
    );
}

export default Principal;
