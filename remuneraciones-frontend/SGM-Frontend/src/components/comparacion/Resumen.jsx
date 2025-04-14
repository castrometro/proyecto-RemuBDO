import React from "react";

const Resumen = ({ dataA, dataB, mesA, mesB }) => {
    const resumen = [
        { titulo: `Total empleados en ${mesA}`, valor: dataA.length },
        { titulo: `Total empleados en ${mesB}`, valor: dataB.length },
        { titulo: "Variación de empleados", valor: dataB.length - dataA.length },
        { titulo: "Total contrataciones", valor: dataB.length - dataA.length > 0 ? dataB.length - dataA.length : 0 },
        { titulo: "Total cancelaciones", valor: dataA.length - dataB.length > 0 ? dataA.length - dataB.length : 0 },
    ];

    return (
        <ul className="space-y-2">
            {resumen.map((item, index) => (
                <li key={index} className="flex justify-between bg-gray-700 p-3 rounded-md">
                    <span>{item.titulo}</span>
                    <span className="font-semibold text-blue-400">{item.valor}</span>
                </li>
            ))}
        </ul>
    );
};

export default Resumen;
