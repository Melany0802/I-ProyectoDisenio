import Login from "./components/Login";
import Registro from "./components/Registro";
import HomeAdministrador from "./components/vistaAdministrador/HomeAdministrador";
import VisualizarCategorias from "./components/vistaAdministrador/VisualizarCategorias";

import Principal from "./components/VistaCliente/Principal";

import { Toaster } from "react-hot-toast"; // Importa el componente Toaster

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";


function App() {
  return (
    <Router>
      <Toaster position="top-right" reverseOrder={true} /> {/* Agrega el componente Toaster aquí */}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/sing-in" element={<Registro />} />
        <Route path="/on-line-shop" element={<Principal />} />
        <Route path="/view-administrator" element={<HomeAdministrador />} />
        <Route path="/view-categories" element={<VisualizarCategorias />} />
        

      </Routes>
    </Router>
  )
}

export default App
