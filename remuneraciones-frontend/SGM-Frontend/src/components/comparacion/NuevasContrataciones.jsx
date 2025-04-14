import React from "react";

const NuevasContrataciones = ({ dataA, dataB }) => {
    const empleadosA = new Set(dataA.map(row => row["Rut del Trabajador"]));
    const contrataciones = dataB
        .filter(row => !empleadosA.has(row["Rut del Trabajador"]))
        .map(empleado => ({
            rut: empleado["Rut del Trabajador"],
            nombre: empleado["Nombre"],
            cargo: empleado["Cargo"] || "",
            centroCosto: empleado["Centro de Costo"] || "",
            sucursal: empleado["Sucursal"] || "",
            fechaIngreso: empleado["Fecha Ingreso"] || "",
            tipoContrato: empleado["Tipo Contrato"] || "",
            sueldoBase: empleado["Sueldo Base"] || "",
        }));

    return (
        <div>
            {contrataciones.length > 0 ? (
                <table className="w-full border-collapse">
                    <thead>
                        <tr className="bg-gray-700">
                            <th className="p-2">Rut</th>
                            <th className="p-2">Nombre</th>
                            <th className="p-2">Cargo</th>
                            <th className="p-2">Centro de Costo</th>
                            <th className="p-2">Sucursal</th>
                            <th className="p-2">Fecha Ingreso</th>
                            <th className="p-2">Tipo Contrato</th>
                            <th className="p-2">Sueldo Base</th>
                        </tr>
                    </thead>
                    <tbody>
                        {contrataciones.map((row, index) => (
                            <tr key={index} className="border-b border-gray-600">
                                {Object.values(row).map((value, i) => (
                                    <td key={i} className="p-2">{value}</td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <p className="text-gray-400">No hay nuevas contrataciones en este periodo.</p>
            )}
        </div>
    );
};

export default NuevasContrataciones;
