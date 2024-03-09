import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import Header from "../Header";
import toast, { Toaster } from "react-hot-toast"; // Asegúrate de tener importado toast si deseas usarlo para mostrar notificaciones

function VisualizarCategorias() {
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(null); // Mejor usar singular ya que se selecciona una categoría a la vez
    const navigate = useNavigate();

    
    useEffect(() => {
        getAllCategories();
    }, []); // Asegúrate de pasar un arreglo vacío para evitar llamadas infinitas al servidor

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
    };

    const handleCloseClick = () => {
        setSelectedCategory(null);
    };

    const getAllCategories = async () => {
        try {
            const response = await fetch(`https://api.escuelajs.co/api/v1/categories`);
            const data = await response.json();
            setCategories(data);
        } catch (error) {
            console.error('Error:', error);
            toast.error('Hubo un error al cargar las categorías');
        }
    }

    return (
        <div>
            <div className="border border-orange-600">
                <Header />
            </div>
            <div className="my-10 flex justify-center items-center gap-10 ">
                <input
                onClick={() => navigate('/update-categories')}
                    type="submit"
                    className="bg-rose-400 uppercase text-white font-bold  p-3 rounded hover:bg-rose-500 
                                                cursor-pointer transition-all"
                    value="Editar Categorías"
                />
                <input
                    onClick={() => navigate('/delete-categories')}
                    type="submit"
                    className="bg-rose-400 uppercase text-white font-bold  p-3 rounded hover:bg-rose-500 
                                                cursor-pointer transition-all"
                    value="Eliminar Categorías"
                />

            </div>
            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-center">
                {categories.map((category) => (
                    <li key={category.id} className="p-4" onClick={() => handleCategoryClick(category)} style={{ cursor: 'pointer' }}> {/* Añade el evento onClick aquí */}
                        <div className="bg-white rounded p-6 shadow">
                            <h2 className="text-xl font-bold mb-2">{category.name}</h2>
                            <img src={category.image} alt={category.name} className="h-48 object-cover mb-4 rounded-lg" />

                        </div>
                    </li>
                ))}
            </ul>
            {selectedCategory && (
                <div className="bg-white rounded p-6 shadow fixed top-0 left-0 right-0 bottom-0 z-50 overflow-auto">
                    <div className="max-w-lg mx-auto">
                        <button
                            onClick={handleCloseClick}
                            className="absolute top-2 right-2 bg-gray-200 rounded-full p-2 text-gray-700 hover:bg-gray-300"
                        >
                            X
                        </button>
                        <h2 className="text-2xl font-bold mb-4">{selectedCategory.name}</h2>
                        <p className="text-xl font-bold mb-2">Id: {selectedCategory.id}</p>
                        <img src={selectedCategory.image} alt={selectedCategory.name} className="mb-4 rounded-lg" />

                        {/* Aquí puedes añadir más información de la categoría si está disponible */}
                    </div>
                </div>
            )}
            <Toaster position="top-right" reverseOrder={false} />
        </div>
    );
}

export default VisualizarCategorias;
