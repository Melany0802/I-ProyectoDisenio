import { Link, useNavigate } from "react-router-dom"
import toast, { Toaster } from "react-hot-toast";


function Principal() {
    const navigate = useNavigate();

    function cerrarSesion() {
        navigate("/");
        toast.success("Sesión cerrada con éxito");

    }

    return (

        <div>
            <input
                type="submit"
                className="bg-rose-400 uppercase text-white font-bold  p-3 mt-8 hover:bg-rose-500 
              cursor-pointer transition-all"
                value="Cerrar Sesión"
                onClick={cerrarSesion}

            />
            <Toaster
                position="top-right"
                reverseOrder={true}
            />
        </div>
    )


}

export default Principal