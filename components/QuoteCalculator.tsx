import React, { useState, useEffect, useMemo } from 'react';
import Section from './Section';
import { SERVICES } from '../constants';

const complexityLevels = [
    { name: 'Baja', multiplier: 1 },
    { name: 'Media', multiplier: 1.5 },
    { name: 'Alta', multiplier: 2.5 },
];

const QuoteCalculator: React.FC = () => {
    const [serviceId, setServiceId] = useState(SERVICES[0].id);
    const [complexity, setComplexity] = useState(1); // multiplier
    const [hours, setHours] = useState(10);
    const [totalPrice, setTotalPrice] = useState(0);

    const selectedService = useMemo(() => SERVICES.find(s => s.id === serviceId) || SERVICES[0], [serviceId]);

    useEffect(() => {
        const basePrice = selectedService.basePrice;
        const calculatedPrice = basePrice * complexity * (hours / 10);
        setTotalPrice(calculatedPrice);
    }, [serviceId, complexity, hours, selectedService]);

    const formatCurrency = (amount: number) => {
        return new Intl.NumberFormat('es-CO', {
            style: 'currency',
            currency: 'COP',
            minimumFractionDigits: 0,
        }).format(amount * 4000); // Assuming a conversion rate
    };

    return (
        <Section id="quote">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-white">
                    Cotizador <span className="text-cyan-400">Dinámico</span>
                </h2>
                <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
                    Obtén una estimación del costo de tu proyecto al instante. Ajusta las variables para ver cómo impactan el precio final.
                </p>
            </div>
            <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 lg:gap-12 items-center bg-gray-800 p-8 rounded-xl border border-gray-700">
                {/* Controls */}
                <div className="space-y-8">
                    <div>
                        <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-2">1. Tipo de Servicio</label>
                        <select
                            id="service"
                            value={serviceId}
                            onChange={(e) => setServiceId(Number(e.target.value))}
                            className="w-full bg-gray-700 border border-gray-600 rounded-md py-2 px-3 text-white focus:ring-cyan-400 focus:border-cyan-400"
                        >
                            {SERVICES.map(s => <option key={s.id} value={s.id}>{s.title}</option>)}
                        </select>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">2. Complejidad del Proyecto</label>
                        <div className="grid grid-cols-3 gap-2 rounded-md bg-gray-700 p-1">
                            {complexityLevels.map(level => (
                                <button
                                    key={level.name}
                                    onClick={() => setComplexity(level.multiplier)}
                                    className={`px-3 py-2 text-sm font-medium rounded transition-colors ${complexity === level.multiplier ? 'bg-cyan-400 text-gray-900' : 'text-gray-300 hover:bg-gray-600'}`}
                                >
                                    {level.name}
                                </button>
                            ))}
                        </div>
                    </div>
                    <div>
                        <label htmlFor="hours" className="block text-sm font-medium text-gray-300 mb-2">3. Horas Estimadas: <span className="text-cyan-400 font-bold">{hours}h</span></label>
                        <input
                            type="range"
                            id="hours"
                            min="10"
                            max="200"
                            step="5"
                            value={hours}
                            onChange={(e) => setHours(Number(e.target.value))}
                            className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-cyan-400"
                        />
                    </div>
                </div>
                {/* Price Display */}
                <div className="text-center bg-gray-900 p-8 rounded-lg custom-shadow">
                    <p className="text-lg text-gray-400 mb-2">Precio Estimado</p>
                    <div className="text-4xl md:text-5xl font-bold text-cyan-400 transition-all duration-300">
                        {formatCurrency(totalPrice)}
                    </div>
                    <p className="text-xs text-gray-500 mt-4">*Este es un precio aproximado. El costo final puede variar.</p>
                </div>
            </div>
        </Section>
    );
};

export default QuoteCalculator;