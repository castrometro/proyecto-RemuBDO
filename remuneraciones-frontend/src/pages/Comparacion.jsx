import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import ComparacionHeader from "../components/comparacion/ComparacionHeader";
import Resumen from "../components/comparacion/Resumen";
import ComparacionSueldos from "../components/comparacion/ComparacionSueldos";
import NuevasContrataciones from "../components/comparacion/NuevasContrataciones";
import NuevasCancelaciones from "../components/comparacion/NuevasCancelaciones";
import Ausencias from "../components/comparacion/Ausencias";

const Comparacion = () => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const mesA = queryParams.get("mesA");
    const mesB = queryParams.get("mesB");

    const [tab, setTab] = useState("resumen");
    const [dataA, setDataA] = useState([]);
    const [dataB, setDataB] = useState([]);

    useEffect(() => {
        const storedDataA = JSON.parse(localStorage.getItem(`data_${mesA}`)) || [];
        const storedDataB = JSON.parse(localStorage.getItem(`data_${mesB}`)) || [];
        
        console.log("📂 Datos de Mes A:", storedDataA); // 👀 Verifica si hay datos en consola
        console.log("📂 Datos de Mes B:", storedDataB);
    
        setDataA(storedDataA);
        setDataB(storedDataB);
    }, [mesA, mesB]);
    

    return (
        <div className="flex flex-col items-center min-h-screen text-white">
            {/* HEADER FIJO */}
            <ComparacionHeader mesA={mesA} mesB={mesB} tab={tab} setTab={setTab} />

            {/* RENDERIZAR EL CONTENIDO SEGÚN LA PESTAÑA SELECCIONADA */}
            <div className="w-2/3 bg-gray-800 p-6 rounded-lg shadow-lg mt-28">
                {tab === "resumen" && <Resumen dataA={dataA} dataB={dataB} mesA={mesA} mesB={mesB} />}
                {tab === "sueldos" && <ComparacionSueldos dataA={dataA} dataB={dataB} />}
                {tab === "contrataciones" && <NuevasContrataciones dataA={dataA} dataB={dataB} />}
                {tab === "cancelaciones" && <NuevasCancelaciones dataA={dataA} dataB={dataB} />}
                {tab === "ausencias" && <Ausencias dataA={dataA} dataB={dataB} />}
            </div>
        </div>
    );
};

export default Comparacion;
