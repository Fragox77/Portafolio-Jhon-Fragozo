import React from 'react';
import { LinkedInIcon, BehanceIcon, InstagramIcon } from './icons/SocialIcons';

const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-900 border-t border-gray-800">
            <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
                <p className="text-gray-400 text-sm">&copy; {new Date().getFullYear()} Jhon Fragozo. Todos los derechos reservados.</p>
                <div className="flex space-x-6">
                    <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                        <LinkedInIcon className="w-6 h-6"/>
                    </a>
                    <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                        <BehanceIcon className="w-6 h-6"/>
                    </a>
                    <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                        <InstagramIcon className="w-6 h-6"/>
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;