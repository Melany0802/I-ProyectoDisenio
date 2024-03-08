import { useState } from "react";
import Header from "../Header";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

function EliminarCategoria() {
    const [eliminar, setEliminar] = useState("");
    const navigate = useNavigate();

    const eliminarCategorias = async () => {
        if (!eliminar.trim()) {
            toast.error("Por favor, ingresa un ID válido.");
            return;
        }

        const url = `https://api.escuelajs.co/api/v1/categories/${eliminar}`; // Aquí usamos el ID que se ingresa para completar la URL

        try {
            const response = await fetch(url, {
                method: 'DELETE', // Cambiamos el método a DELETE
            });

            if (response.ok) {
                toast.success('Categoría eliminada con éxito');
                navigate("/view-categories"); // Asegúrate de que esta ruta sea correcta en tu aplicación
            } else {
                const errorData = await response.json();
                console.error('Error:', errorData);
                toast.error('Hubo un error al intentar eliminar la categoría');
            }
        } catch (error) {
            console.error('Error:', error);
            toast.error('Hubo un error al realizar la solicitud');
        }
    };

    // Cambiamos el manejo del submit para llamar a eliminarCategorias
    const handleVerify = async (e) => {
        e.preventDefault();
        await eliminarCategorias(); // Llamamos a la función para eliminar la categoría
    }

    return (
        <div>
            <div className=" border border-orange-600">
                <Header />
            </div>
            <div className="flex justify-normal items-center h-screen mx-28">
                <div className="flex rounded-lg shadow-lg">

                    <div className="flex justify-center items-center flex-col mx-10">
                        <h1 className="font-bold text-2xl flex justify-center items-center">Eliminar Categorías</h1>
                        <form className="w-full py-10" onSubmit={handleVerify}>
                            <div className="mb-5">
                                <label className="block text-gray-700 font-bold normal-case">
                                    ID Categoría
                                </label>
                                <input
                                    type="text"
                                    placeholder="ID de la categoría"
                                    className="placeholder-gray-400 rounded-md border-2 w-full p-2 mt-2"
                                    value={eliminar}
                                    onChange={(e) => setEliminar(e.target.value)}
                                />
                            </div>
                            <button
                                type="submit"
                                className="bg-blue-400 uppercase text-white font-bold w-full p-3 mt-10 hover:bg-blue-500 cursor-pointer transition-all"
                            >
                                Eliminar
                            </button>
                        </form>
                    </div>
                </div>
                <div className="flex justify-center items-center">
                    <img src="/eliminar.jpg" alt="" className="mx-32 my-10  w-[30rem] h-[30rem] shadow-lg rounded-lg mx-72" />
                </div>
            </div>
        </div>
    );
}

export default EliminarCategoria;
