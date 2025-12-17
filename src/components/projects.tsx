import React, { useRef } from 'react';
import { ExternalLink } from 'lucide-react';
import { useInView } from '../hooks/useInView';
import { useTheme } from '../context/ThemeContext'; // Importe o contexto

export const Projects = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { threshold: 0.1 });
  
  // Use o contexto global de tema
  const { theme } = useTheme();
  const isDarkMode = theme === 'dark';

  const projects = [
    {
      title: 'Prados Embalagens',
      description: 'E-commerce institucional simples e direto.',
      imageUrl: 'https://raw.githubusercontent.com/AlphaDevs01/Landingpage/refs/heads/main/src/assets/predos_embalagens.png',
      link: 'https://prados-embalagens.vercel.app',
    },
    {
      title: 'Lokar Veículos',
      description: 'Plataforma para locação e visualização de veículos.',
      imageUrl: 'https://raw.githubusercontent.com/AlphaDevs01/Landingpage/refs/heads/main/src/assets/lokar.png',
      link: 'https://www.lokarveiculos.com.br',
    },
    {
      title: 'FinancEasy',
      description: 'Sistema de controle financeiro pessoal moderno.',
      imageUrl: 'https://raw.githubusercontent.com/AlphaDevs01/Landingpage/refs/heads/main/src/assets/financEasy.png',
      link: 'https://financeasy.alphadevss.com.br',
    },
    {
      title: 'AlphaDevs',
      description: 'Website da startup de desenvolvimento digital que cofundei.',
      imageUrl: 'https://raw.githubusercontent.com/AlphaDevs01/Landingpage/refs/heads/main/src/assets/alphaDevss.png',
      link: 'http://alphadevss.com.br',
    },
    {
      title: 'Sistema Restaurant',
      description: 'Sistema Para grandes e pequenos restaurantes',
      imageUrl: 'https://raw.githubusercontent.com/AlphaDevs01/Landingpage/refs/heads/main/src/assets/sistemaRestaurant.png',
      link: 'https://sistema-restaurant-3iea.vercel.app',
    },
    {
      title: 'Sistema Atendimento Tecnico',
      description: 'Sistema Para atendimentos tecnicos e suporte ao cliente para empresas que tenham um pos venda.',
      imageUrl: 'https://raw.githubusercontent.com/AlphaDevs01/Landingpage/refs/heads/main/src/assets/atendimentos.png',
      link: 'https://systema-atendimento-tecnico.vercel.app/',
    },
  ];

  // Cores baseadas no tema
  const bgColor = isDarkMode ? 'bg-gray-800' : 'bg-gray-100';
  const cardBg = isDarkMode ? 'bg-gray-900' : 'bg-white';
  const textPrimary = isDarkMode ? 'text-white' : 'text-gray-900';
  const textSecondary = isDarkMode ? 'text-gray-300' : 'text-gray-600';
  const linkColor = isDarkMode ? 'text-green-500 hover:text-green-400' : 'text-green-600 hover:text-green-500';

  return (
    <section
      id="projetos"
      ref={sectionRef}
      className={`py-20 ${bgColor}`}
    >
      <div className="container mx-auto px-4">
        <h2 className={`text-3xl md:text-4xl font-bold mb-12 text-center transition-all duration-700 ${
          isInView 
            ? 'opacity-100 transform-none' 
            : 'opacity-0 translate-y-10'
        } ${textPrimary}`}>
          <span>Meus</span>
          <span className={`${isDarkMode ? 'text-green-500' : 'text-green-600'} ml-2`}>Projetos</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`${cardBg} rounded-xl overflow-hidden shadow-xl transition-all duration-700 delay-${index * 100} hover:shadow-2xl ${
                isInView 
                  ? 'opacity-100 transform-none' 
                  : 'opacity-0 translate-y-20'
              }`}
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className={`text-xl font-semibold mb-2 ${textPrimary}`}>
                  {project.title}
                </h3>
                <p className={`${textSecondary} mb-4`}>{project.description}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center ${linkColor} transition-colors font-medium`}
                >
                  Visitar Projeto
                  <ExternalLink size={16} className="ml-1" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};