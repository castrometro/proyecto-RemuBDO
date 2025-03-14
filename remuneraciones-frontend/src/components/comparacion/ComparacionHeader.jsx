import React from "react";

const ComparacionHeader = ({ mesA, mesB, tab, setTab }) => {
    const insights = {
        resumen: "📌 Resumen General",
        sueldos: "📊 Comparación de Sueldos",
        contrataciones: "🆕 Nuevas Contrataciones",
        cancelaciones: "🔻 Nuevas Cancelaciones",
        ausencias: "🚫 Ausencias",
    };

    return (
        <div className="w-full bg-gray-900 p-4 fixed top-0 z-10 shadow-lg">
            <h1 className="text-2xl font-bold text-center text-white">
                Comparación: {mesA} vs {mesB}
            </h1>
            <div className="flex justify-center space-x-4 mt-3">
                {Object.keys(insights).map(key => (
                    <button
                        key={key}
                        className={`px-4 py-2 rounded-md transition ${
                            tab === key ? "bg-blue-600" : "bg-gray-700"
                        }`}
                        onClick={() => setTab(key)}
                    >
                        {insights[key]}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default ComparacionHeader;
