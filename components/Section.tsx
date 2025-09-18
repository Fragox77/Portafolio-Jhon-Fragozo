
import React, { ReactNode } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface SectionProps {
    id: string;
    children: ReactNode;
    className?: string;
}

const Section: React.FC<SectionProps> = ({ id, children, className = '' }) => {
    const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();

    return (
        <section
            id={id}
            ref={ref}
            className={`py-20 md:py-28 px-4 sm:px-6 lg:px-8 fade-in-section ${isVisible ? 'is-visible' : ''} ${className}`}
        >
            <div className="max-w-7xl mx-auto">
                {children}
            </div>
        </section>
    );
};

export default Section;
