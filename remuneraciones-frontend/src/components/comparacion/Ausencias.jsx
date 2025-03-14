import React from "react";

const Ausencias = ({ dataB }) => {
    const ausencias = dataB
        .filter(row => row["Fecha Inicio Ausencia"] && row["Fecha Fin Ausencia"])
        .map(empleado => ({
            nombre: empleado["Nombre"],
            rut: empleado["Rut del Trabajador"],
            cargo: empleado["Cargo"] || "",
            centroCosto: empleado["Centro de Costo"] || "",
            sucursal: empleado["Sucursal"] || "",
            fechaInicio: empleado["Fecha Inicio Ausencia"] || "",
            fechaFin: empleado["Fecha Fin Ausencia"] || "",
            dias: empleado["Días"] || "",
            tipoAusentismo: empleado["Tipo de Ausentismo"] || "",
        }));

    return (
        <div>
            {ausencias.length > 0 ? (
                <table className="w-full border-collapse">
                    <thead>
                        <tr className="bg-gray-700">
                            <th className="p-2">Nombre</th>
                            <th className="p-2">Rut</th>
                            <th className="p-2">Cargo</th>
                            <th className="p-2">Centro de Costo</th>
                            <th className="p-2">Sucursal</th>
                            <th className="p-2">Fecha Inicio</th>
                            <th className="p-2">Fecha Fin</th>
                            <th className="p-2">Días</th>
                            <th className="p-2">Tipo de Ausentismo</th>
                        </tr>
                    </thead>
                    <tbody>
                        {ausencias.map((row, index) => (
                            <tr key={index} className="border-b border-gray-600">
                                {Object.values(row).map((value, i) => (
                                    <td key={i} className="p-2">{value}</td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <p className="text-gray-400">No hay ausencias registradas en este periodo.</p>
            )}
        </div>
    );
};

export default Ausencias;
