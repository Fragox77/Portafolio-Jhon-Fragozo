import React, { useState, useEffect } from 'react';

const Hero: React.FC = () => {
    const [text, setText] = useState('');
    const roles = ['Diseñador Gráfico', 'Creador Visual', 'Solucionador Creativo'];
    const [roleIndex, setRoleIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [typingSpeed, setTypingSpeed] = useState(150);

    useEffect(() => {
        const handleTyping = () => {
            const currentRole = roles[roleIndex];
            const updatedText = isDeleting
                ? currentRole.substring(0, text.length - 1)
                : currentRole.substring(0, text.length + 1);

            setText(updatedText);

            if (!isDeleting && updatedText === currentRole) {
                // Pause at end
                setTimeout(() => setIsDeleting(true), 2000);
            } else if (isDeleting && updatedText === '') {
                setIsDeleting(false);
                setRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
            }
        };

        const timer = setTimeout(handleTyping, typingSpeed);
        
        // Adjust speed
        if (isDeleting) {
            setTypingSpeed(75);
        } else {
            setTypingSpeed(150);
        }

        return () => clearTimeout(timer);
    }, [text, isDeleting, roleIndex, roles, typingSpeed]);

    return (
        <section id="hero" className="h-screen flex items-center justify-center bg-gray-900 relative overflow-hidden">
             <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(34,211,238,0.1),transparent_70%)] [mask-image:linear-gradient(to_bottom,white_5%,transparent_80%)]"></div>
            <div className="text-center z-10 px-4">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-4">
                    Hola, soy Jhon Fragozo
                </h1>
                <h2 className="text-2xl md:text-4xl font-light text-gray-300 mb-8">
                    <span className="text-cyan-400 font-medium">{text}</span>
                    <span className="animate-ping">|</span>
                </h2>
                <p className="max-w-2xl mx-auto text-lg text-gray-400 mb-10">
                    Transformo ideas en experiencias visuales memorables que conectan con tu audiencia y elevan tu marca.
                </p>
                <a
                    href="#portfolio"
                    className="inline-block bg-cyan-400 text-gray-900 font-bold py-3 px-8 rounded-full text-lg hover:bg-cyan-500 transition-all duration-300 transform hover:scale-105 custom-shadow"
                >
                    Ver mis trabajos
                </a>
            </div>
        </section>
    );
};

export default Hero;