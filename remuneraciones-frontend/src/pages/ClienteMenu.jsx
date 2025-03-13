import React from 'react';
import { useParams, Link } from 'react-router-dom';

const ClienteMenu = () => {
    const { id } = useParams(); // Obtener ID del cliente desde la URL

    return (
        <div className="text-white">
            <h1 className="text-3xl font-bold">Cliente {id}</h1>

            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Indicadores (por definir) */}
                <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                    <h2 className="text-xl font-semibold">Indicadores</h2>
                    <p className="text-gray-300">Métricas y datos relevantes del cliente.</p>
                </div>

                {/* Acceso a comparador */}
                <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                    <h2 className="text-xl font-semibold">Comparador</h2>
                    <p className="text-gray-300">Comparar remuneraciones entre periodos.</p>
                    <Link
                        to={`/clientes/${id}/comparador`}
                        className="mt-3 inline-block bg-blue-600 px-4 py-2 rounded-lg text-white hover:bg-blue-700"
                    >
                        Ir al Comparador
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ClienteMenu;
