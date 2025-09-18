import React from 'react';
import Section from './Section';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
    return (
        <Section id="services">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-white">
                    Mis <span className="text-cyan-400">Servicios</span>
                </h2>
                <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
                    Ofrezco una gama de servicios de diseño para cubrir todas tus necesidades visuales, desde la creación de una marca hasta su despliegue digital.
                </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {SERVICES.map((service, index) => (
                    <div
                        key={service.id}
                        className="bg-gray-800 p-8 rounded-xl border border-gray-700 hover:border-cyan-400/50 hover:-translate-y-2 transition-all duration-300 group custom-shadow"
                        style={{ animationDelay: `${index * 100}ms` }}
                    >
                        <service.icon className="h-12 w-12 text-cyan-400 mb-6 transition-transform duration-300 group-hover:scale-110"/>
                        <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                        <p className="text-gray-400">{service.description}</p>
                    </div>
                ))}
            </div>
        </Section>
    );
};

export default Services;