import React from 'react';
import { useNavigate} from 'react-router-dom';

export default function LoginForm() {
    const Navigate = useNavigate();
    const entrar = () => {
        alert('Ingresando...');
        //redireccionar a la nueva pagina -> menu
        Navigate('/menu');
    }

    return (
        <div className="bg-gray-100 px-10 py-10 rounded-3xl border-2 border-black max-w-md mx-auto shadow-lg">
            {/* Título */}
            <h1 className="text-4xl font-bold text-black text-center">Iniciar Sesión</h1>
            <p className="text-gray-500 text-center mt-2">Ingrese sus datos de cuenta BDO</p>

            {/* Formulario */}
            <div className="mt-8 space-y-6">
                {/* Email */}
                <div>
                    <label className="text-lg font-medium text-black">Email</label>
                    <input
                        className="w-full border-2 border-gray-300 rounded-xl p-4 mt-1 bg-white focus:outline-none focus:border-blue-500"
                        type="email"
                        placeholder="hola@bdo.cl"
                    />
                </div>

                {/* Contraseña */}
                <div>
                    <label className="text-lg font-medium text-black">Contraseña</label>
                    <input
                        className="w-full border-2 border-gray-300 rounded-xl p-4 mt-1 bg-white focus:outline-none focus:border-blue-500"
                        type="password"
                        placeholder="Ingrese su contraseña"
                    />
                </div>

                {/* Recordar y Olvidó contraseña */}
                <div className="flex items-center justify-between">
                    <div className="flex items-center">
                        <input type="checkbox" id="remember" className="w-4 h-4 text-red-600 focus:ring-red-500 border-gray-300 rounded" />
                        <label htmlFor="remember" className="ml-2 text-black text-sm">Recordar</label>
                    </div>
                    <button className="text-blue-600 hover:underline text-sm">¿Olvidó su contraseña?</button>
                </div>

                {/* Botón de Login */}
                <div className="mt-4">
                    <button className="w-full bg-red-600 text-white text-lg font-semibold py-3 rounded-xl hover:bg-red-700 transition-all " onClick={entrar}>
                        Iniciar Sesión
                    </button>
                </div>
            </div>
        </div>
    );
}
