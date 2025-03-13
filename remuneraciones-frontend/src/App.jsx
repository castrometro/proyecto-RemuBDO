import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
/* import UploadNovedades from './pages/UploadNovedades';
import Incidencias from './pages/Incidencias'; */
import Login from './pages/Login';

function App() {
    return (
        <Router>
            <Routes>
                {/* Página de Login sin Layout */}
                <Route path="/login" element={<Login />} />

                {/* Páginas con Layout */}
                <Route path="/" element={<Layout />}>
                    <Route index element={<Dashboard />} />
                    {/* <Route path="upload" element={<UploadNovedades />} />
                    <Route path="incidencias" element={<Incidencias />} /> */}
                </Route>
            </Routes>
        </Router>
    );
}

export default App;

