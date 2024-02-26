import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"
import toast, {Toaster} from "react-hot-toast";

function Login() {
  const navigate = useNavigate()

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleVerify(e){
    e.preventDefault();

    if(!email || !password){
      toast.error("Por favor, completa todos los campos");
      return
    }else if (password.length < 4) {
      toast.error("Mínimo de contraseña, 4 caracteres");
      return
    }else{
      authEmail()
    }  
    

  }

  const authEmail = async () => {
    try {
      const response = await fetch("https://api.escuelajs.co/api/v1/auth/login", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });
  
      const data = await response.json();
  
      if (response.ok) {
        console.log('Success:', data);
        toast.success('Inicio de sesión exitoso' + data.message);
        navigate("/on-line-shop");
      } else {
        console.log('Error:', data);
        toast.error('Error al iniciar sesión: ' + data.message);
      }
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
      toast.error('Hubo un error al iniciar sesión');
    }
  };
  
  



  return (
    <div className="flex justify-center items-center  h-screen">
      <div className="flex gap-10 rounded-lg shadow-lg">
        <div className="flex justify-center items-center w-[30rem] h-[30rem] ">
          <img src="/1.webp" alt=""  />
        </div>


        <div className="flex w-1/2 justify-center items-center flex-col pr-12">
          <h1 className="font-bold text-2xl">Bienvenido de Nuevo</h1>
          <form className="w-full  py-10  " onSubmit={handleVerify}>
            <div className="mb-5">
              <label className="block text-gray-700 font-bold normal-case">
                Correo Electrónico</label>

              <input
                type="email"
                placeholder="Correo electrónico"
                className="placeholder-gray-400 rounded-md border-2 w-full p-2 mt-2"
                value={email}
                onChange={(e) => setEmail(e.target.value)}

              />
            </div>
            <div className="mb-5">
              <label className="block text-gray-700 font-bold normal-case">
                Contraseña</label>

              <input
                type="password"
                placeholder="Contraseña"
                className="placeholder-gray-400 rounded-md border-2 w-full p-2 mt-2"
                value={password}
                onChange={(e) => setPassword(e.target.value)}

              />
            </div>

            <span className="block font-thin text-right">

              <Link to="/sing-in" className="">¿No tienes cuenta?</Link>
            </span>

            <input
              type="submit"
              className="bg-rose-400 uppercase text-white font-bold w-full p-3 mt-10 hover:bg-rose-500 
              cursor-pointer transition-all"
              value="Iniciar Sesión" />


          </form>
        </div>
      </div>

      <Toaster position= "top-right" reverseOrder={true} />

    </div>

  )
}

export default Login