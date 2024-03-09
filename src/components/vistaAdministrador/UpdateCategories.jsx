import { useEffect, useState } from "react";
import Header from "../Header";
import toast from "react-hot-toast";

function UpdateCategories() {
    const [editar, setEditar] = useState("");
    const [categorie, setCategorie] = useState({ name: "", image: "" });

    useEffect(() => {
        getOneCategory();
    }, [editar]);

    const getOneCategory = async () => {
        try {
            const response = await fetch(`https://api.escuelajs.co/api/v1/categories/${editar}`);
            const data = await response.json();
            setCategorie(data);
        } catch (error) {
            console.error('Error:', error);
            toast.error('Hubo un error al cargar la categoría');
        }
    }

    const editarCategorias = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`https://api.escuelajs.co/api/v1/categories/${editar}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: categorie.name,
                    image: categorie.image,
                }),
            });

            const data = await response.json();
            setCategorie(data);
            toast.success('Categoría editada exitosamente');
        } catch (error) {
            console.error('Error:', error);
            toast.error('Hubo un error al editar la categoría');
        }
    }

    const handleVerify = async (e) => {
        e.preventDefault();
        await editarCategorias(e);
    }

    return (
        <div>
            <div className=" border border-orange-600">
                <Header />
            </div>
            <div className="flex justify-normal items-center h-screen mx-28">
                <div className="flex rounded-lg shadow-lg">
                    <div className="flex justify-center items-center flex-col mx-10">
                        <h1 className="font-bold text-2xl flex justify-center items-center">Editar Categorías</h1>
                        <form className="w-full py-10" onSubmit={handleVerify}>
                            <div className="mb-5">
                                <label className="block text-gray-700 font-bold normal-case">
                                    ID Categoría
                                </label>
                                <input
                                    type="text"
                                    placeholder="ID de la categoría"
                                    className="placeholder-gray-400 rounded-md border-2 w-full p-2 mt-2"
                                    value={editar}
                                    onChange={(e) => setEditar(e.target.value)}
                                />
                            </div>
                            <input
                                type="text"
                                value={categorie.name}
                                onChange={(e) => setCategorie({ ...categorie, name: e.target.value })}
                                className="placeholder-gray-400 rounded-md border-2 w-full p-2 mt-2"
                            />
                            <input
                                type="text"
                                value={categorie.image}
                                onChange={(e) => setCategorie({ ...categorie, image: e.target.value })}
                                className="placeholder-gray-400 rounded-md border-2 w-full p-2 mt-2"
                            />
                            <img src={categorie ? categorie.image : ''} alt={categorie.name} className="mb-4 rounded-lg" />
                            <button
                                type="submit"
                                className="bg-blue-400 uppercase text-white font-bold w-full p-3 mt-10 hover:bg-blue-500 cursor-pointer transition-all"
                            >
                                Editar
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

export default UpdateCategories;
