import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import QuoteCalculator from './components/QuoteCalculator';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
    return (
        <div className="bg-gray-900 text-gray-200 min-h-screen">
            <Header />
            <main>
                <Hero />
                <About />
                <Services />
                <Portfolio />
                <QuoteCalculator />
                <Contact />
            </main>
            <Footer />
        </div>
    );
};

export default App;