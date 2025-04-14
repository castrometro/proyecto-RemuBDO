import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Clientes = () => {
    const [clientes, setClientes] = useState([]);

    useEffect(() => {
        fetch('/data/clientes.json')  // ✅ Ruta corregida
            .then((response) => {
                if (!response.ok) {
                    throw new Error('No se pudo cargar el archivo JSON');
                }
                return response.json();
            })
            .then((data) => setClientes(data))
            .catch((error) => console.error("Error al cargar clientes:", error));
    }, []);

    return (
        <div className="text-white">
            <h1 className="text-3xl font-bold mb-6">Lista de Clientes</h1>

            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                {clientes.length === 0 ? (
                    <p className="text-gray-300">Cargando clientes...</p>
                ) : (
                    <table className="w-full text-left">
                        <thead>
                            <tr className="border-b border-gray-700">
                                <th className="p-2">Cliente</th>
                                <th className="p-2 text-center">Verificado</th>
                                <th className="p-2 text-center">Acción</th>
                            </tr>
                        </thead>
                        <tbody>
                            {clientes.map((cliente) => (
                                <tr key={cliente.id} className="border-b border-gray-700">
                                    <td className="p-2">{cliente.nombre}</td>
                                    <td className="p-2 text-center">
                                        {cliente.verificado ? (
                                            <span className="text-green-500">✔️</span>
                                        ) : (
                                            <span className="text-red-500">❌</span>
                                        )}
                                    </td>
                                    <td className="p-2 text-center">
                                        <Link to={`/menu/clientes/${cliente.id}`} className="text-blue-400 hover:underline">
                                            Ver Cliente
                                        </Link>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>
        </div>
    );
};

export default Clientes;
