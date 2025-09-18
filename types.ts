// FIX: Import `ElementType` from react to resolve the 'React' namespace error.
import type { ElementType } from 'react';

export interface Project {
    id: number;
    title: string;
    category: 'Branding' | 'Web' | 'Ilustración';
    imageUrl: string;
    description: string;
}

export interface Service {
    id: number;
    title: string;
    description: string;
    icon: ElementType;
    basePrice: number;
}