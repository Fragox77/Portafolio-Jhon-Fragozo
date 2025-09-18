import React, { useState } from 'react';
import Section from './Section';
import { MailIcon, PhoneIcon, LocationMarkerIcon } from './icons/ContactIcons';

const Contact: React.FC = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Basic validation
        if (!formData.name || !formData.email || !formData.message) {
            setStatus('Por favor, completa todos los campos.');
            return;
        }
        // Mock submission
        setStatus('¡Gracias! Tu mensaje ha sido enviado.');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setStatus(''), 3000);
    };

    return (
        <Section id="contact" className="bg-gray-800/50">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-white">
                    Hablemos de tu <span className="text-cyan-400">Proyecto</span>
                </h2>
                <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
                    ¿Tienes una idea en mente? Estoy aquí para ayudarte a hacerla realidad. Contáctame y empecemos a crear algo increíble juntos.
                </p>
            </div>
            <div className="grid md:grid-cols-2 gap-12">
                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label htmlFor="name" className="sr-only">Nombre</label>
                        <input type="text" name="name" id="name" placeholder="Tu Nombre" value={formData.name} onChange={handleChange} className="w-full bg-gray-700 border border-gray-600 rounded-md py-3 px-4 text-white focus:ring-cyan-400 focus:border-cyan-400" />
                    </div>
                     <div>
                        <label htmlFor="email" className="sr-only">Email</label>
                        <input type="email" name="email" id="email" placeholder="Tu Correo Electrónico" value={formData.email} onChange={handleChange} className="w-full bg-gray-700 border border-gray-600 rounded-md py-3 px-4 text-white focus:ring-cyan-400 focus:border-cyan-400" />
                    </div>
                     <div>
                        <label htmlFor="message" className="sr-only">Mensaje</label>
                        <textarea name="message" id="message" rows={5} placeholder="Cuéntame sobre tu proyecto..." value={formData.message} onChange={handleChange} className="w-full bg-gray-700 border border-gray-600 rounded-md py-3 px-4 text-white focus:ring-cyan-400 focus:border-cyan-400"></textarea>
                    </div>
                    <div>
                        <button type="submit" className="w-full bg-cyan-400 text-gray-900 font-bold py-3 px-8 rounded-full text-lg hover:bg-cyan-500 transition-all duration-300 transform hover:scale-105">
                            Enviar Mensaje
                        </button>
                    </div>
                    {status && <p className={`text-center ${status.includes('Gracias') ? 'text-cyan-400' : 'text-red-400'}`}>{status}</p>}
                </form>

                {/* Contact Info & Map */}
                <div className="space-y-8">
                    <div className="space-y-4">
                       <h3 className="text-xl font-semibold text-white">Información de Contacto</h3>
                       <div className="flex items-center space-x-4 text-gray-300">
                           <MailIcon className="w-6 h-6 text-cyan-400" />
                           <span>hola@jhonfragozo.com</span>
                       </div>
                        <div className="flex items-center space-x-4 text-gray-300">
                           <PhoneIcon className="w-6 h-6 text-cyan-400" />
                           <span>+57 300 123 4567</span>
                       </div>
                       <div className="flex items-center space-x-4 text-gray-300">
                           <LocationMarkerIcon className="w-6 h-6 text-cyan-400" />
                           <span>Bogotá, Colombia</span>
                       </div>
                    </div>
                    <div className="h-64 bg-gray-700 rounded-lg overflow-hidden border-2 border-gray-600">
                        {/* Placeholder for an interactive map */}
                        <img src="https://picsum.photos/seed/map/800/400" alt="Mapa" className="w-full h-full object-cover opacity-50"/>
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default Contact;