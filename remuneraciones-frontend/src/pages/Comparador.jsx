import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const Comparador = () => {
    const { id } = useParams();
    const [periodoA, setPeriodoA] = useState('Enero');
    const [periodoB, setPeriodoB] = useState('Febrero');

    return (
        <div className="text-white">
            <h1 className="text-3xl font-bold">Comparador - Cliente {id}</h1>

            <div className="mt-6 bg-gray-800 p-6 rounded-lg shadow-lg">
                <h2 className="text-xl font-semibold">Seleccione los periodos a comparar</h2>

                <div className="flex gap-4 mt-4">
                    <select className="bg-gray-700 p-2 rounded" value={periodoA} onChange={(e) => setPeriodoA(e.target.value)}>
                        <option>Enero</option>
                        <option>Febrero</option>
                        <option>Marzo</option>
                    </select>

                    <select className="bg-gray-700 p-2 rounded" value={periodoB} onChange={(e) => setPeriodoB(e.target.value)}>
                        <option>Enero</option>
                        <option>Febrero</option>
                        <option>Marzo</option>
                    </select>
                </div>

                {/* Aquí se mostraría la comparación visualmente */}
                <div className="mt-6 p-4 bg-gray-900 rounded">
                    <p>Comparando {periodoA} vs {periodoB}</p>
                    <p className="text-green-400">+5% aumento en remuneraciones</p>
                </div>
            </div>
        </div>
    );
};

export default Comparador;
