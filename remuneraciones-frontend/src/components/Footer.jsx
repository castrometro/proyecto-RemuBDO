import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-6">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
                {/* Menú de enlaces */}
                <ul className="flex flex-wrap justify-center md:justify-start space-x-6 text-sm">
                    <li><Link to="/contacto" className="hover:underline">Contacto</Link></li>
                    <li><Link to="/ubicaciones" className="hover:underline">Ubicaciones</Link></li>
                    <li><Link to="/reglamento" className="hover:underline">Reglamento Interno</Link></li>
                    <li><Link to="/privacidad" className="hover:underline">Políticas de Privacidad</Link></li>
                    <li><Link to="/terminos" className="hover:underline">Términos y Condiciones</Link></li>
                </ul>

                {/* Redes Sociales */}
                <div className="flex space-x-4 mt-4 md:mt-0">
                    <a href="https://www.linkedin.com/company/bdo-chile" target="_blank" rel="noopener noreferrer">
                        <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="LinkedIn" className="h-6"/>
                    </a>
                    <a href="https://twitter.com/bdo_Chile" target="_blank" rel="noopener noreferrer">
                        <img src="https://cdn-icons-png.flaticon.com/512/733/733579.png" alt="Twitter" className="h-6"/>
                    </a>
                    <a href="https://www.youtube.com/@bdo_chile" target="_blank" rel="noopener noreferrer">
                        <img src="https://cdn-icons-png.flaticon.com/512/1384/1384060.png" alt="YouTube" className="h-6"/>
                    </a>
                    <a href="https://www.instagram.com/bdocl/" target="_blank" rel="noopener noreferrer">
                        <img src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png" alt="Instagram" className="h-6"/>
                    </a>
                </div>
            </div>

            {/* Copyright */}
            <div className="text-center text-xs mt-4">
                © 2025 BDO Auditores & Consultores Ltda. Todos los derechos reservados.
            </div>
        </footer>
    );
};

export default Footer;
