import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Clientes from './pages/Clientes';
import ClienteMenu from './pages/ClienteMenu';
import Comparador from './pages/Comparador';
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
                </Route>
            </Routes>
        </Router>
    );
}

export default App;

