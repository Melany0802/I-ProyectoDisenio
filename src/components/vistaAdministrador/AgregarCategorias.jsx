import Header from "../Header"
import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"
import toast, { Toaster } from "react-hot-toast";

function AgregarCategorias() {
    const navigate = useNavigate()

    const [name, setName] = useState("");
    const [imagen, setImagen] = useState("");
   
    function handleVerify(e) {
        e.preventDefault();

        if (!name || !imagen) {
            toast.error("Por favor, completa todos los campos");
            return

        } else {
            registrarCategoria()
        }

    }


    const url = 'https://api.escuelajs.co/api/v1/categories'

    const registrarCategoria = async () => {
        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: name,
                    image: imagen,
                }),
            });

            if (response.ok) {
                const data = await response.json();
                console.log('Success:', data);
                toast.success('Se registró con éxito');
                navigate("/view-categories");
            } else {
                const errorData = await response.json();
                console.error('Error:', errorData);
                toast.error('Hubo un error al registrar la categoría');
            }
        } catch (error) {
            console.error('Error:', error);
            toast.error('Hubo un error al realizar la solicitud');
        }
    };



    return (
        <div>
            <div>
                <div className=" border border-orange-600">
                    <Header />

                </div>
                <div className="flex justify-center items-center h-screen">
                    <div className="flex gap-10 rounded-lg shadow-lg">
                        <div className="flex justify-center items-center">
                            <img src="/addCategories.jpg" alt="" />
                        </div>

                        <div className="flex w-1/2 justify-center items-center flex-col pr-12">
                            <h1 className="font-bold text-2xl">Agregar Categorías</h1>
                            <form className="w-full py-10 " onSubmit={handleVerify}>
                                <div className="mb-5">
                                    <label className="block text-gray-700 font-bold normal-case">
                                        Nombre Categoría
                                    </label>

                                    <input
                                        type="text"
                                        placeholder="Nombre de la categoría"
                                        className="placeholder-gray-400 rounded-md border-2 w-full p-2 mt-2"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                </div>
                                <div className="mb-5">
                                    <label className="block text-gray-700 font-bold normal-case">
                                        Imagen Categoría
                                    </label>

                                    <input
                                        type="string"
                                        placeholder="Link de la categoría"
                                        className="placeholder-gray-400 rounded-md border-2 w-full p-2 mt-2"
                                        value={imagen}
                                        onChange={(e) => setImagen(e.target.value)}
                                    />
                                </div>

                                <input
                                    type="submit"
                                    className="bg-blue-400 uppercase text-white font-bold w-full p-3 mt-10 hover:bg-blue-500 
                                                cursor-pointer transition-all"
                                    value="Agregar"
                                />
                            </form>

                            
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default AgregarCategorias