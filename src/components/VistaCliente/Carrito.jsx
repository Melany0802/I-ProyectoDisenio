import { useCarrito } from "../CarritoContext";
import Header from "../Header";

function Carrito() {
    const { carrito, eliminarDelCarrito } = useCarrito();

    return (
        <div>
            <div className="">
                <Header />
            </div>

            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-center">
                {carrito.length === 0 ? (
                    <h1 className="text-3xl font-extrabold text-center text-gray-800 my-8">No hay productos en el carrito</h1>

                ) : (
                    carrito.map((producto) => (
                        <li key={producto.id} className="bg-white rounded-lg shadow-lg p-4">
                            <img
                                className="w-full h-36 object-cover object-center"
                                src={producto.image}
                                alt={producto.title}
                            />
                            <h2 className="text-lg font-bold">{producto.title}</h2>
                            <p className="text-gray-700 mb-2">${producto.price}</p>

                            <button onClick={() => eliminarDelCarrito(producto.id)} className="bg-red-500 text-white font-bold p-2 rounded mt-2 hover:bg-red-600 cursor-pointer transition-all">
                                Eliminar
                            </button>
                        </li>
                    ))
                )}
            </ul>
            <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 mb-4">
                <button
                    className="bg-rose-400 text-white font-bold p-2 rounded-lg ml-2 hover:bg-rose-300 cursor-pointer transition-all"
                    onClick={() => window.history.back()}
                >
                    Volver
                </button>
            </div>
        </div>
    );
}

export default Carrito;
