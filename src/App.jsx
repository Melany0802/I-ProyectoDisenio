import Login from "./components/Login";
import Registro from "./components/Registro";
import HomeAdministrador from "./components/vistaAdministrador/HomeAdministrador";
import VisualizarCategorias from "./components/vistaAdministrador/VisualizarCategorias";
import AgregarCategorias from "./components/vistaAdministrador/AgregarCategorias";
import Principal from "./components/VistaCliente/Principal";
import EliminarCategoria from "./components/vistaAdministrador/EliminarCategoria";
import UpdateUsers from "./components/vistaAdministrador/UpdateUsers";
import Carrito from "./components/VistaCliente/Carrito";
import { CarritoProvider } from './components/CarritoContext'

import { Toaster } from "react-hot-toast"; // Importa el componente Toaster

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import VisualizarUsuarios from "./components/vistaAdministrador/VisualizarUsuarios";
import UpdateCategories from "./components/vistaAdministrador/UpdateCategories";


function App() {
  return (
    <CarritoProvider>
      <Router>
        <Toaster position="top-right" reverseOrder={true} /> {/* Agrega el componente Toaster aquí */}
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/sing-in" element={<Registro />} />
          <Route path="/on-line-shop" element={<Principal />} />
          <Route path="/view-administrator" element={<HomeAdministrador />} />
          <Route path="/view-categories" element={<VisualizarCategorias />} />
          <Route path="/add-categories" element={<AgregarCategorias />} />
          <Route path="/delete-categories" element={<EliminarCategoria />} />
          <Route path="/view-users" element={<VisualizarUsuarios />} />
          <Route path="/update-categories" element={<UpdateCategories />} />
          <Route path="/update-users" element={<UpdateUsers />} />
          <Route path="/carrito" element={<Carrito />} />
          <Route path="*" element={<h1>Not Found</h1>} />

        </Routes>
      </Router>
    </CarritoProvider>
  )
}

export default App
