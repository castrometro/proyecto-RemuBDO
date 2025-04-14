import React from 'react';
import LoginForm from '../components/LoginForm';
import Header_login from '../components/Header_login';

const Login = () => {
    return (
        <div className="flex flex-col w-full h-screen overflow-hidden bg-gray-900 text-gray-100">
            {/* Fondo con gradiente y desenfoque */}
            <div className="fixed inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 opacity-80"></div>
                <div className="absolute inset-0 backdrop-blur-sm"></div>
            </div>

            {/* Contenido principal */}
            <div className="relative z-10 flex flex-col h-full">
                {/* Agregar Header */}
                <Header_login />

                {/* Contenedor del Login */}
                <div className="flex flex-grow items-center justify-center">
                    <LoginForm />
                </div>
            </div>
        </div>
    );
};

export default Login;
