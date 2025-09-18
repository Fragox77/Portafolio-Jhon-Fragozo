import React from 'react';
import Section from './Section';
import { StrategyIcon, CreativityIcon, CollaborationIcon } from './icons/AboutIcons';

const About: React.FC = () => {
    return (
        <Section id="about" className="bg-gray-800/50">
            <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
                <div className="space-y-6">
                    <h2 className="text-3xl md:text-4xl font-bold text-white">
                        Sobre <span className="text-cyan-400">mí</span>
                    </h2>
                    <p className="text-gray-300 text-lg">
                        Soy Jhon Fragozo, un diseñador gráfico apasionado por la comunicación visual y la resolución creativa de problemas. Con más de 5 años de experiencia, mi misión es ayudar a marcas y emprendedores a contar su historia a través de un diseño impactante y funcional.
                    </p>
                    <p className="text-gray-300">
                        Creo firmemente que un buen diseño no solo es estético, sino también estratégico. Me sumerjo en cada proyecto para entender sus objetivos y entregar soluciones visuales que no solo se ven bien, sino que también generan resultados.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4">
                        <div className="text-center p-4 bg-gray-700/50 rounded-lg">
                            <StrategyIcon className="w-10 h-10 mx-auto mb-2 text-cyan-400"/>
                            <h3 className="font-semibold text-white">Enfoque Estratégico</h3>
                        </div>
                         <div className="text-center p-4 bg-gray-700/50 rounded-lg">
                            <CreativityIcon className="w-10 h-10 mx-auto mb-2 text-cyan-400"/>
                            <h3 className="font-semibold text-white">Creatividad Ilimitada</h3>
                        </div>
                         <div className="text-center p-4 bg-gray-700/50 rounded-lg">
                            <CollaborationIcon className="w-10 h-10 mx-auto mb-2 text-cyan-400"/>
                            <h3 className="font-semibold text-white">Colaboración Activa</h3>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center items-center">
                    <div className="relative w-full max-w-sm">
                        <div className="absolute -inset-1.5 bg-gradient-to-r from-cyan-400 to-cyan-600 rounded-full blur-xl opacity-50"></div>
                        <img
                            src="https://picsum.photos/seed/jhonfragozo/500/500"
                            alt="Jhon Fragozo"
                            className="relative w-full h-auto rounded-full object-cover border-4 border-gray-700"
                        />
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default About;