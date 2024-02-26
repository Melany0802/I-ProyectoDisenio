import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"
import toast, { Toaster } from "react-hot-toast";


function Registro() {
  const navigate = useNavigate()

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [avatar, setAvatar] = useState("");

  function handleVerify(e) {
    e.preventDefault();

    if (!name || !email || !password || !avatar) {
      toast.error("Por favor, completa todos los campos");
      return
    } else if (password.length < 4) {
      toast.error("Mínimo de contraseña, 4 caracteres");
      return

    } else {
      registrarUsuario()

    }


  }

  const verifyEmail = async () => {
    try {
      const response = await fetch("https://api.escuelajs.co/api/v1/users/is-available", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: email }),
      });
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Error al verificar el correo electrónico');
      }

      if (!data.available) {
        toast.error('El correo electrónico ya está registrado');
      } else {
        // Si el correo electrónico no está registrado, continuar con el registro
        registerUser();
      }
    } catch (error) {
      console.error('Error al verificar el correo electrónico:', error.message);
      toast.error('Error al verificar el correo electrónico');
    }
  };



  const url = 'https://api.escuelajs.co/api/v1/users/'

  const registrarUsuario = async () => {
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: name,
          email: email,
          password: password,
          avatar: avatar,
        }),
      });
  
      if (response.ok) {
        const data = await response.json();
        console.log('Success:', data);
        toast.success('Se registró con éxito');
        navigate("/");
      } else {
        const errorData = await response.json();
        console.error('Error:', errorData);
        toast.error('Hubo un error al registrar el usuario');
      }
    } catch (error) {
      console.error('Error:', error);
      toast.error('Hubo un error al realizar la solicitud');
    }
  };
  


  return (
    <div className="flex justify-center items-center  h-screen ">
      <div className="flex gap-10 rounded-lg shadow-lg">
        <div className="flex justify-center items-center w-[30rem] h-[30rem] ">
          <img src="/1.webp" alt="" />
        </div>


        <div className="flex w-1/2 justify-center items-center flex-col pr-12">
          <h1 className="font-bold text-2xl">Registrarse</h1>
          <form className="w-full  py-10  " onSubmit={handleVerify}>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold normal-case">
                Nombre Completo</label>

              <input
                type="user"
                placeholder="Nombre Completo"
                className="placeholder-gray-400 rounded-md border-2 w-full p-2 mt-2"
                value={name}
                onChange={(e) => setName(e.target.value)}

              />
            </div>
            <div className="mb-4">
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
            <div className="mb-4">
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
            <div className="mb-4">
              <label className="block text-gray-700 font-bold normal-case">
                Avatar</label>

              <input
                type="string"
                placeholder="Link del avatar"
                className="placeholder-gray-400 rounded-md border-2 w-full p-2 mt-2"
                value={avatar}
                onChange={(e) => setAvatar(e.target.value)}

              />
            </div>

            <span className="block font-thin text-right">

              <Link to="/" className="">¿Ya tienes cuenta?</Link>
            </span>

            <input
              type="submit"
              className="bg-rose-400 uppercase text-white font-bold w-full p-3 mt-8 hover:bg-rose-500 
              cursor-pointer transition-all"
              value="Registrarse"
            />


          </form>
        </div>
      </div>

      <Toaster position="top-right" reverseOrder={true} />

    </div>
  )
}

export default Registro