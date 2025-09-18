import React, { useState } from 'react';
import Section from './Section';
import { PORTFOLIO_PROJECTS } from '../constants';
import type { Project } from '../types';

const categories = ['Todos', 'Branding', 'Web', 'Ilustración'];

const Portfolio: React.FC = () => {
    const [activeFilter, setActiveFilter] = useState('Todos');
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    const filteredProjects = activeFilter === 'Todos'
        ? PORTFOLIO_PROJECTS
        : PORTFOLIO_PROJECTS.filter(p => p.category === activeFilter);
    
    return (
        <Section id="portfolio" className="bg-gray-800/50">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-white">
                    Mi <span className="text-cyan-400">Portafolio</span>
                </h2>
                <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
                    Aquí hay una selección de proyectos en los que he trabajado. Cada uno es un reto que asumí con pasión y dedicación.
                </p>
            </div>
            <div className="flex justify-center flex-wrap gap-2 md:gap-4 mb-12">
                {categories.map(category => (
                    <button
                        key={category}
                        onClick={() => setActiveFilter(category)}
                        className={`px-4 py-2 text-sm md:text-base font-semibold rounded-full transition-all duration-300 ${
                            activeFilter === category
                                ? 'bg-cyan-400 text-gray-900'
                                : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                        }`}
                    >
                        {category}
                    </button>
                ))}
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProjects.map(project => (
                    <div
                        key={project.id}
                        className="group relative overflow-hidden rounded-lg cursor-pointer"
                        onClick={() => setSelectedProject(project)}
                    >
                        <img src={project.imageUrl} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                           <div>
                            <span className="text-sm bg-cyan-400 text-gray-900 px-2 py-1 rounded-full">{project.category}</span>
                             <h3 className="text-xl font-bold text-white mt-2">{project.title}</h3>
                           </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Modal for project details */}
            {selectedProject && (
                 <div 
                    className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4"
                    onClick={() => setSelectedProject(null)}
                >
                    <div 
                        className="bg-gray-800 rounded-lg max-w-3xl w-full mx-auto overflow-hidden relative border border-cyan-400/30 custom-shadow"
                        onClick={e => e.stopPropagation()}
                    >
                        <img src={selectedProject.imageUrl.replace('/600/400', '/800/500')} alt={selectedProject.title} className="w-full h-64 object-cover"/>
                        <div className="p-8">
                            <span className="text-sm bg-cyan-400 text-gray-900 px-3 py-1 rounded-full">{selectedProject.category}</span>
                            <h3 className="text-3xl font-bold text-white mt-4 mb-2">{selectedProject.title}</h3>
                            <p className="text-gray-300">{selectedProject.description}</p>
                        </div>
                         <button 
                            onClick={() => setSelectedProject(null)}
                            className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                        </button>
                    </div>
                </div>
            )}
        </Section>
    );
};

export default Portfolio;