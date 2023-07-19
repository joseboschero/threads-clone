import React from "react";

function Login() {
  return (
    <>
      <div className="w-full h-3/4 flex justify-center">
        <img src="LoginImg.png" alt="Login-Image" className="w-auto h-full" />
      </div>
      <div className="max-w-sm h-1/4 p-6">
        <div>
          <span className="text-zinc-800">Iniciar sesión con Instragram</span>
          <span className="text-white">joseeboschero</span>
          {/* instagram logo */}
          <span className="text-zinc-800">Cambiar de cuenta</span>
        </div>
      </div>
    </>
  );
}

export default Login;
