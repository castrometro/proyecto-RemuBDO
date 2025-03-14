import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Clientes from './pages/Clientes';
import ClienteMenu from './pages/ClienteMenu';
import Comparador from './pages/Comparador';
import Comparacion from './pages/Comparacion'; // Importamos la nueva página
import Login from './pages/Login';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/" element={<Layout />}>
                    <Route index element={<Clientes />} />
                    <Route path="clientes/:id" element={<ClienteMenu />} />
                    <Route path="clientes/:id/comparador" element={<Comparador />} />
                    <Route path="comparacion" element={<Comparacion />} /> {/* Nueva ruta para comparación */}
                </Route>
            </Routes>
        </Router>
    );
}

export default App;
