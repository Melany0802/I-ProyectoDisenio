import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "../Header";


function VisualizarUsuarios() {

    const [users, setUsers] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        getAllUsers();
    }, []);

    const getAllUsers = async () => {
        try {
            const response = await fetch(`https://api.escuelajs.co/api/v1/users`);
            const data = await response.json();
            setUsers(data);
        } catch (error) {
            console.error('Error:', error);
            toast.error('Hubo un error al cargar los usuarios');
        }
    }

    

    return (
        <div>
            <div className="border border-orange-600">
                <Header />
            </div>
            <div className="my-10 flex justify-center items-center gap-10 ">

            <button onClick={() => navigate('/update-users')} className="bg-rose-400 uppercase text-white font-bold  p-3 rounded hover:bg-rose-500cursor-pointer transition-all">Editar Usuarios</button> 
            </div>                           
            <ul>
                {users.map((user) => (
                    <li key={user.id} className="p-4">
                        <div className="bg-white rounded p-6 shadow">
                            <p>Nombre: {user.name}</p>
                            <p>Email: {user.email}</p>
                            <p>Role: {user.role}</p>
                            <img src={user.avatar} alt="Avatar" width="100" height="200"/>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default VisualizarUsuarios;