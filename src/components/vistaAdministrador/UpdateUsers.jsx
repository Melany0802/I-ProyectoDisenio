import { useEffect, useState } from "react";
import Header from "../Header";
import toast from "react-hot-toast";

function UpdateUsers() {
    const [editar, setEditar] = useState("");
    const [users, setUsers] = useState({ name: "", email: "" });

    useEffect(() => {
        getOneUser();
    }, [editar]);

    
    const getOneUser = async () => {
        try {
            const response = await fetch(`https://api.escuelajs.co/api/v1/users/${editar}`);
            const data = await response.json();
            setUsers(data);
        } catch (error) {
            console.error('Error:', error);
            toast.error('Hubo un error al cargar el usuario');
        }
    }


    

    const editarUsuarios = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`https://api.escuelajs.co/api/v1/users/${editar}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: users.email,
                    name: users.name
                }),
            });
            const data = await response.json();
            setUsers(data);
            if (data.message) toast.error(data.message);
            else toast.success('Usuario editado exitosamente');

        } catch (error) {
            console.error('Error:', error);
            toast.error('Hubo un error al editar el usuario');
        }
    }


    const handleVerify = async (e) => {
        e.preventDefault();
        await editarUsuarios(e);
    }

    return (
        <div>
            <div className=" border border-orange-600">
                <Header />
            </div>
            <div className="flex justify-normal items-center h-screen mx-28">
                <div className="flex rounded-lg shadow-lg">
                    <div className="flex justify-center items-center flex-col mx-10">
                        <h1 className="font-bold text-2xl flex justify-center items-center">Editar Usuarios</h1>
                        <form className="w-full py-10" onSubmit={handleVerify}>
                            <div className="mb-5">
                                <label className="block text-gray-700 font-bold normal-case">
                                    ID Usuario
                                </label>
                                <input
                                    type="text"
                                    placeholder="ID del Usuario"
                                    className="placeholder-gray-400 rounded-md border-2 w-full p-2 mt-2"
                                    value={editar}
                                    onChange={(e) => setEditar(e.target.value)}
                                />
                            </div>
                            <input
                                type="text"
                                value={users.name}
                                onChange={(e) => setUsers({ ...users, name: e.target.value })}
                                className="placeholder-gray-400 rounded-md border-2 w-full p-2 mt-2"
                            />
                            <input
                                type="text"
                                value={users.email}
                                onChange={(e) => setUsers({ ...users, email: e.target.value })}
                                className="placeholder-gray-400 rounded-md border-2 w-full p-2 mt-2"
                            />
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

export default UpdateUsers