import { Link, useNavigate } from "react-router-dom";
import Header from "../Header";

function HomeAdministrador() {
    const navigate = useNavigate();

    return (
        <div>
            <div className="">
                <Header />
            </div>
            <div className="  py-5 px-20">
                {/* Envuelve todo el contenido excepto el Header */}
                <div className="">
                    {/* Contenedor para botones y espacio para imagen */}
                    <div className="flex  ">
                        {/* Contenedor de botones */}
                        <div className="flex  gap-5">
                            <div className="my-40">
                                <input
                                    onClick={() => navigate('/view-categories')}
                                    type="submit"
                                    className="bg-rose-400 uppercase text-white font-bold w-full p-3 mt-10 hover:bg-rose-500 
                                                cursor-pointer transition-all"
                                    value="Visualizar Categorías"
                                />
                                <input
                                    type="submit"
                                    className="bg-rose-400 uppercase text-white font-bold w-full p-3 mt-10 hover:bg-rose-500 
                                                cursor-pointer transition-all"
                                    value="Agregar Categorías"
                                />
                            </div>
                            <div className="my-40">
                                <input
                                    type="submit"
                                    className="bg-rose-400 uppercase text-white font-bold w-full p-3 mt-10 hover:bg-rose-500 
                                                cursor-pointer transition-all"
                                    value="Editar Categorías"
                                />
                                <input
                                    type="submit"
                                    className="bg-rose-400 uppercase text-white font-bold w-full p-3 mt-10 hover:bg-rose-500 
                                                cursor-pointer transition-all"
                                    value="Eliminar Categorías"
                                />
                            </div>
                        </div>
                        {/* Contenedor para la imagen a la derecha */}
                        <div className="flex justify-end w-full">
                            <img src="/1.webp" alt="Descripción de la imagen" className="mx-32 my-10  w-[30rem] h-[30rem]" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomeAdministrador;
