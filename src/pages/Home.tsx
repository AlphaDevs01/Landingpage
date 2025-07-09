import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import PricingTable from '../components/PricingTable'; // Adicionado
import About from '../components/About';
import Portfolio from '../components/Portfolio';
// import Testimonials from '../components/Testimonials'; // Removido
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import { Projects } from '../components/projects'; // Importa a sessão de projetos

const Home: React.FC = () => {
  return (
    <main>
      <Hero />
      <Services />
      <PricingTable /> {/* Adicionado aqui */}
      <About />
      <Portfolio />
      <Projects /> {/* Adiciona a sessão de projetos aqui */}
      {/* <Testimonials /> */} {/* Removido */}
      <Contact />
      <Footer />
    </main>
  );
};

export default Home;