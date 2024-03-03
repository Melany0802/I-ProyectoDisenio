import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react"
import Header from "../Header";

function VisualizarCategorias() {
    const [categories, setCategories] = useState([]);
    useEffect(() => {

        getAllCategories();
    });

    const getAllCategories = async () => {
        try {
            const response = await fetch(`https://api.escuelajs.co/api/v1/categories`);
            const data2 = await response.json();
            setCategories(data2);
        } catch (error) {
            console.error('Error:', error);
            toast.error('Hubo un error al cargar las categorías');
        }
    }
    return (
        <div>
            <div>
                <div className=" border border-orange-600">
                    <Header />

                </div>
                <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-center">
                    {categories.map((category) => (
                        <li key={category.id} className="p-4 flex">
                            <div className="bg-white rounded p-6 shadow ">
                                <h2 className="text-xl font-bold mb-2">{category.name}</h2>
                                <img src={category.image} className="h-48 object-cover mb-4 rounded-lg" />
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )

}

export default VisualizarCategorias;