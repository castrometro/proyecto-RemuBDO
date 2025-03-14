import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as XLSX from "xlsx";

const Comparador = () => {
    const [files, setFiles] = useState([]);
    const [meses, setMeses] = useState([]);
    const [data, setData] = useState({});
    const [mesA, setMesA] = useState("");
    const [mesB, setMesB] = useState("");
    const navigate = useNavigate(); // Hook para navegar entre páginas

    // Manejar la carga de archivos
    const handleFileUpload = (event) => {
        const uploadedFiles = event.target.files;
        if (uploadedFiles.length !== 2) {
            alert("Por favor, selecciona dos archivos Excel.");
            return;
        }

        const newFiles = [];
        const newMeses = [];
        const newData = {};

        Array.from(uploadedFiles).forEach((file) => {
            const reader = new FileReader();
            reader.onload = (e) => {
                const workbook = XLSX.read(e.target.result, { type: "binary" });
                const sheetName = workbook.SheetNames[0];
                const sheet = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName]);

                console.log(`📂 Archivo cargado: ${file.name}`);
                console.log("🔍 Primeras filas del archivo:", sheet.slice(0, 5)); // Imprimir primeras filas

                // Detectar mes desde la columna "Mes"
                let detectedMes = "Desconocido";
                if (sheet.length > 0 && "Mes" in sheet[0]) {
                    const mesNumerico = sheet[0]["Mes"];
                    const mesesDict = {
                        1: "Enero", 2: "Febrero", 3: "Marzo", 4: "Abril",
                        5: "Mayo", 6: "Junio", 7: "Julio", 8: "Agosto",
                        9: "Septiembre", 10: "Octubre", 11: "Noviembre", 12: "Diciembre"
                    };
                    detectedMes = mesesDict[mesNumerico] || "Mes No Identificado";
                }

                newFiles.push(file.name);
                newMeses.push(detectedMes);
                newData[detectedMes] = sheet;

                if (newFiles.length === uploadedFiles.length) {
                    setFiles(newFiles);
                    setMeses(newMeses);
                    setData(newData);
                }
            };
            reader.readAsBinaryString(file);
        });
    };

    // Redirigir a la página de comparación con los meses seleccionados
    const handleComparar = () => {
        if (mesA && mesB && mesA !== mesB) {
            navigate(`/comparacion?mesA=${mesA}&mesB=${mesB}`);
        } else {
            alert("Selecciona dos meses distintos para comparar.");
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen text-white">
            <h1 className="text-4xl font-bold mb-6">Comparador de Remuneraciones</h1>

            {/* Botón de carga de archivos */}
            <label className="cursor-pointer bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold shadow-lg">
                📂 Seleccionar Archivos
                <input
                    type="file"
                    accept=".xlsx, .xlsm"
                    multiple
                    onChange={handleFileUpload}
                    className="hidden"
                />
            </label>

            {/* Mostrar archivos cargados */}
            {files.length > 0 && (
                <div className="bg-gray-800 p-6 rounded-lg shadow-lg mt-6 w-2/3">
                    <h2 className="text-xl font-semibold text-center">Archivos Cargados</h2>
                    <ul className="mt-4 space-y-2">
                        {files.map((file, index) => (
                            <li key={index} className="flex justify-between bg-gray-700 p-3 rounded-md">
                                <span className="text-gray-300">{file}</span>
                                <span className="text-green-400 font-semibold">{meses[index]}</span>
                            </li>
                        ))}
                    </ul>

                    {/* Selección de meses */}
                    <div className="mt-6">
                        <h2 className="text-lg font-semibold text-center mb-2">Selecciona los meses a comparar</h2>
                        <div className="flex justify-center space-x-4">
                            <select 
                                value={mesA} 
                                onChange={(e) => setMesA(e.target.value)}
                                className="bg-gray-700 p-2 rounded-md text-white"
                            >
                                <option value="">Seleccionar Mes</option>
                                {meses.map((mes, index) => (
                                    <option key={index} value={mes}>{mes}</option>
                                ))}
                            </select>

                            <select 
                                value={mesB} 
                                onChange={(e) => setMesB(e.target.value)}
                                className="bg-gray-700 p-2 rounded-md text-white"
                            >
                                <option value="">Seleccionar Mes</option>
                                {meses.map((mes, index) => (
                                    <option key={index} value={mes}>{mes}</option>
                                ))}
                            </select>
                        </div>

                        <button 
                            onClick={handleComparar} 
                            className="mt-4 bg-red-600 hover:bg-red-700 px-6 py-3 rounded-lg text-white font-semibold shadow-lg"
                        >
                            Comparar
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Comparador;

