import Login from "./components/Login"
import Principal from "./components/Principal";
import Registro from "./components/Registro"

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/sing-in" element={<Registro />} />
        <Route path="/on-line-shop" element={<Principal />} />
      </Routes>
    </Router>
  )
}

export default App
