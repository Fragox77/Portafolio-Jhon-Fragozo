
import type { Project, Service } from './types';
import { BrandingIcon, WebDesignIcon, IllustrationIcon, MarketingIcon } from './components/icons/ServiceIcons';

export const NAV_LINKS = [
    { name: 'Sobre mí', href: '#about' },
    { name: 'Servicios', href: '#services' },
    { name: 'Portafolio', href: '#portfolio' },
    { name: 'Cotizador', href: '#quote' },
    { name: 'Contacto', href: '#contact' },
];

export const PORTFOLIO_PROJECTS: Project[] = [
    {
        id: 1,
        title: 'Identidad Visual para "Nébula Café"',
        category: 'Branding',
        imageUrl: 'https://picsum.photos/seed/nebula/600/400',
        description: 'Creación de un sistema de identidad visual completo, incluyendo logo, paleta de colores, tipografía y manual de marca.'
    },
    {
        id: 2,
        title: 'Diseño UI/UX para App "FitTrack"',
        category: 'Web',
        imageUrl: 'https://picsum.photos/seed/fittrack/600/400',
        description: 'Diseño de interfaz y experiencia de usuario para una aplicación móvil de seguimiento de actividad física, enfocada en la usabilidad.'
    },
    {
        id: 3,
        title: 'Serie de Ilustraciones "Bosque Encantado"',
        category: 'Ilustración',
        imageUrl: 'https://picsum.photos/seed/bosque/600/400',
        description: 'Colección de ilustraciones digitales para un libro infantil, con un estilo mágico y detallado.'
    },
    {
        id: 4,
        title: 'Rediseño de Marca "Quantum Labs"',
        category: 'Branding',
        imageUrl: 'https://picsum.photos/seed/quantum/600/400',
        description: 'Modernización de la identidad de una empresa de tecnología, proyectando innovación y confianza.'
    },
    {
        id: 5,
        title: 'E-commerce "Artesano"',
        category: 'Web',
        imageUrl: 'https://picsum.photos/seed/artesano/600/400',
        description: 'Diseño y desarrollo visual de una tienda online para productos artesanales, optimizada para la conversión.'
    },
    {
        id: 6,
        title: 'Mascota Corporativa para "ChipByte"',
        category: 'Ilustración',
        imageUrl: 'https://picsum.photos/seed/chipbyte/600/400',
        description: 'Diseño de un personaje amigable y memorable para representar a una marca de software.'
    },
];

export const SERVICES: Service[] = [
    {
        id: 1,
        title: 'Branding e Identidad Visual',
        description: 'Diseño de logos, paletas de colores, y manuales de marca que construyen una identidad sólida y memorable.',
        icon: BrandingIcon,
        basePrice: 500
    },
    {
        id: 2,
        title: 'Diseño Web y UI/UX',
        description: 'Creación de interfaces web y móviles atractivas, intuitivas y centradas en la experiencia del usuario.',
        icon: WebDesignIcon,
        basePrice: 800
    },
    {
        id: 3,
        title: 'Ilustración Digital',
        description: 'Ilustraciones personalizadas, desde personajes y mascotas hasta gráficos para redes sociales y editoriales.',
        icon: IllustrationIcon,
        basePrice: 300
    },
    {
        id: 4,
        title: 'Marketing y Redes Sociales',
        description: 'Diseño de piezas gráficas optimizadas para campañas de marketing digital y gestión de redes sociales.',
        icon: MarketingIcon,
        basePrice: 400
    },
];
