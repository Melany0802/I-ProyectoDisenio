import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import Header from "../Header";
import toast, { Toaster } from "react-hot-toast"; 

function VisualizarUsuarios() {

    const [users, setUsers] = useState([]);

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