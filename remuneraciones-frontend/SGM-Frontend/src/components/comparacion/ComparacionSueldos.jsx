import React from "react";

const ComparacionSueldos = ({ dataA, dataB }) => {
    const mapA = Object.fromEntries(dataA.map(row => [row["Rut del Trabajador"], row]));
    const mapB = Object.fromEntries(dataB.map(row => [row["Rut del Trabajador"], row]));

    const sueldos = Object.keys({ ...mapA, ...mapB }).map(rut => {
        const empleadoA = mapA[rut] || {};
        const empleadoB = mapB[rut] || {};
        const sueldoA = empleadoA["Sueldo Base"] || 0;
        const sueldoB = empleadoB["Sueldo Base"] || 0;
        const variacion = sueldoB - sueldoA;
        const porcentajeReajuste = sueldoA ? ((variacion / sueldoA) * 100).toFixed(2) : "0";

        return sueldoA !== sueldoB
            ? { rut, sueldoA, sueldoB, porcentajeReajuste, variacion }
            : null;
    }).filter(Boolean);

    return (
        <table className="w-full border-collapse">
            <thead>
                <tr className="bg-gray-700">
                    <th className="p-2">Rut</th>
                    <th className="p-2">Sueldo Anterior</th>
                    <th className="p-2">Sueldo Actual</th>
                    <th className="p-2">% Reajuste</th>
                    <th className="p-2">Variación ($)</th>
                </tr>
            </thead>
            <tbody>
                {sueldos.map((row, index) => (
                    <tr key={index} className="border-b border-gray-600">
                        {Object.values(row).map((value, i) => (
                            <td key={i} className="p-2">{value}</td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default ComparacionSueldos;
