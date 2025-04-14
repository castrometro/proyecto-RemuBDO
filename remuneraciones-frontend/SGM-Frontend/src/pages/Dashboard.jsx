import React from 'react';

const Dashboard = () => {
    return (
        <div className="text-white">
            <h1 className="text-3xl font-bold mb-6">Dashboard</h1>

            {/* Tarjeta de bienvenida */}
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                <h2 className="text-xl font-semibold">¡Bienvenido!</h2>
                <p className="text-gray-300 mt-2">
                    Este es un ejemplo de dashboard con un diseño sencillo.
                </p>
            </div>

            {/* Grid con estadísticas de ejemplo */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                <div className="bg-gray-800 p-4 rounded-lg shadow-md text-center">
                    <h3 className="text-lg font-semibold">Usuarios</h3>
                    <p className="text-2xl font-bold">125</p>
                </div>
                <div className="bg-gray-800 p-4 rounded-lg shadow-md text-center">
                    <h3 className="text-lg font-semibold">Ventas</h3>
                    <p className="text-2xl font-bold">$12,300</p>
                </div>
                <div className="bg-gray-800 p-4 rounded-lg shadow-md text-center">
                    <h3 className="text-lg font-semibold">Proyectos</h3>
                    <p className="text-2xl font-bold">8</p>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
