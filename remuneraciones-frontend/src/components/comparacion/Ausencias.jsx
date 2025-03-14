import React, { useEffect, useState } from "react";

const calcularAusencias = (dataA, dataB) => {
    if ((!dataA || dataA.length === 0) && (!dataB || dataB.length === 0)) {
        console.warn("⚠️ No hay datos en los meses A y B para calcular ausencias.");
        return [];
    }

    console.log("📊 Analizando ausencias y licencias en ambos meses...");

    const procesarAusencias = (data, mes) => {
        return data.map(empleado => {
            const rut = empleado["Rut del Trabajador"] || "Desconocido";
            const nombre = empleado["Nombre"] || empleado["NombreCompleto"] || "Desconocido";

            // Obtener valores asegurando que sean enteros
            const diasAusencia = parseInt(empleado["Días Ausencia"] || "0", 10);
            const diasLicencia = parseInt(empleado["Días Licencia"] || "0", 10);

            return {
                rut,
                nombre,
                diasAusenciaA: mes === "Mes A" ? diasAusencia : 0,
                diasAusenciaB: mes === "Mes B" ? diasAusencia : 0,
                diasLicenciaA: mes === "Mes A" ? diasLicencia : 0,
                diasLicenciaB: mes === "Mes B" ? diasLicencia : 0
            };
        });
    };

    try {
        const ausenciasA = procesarAusencias(dataA || [], "Mes A");
        const ausenciasB = procesarAusencias(dataB || [], "Mes B");

        const resumen = {};

        // Incluir TODOS los empleados de ambos meses
        [...ausenciasA, ...ausenciasB].forEach(emp => {
            if (!resumen[emp.rut]) {
                resumen[emp.rut] = {
                    rut: emp.rut,
                    nombre: emp.nombre,
                    diasAusenciaA: 0,
                    diasAusenciaB: 0,
                    diasLicenciaA: 0,
                    diasLicenciaB: 0
                };
            }

            resumen[emp.rut].diasAusenciaA += emp.diasAusenciaA;
            resumen[emp.rut].diasAusenciaB += emp.diasAusenciaB;
            resumen[emp.rut].diasLicenciaA += emp.diasLicenciaA;
            resumen[emp.rut].diasLicenciaB += emp.diasLicenciaB;
        });

        // 🔥 FILTRAR empleados con 0 ausencias y 0 licencias en ambos meses
        const filtrado = Object.values(resumen).filter(emp => 
            emp.diasAusenciaA > 0 || emp.diasAusenciaB > 0 || 
            emp.diasLicenciaA > 0 || emp.diasLicenciaB > 0
        );

        console.log("✅ Ausencias calculadas correctamente:", filtrado);
        return filtrado;
    } catch (error) {
        console.error("❌ Error al calcular ausencias:", error);
        return [];
    }
};

const Ausencias = ({ dataA, dataB }) => {
    const [ausencias, setAusencias] = useState([]);

    useEffect(() => {
        if (!dataA || !dataB) {
            console.warn("⚠️ dataA o dataB no están definidos.");
        } else {
            const ausenciasCalculadas = calcularAusencias(dataA, dataB);
            setAusencias(ausenciasCalculadas);
        }
    }, [dataA, dataB]);

    return (
        <div className="p-6 bg-gray-800 rounded-lg shadow-lg w-full">
            <h2 className="text-2xl font-bold mb-4 text-white">Resumen de Ausencias y Licencias</h2>
            {ausencias.length === 0 ? (
                <p className="text-white">No se detectaron ausencias ni licencias.</p>
            ) : (
                <table className="w-full text-left border-collapse bg-gray-700 text-white">
                    <thead>
                        <tr className="bg-gray-900">
                            <th className="p-2 border">RUT</th>
                            <th className="p-2 border">Nombre</th>
                            <th className="p-2 border">Ausencias Mes A</th>
                            <th className="p-2 border">Ausencias Mes B</th>
                            <th className="p-2 border">Licencias Mes A</th>
                            <th className="p-2 border">Licencias Mes B</th>
                        </tr>
                    </thead>
                    <tbody>
                        {ausencias.map((empleado, index) => (
                            <tr key={index} className="bg-gray-600">
                                <td className="p-2 border">{empleado.rut}</td>
                                <td className="p-2 border">{empleado.nombre}</td>
                                <td className="p-2 border text-center">{empleado.diasAusenciaA}</td>
                                <td className="p-2 border text-center">{empleado.diasAusenciaB}</td>
                                <td className="p-2 border text-center">{empleado.diasLicenciaA}</td>
                                <td className="p-2 border text-center">{empleado.diasLicenciaB}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default Ausencias;
