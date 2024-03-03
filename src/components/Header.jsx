import { Link, useNavigate } from "react-router-dom";
import { useState } from 'react';

function Header() {
    const [menuOpen, setMenuOpen] = useState(false); // Ya lo tienes definido
    const navigate = useNavigate();

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    function cerrarSesion() {
        navigate("/");
        toast.success("Sesión cerrada con éxito");

    }

    return (
        <div className="flex justify-between items-center py-4 px-6 bg-rose-400 text-white">
            <div className="flex-1">
                <div className="flex items-center justify-center">
                    <div className="text-2xl font-bold mr-10">
                        <Link to="/">Nombre de la Aplicación</Link>
                    </div>
                </div>
            </div>

            <div className="flex mr-24 items-center">
                <div className="mr-4">
                    <Link to="/carrito">
                        <img src="/carrito-de-compras.png" alt="Carrito de compras" className="w-8 h-8" />
                    </Link>
                </div>
                <div onClick={toggleMenu} className="relative">
                    <img src="/usuario-de-perfil.png" alt="Perfil de usuario" className="w-8 h-8 cursor-pointer" />
                    {menuOpen && (
                        <div className="absolute right-0 mt-2 py-2 w-48 bg-white rounded-md shadow-xl z-20">
                            <Link to="/on-line-shop" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Vista Cliente</Link>
                            <Link to="/view-administrator" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Vista Administrador</Link>
                            <button onClick={cerrarSesion} className="w-full text-left block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Cerrar sesión</button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Header;
