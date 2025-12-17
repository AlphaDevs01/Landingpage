import React, { useState, useEffect } from 'react';
import { X, ExternalLink, Users, ChevronRight } from 'lucide-react';

interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  portfolioUrl: string;
  imageUrl: string;
}

const TeamSection: React.FC = () => {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Dados dos membros da equipe
  const teamMembers: TeamMember[] = [
    {
      id: 'diomar',
      name: 'Diomar Gonçalves',
      role: 'Front end developer & Fundador',
      bio: 'Desenvolvedor Full Stack com mais de 5 anos de experiência na criação de sistemas web escaláveis e orientados a performance. Fundador de projetos digitais focados em soluções modernas para negócios, com forte atuação em React, Node.js e arquitetura de microsserviços. Experiência no desenvolvimento de aplicações robustas, painéis administrativos e APIs de alta disponibilidade.',
      portfolioUrl: 'https://diomargoncalves.alphadevss.com.br/',
      imageUrl: 'diomar.png'
    },
    {
      id: 'oliveira',
      name: 'Davi Oliveira',
      role: 'Backend Developer Júnior & Coundador',
      bio: "Especialista em JavaScript/NodeJS, trabalhando a mais de 3 anos em desenvolvimento de api's backend, aplicações e websites com funcionalidades completas.",
      portfolioUrl: 'https://oliveira.alphadevss.com.br/',
      imageUrl: '/oliveira.jpg'
    }
  ];

  // Simular carregamento de imagens
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const openModal = (member: TeamMember) => {
    setSelectedMember(member);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedMember(null);
    document.body.style.overflow = 'auto';
  };

  const openFullscreen = () => {
    if (selectedMember) {
      window.open(selectedMember.portfolioUrl, '_blank');
    }
  };

  // Fechar modal com ESC
  useEffect(() => {
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isModalOpen) {
        closeModal();
      }
    };

    document.addEventListener('keydown', handleEscKey);
    return () => document.removeEventListener('keydown', handleEscKey);
  }, [isModalOpen]);

  return (
    <section id="team" className="py-20 bg-gradient-to-b from-gray-900 to-gray-950">
      <div className="container mx-auto px-4 md:px-6">
        {/* Cabeçalho da Seção */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-3 bg-blue-900/20 rounded-full mb-4">
            <Users className="h-8 w-8 text-blue-400" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Nossa <span className="text-blue-400">Equipe</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Conheça os desenvolvedores por trás da AlphaDevs. Profissionais apaixonados por tecnologia e inovação.
          </p>
        </div>

        {/* Grid de Membros da Equipe */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="group bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700 hover:border-blue-500 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-900/20"
            >
              {/* Imagem do Membro */}
              <div className="relative h-100 overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900">
                {isLoading ? (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="h-12 w-12 animate-spin rounded-full border-4 border-gray-600 border-t-blue-500"></div>
                  </div>
                ) : (
                  <img
                    src={member.imageUrl}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-900/80 text-blue-200 backdrop-blur-sm">
                    {member.role.split('&')[0].trim()}
                  </span>
                </div>
              </div>

              {/* Informações do Membro */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-2">{member.name}</h3>
                <p className="text-blue-300 mb-3">{member.role}</p>
                <p className="text-gray-300 mb-6 line-clamp-3">{member.bio}</p>
                
                <button
                  onClick={() => openModal(member)}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-medium rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-900/30 group/btn"
                >
                  <span>Ver Portfólio</span>
                  <ChevronRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Texto adicional */}
        <div className="mt-16 text-center">
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Trabalhamos em conjunto para entregar soluções de software que superam expectativas.
            Cada projeto é uma oportunidade de inovar e criar valor para nossos clientes.
          </p>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && selectedMember && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm">
          <div className="relative w-full max-w-6xl h-[80vh] bg-gray-900 rounded-2xl overflow-hidden border border-gray-700 shadow-2xl">
            {/* Cabeçalho do Modal */}
            <div className="flex items-center justify-between p-6 border-b border-gray-800 bg-gradient-to-r from-gray-900 to-gray-800">
              <div>
                <h3 className="text-2xl font-bold text-white">{selectedMember.name}</h3>
                <p className="text-gray-300">{selectedMember.role}</p>
              </div>
              <div className="flex items-center gap-3">
                <button
                  onClick={openFullscreen}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
                >
                  <ExternalLink className="h-4 w-4" />
                  Abrir em Nova Aba
                </button>
                <button
                  onClick={closeModal}
                  className="p-2 hover:bg-gray-800 rounded-lg transition-colors"
                >
                  <X className="h-6 w-6 text-gray-400" />
                </button>
              </div>
            </div>

            {/* Conteúdo do Modal - Iframe */}
            <div className="relative h-[calc(80vh-80px)] bg-gray-950">
              <iframe
                src={selectedMember.portfolioUrl}
                className="w-full h-full border-0"
                title={`Portfólio de ${selectedMember.name}`}
                loading="lazy"
              />
              
              {/* Overlay de carregamento */}
              <div className="absolute inset-0 flex items-center justify-center bg-gray-950">
                <div className="text-center">
                  <div className="h-16 w-16 animate-spin rounded-full border-4 border-gray-700 border-t-blue-500 mx-auto mb-4"></div>
                  <p className="text-gray-400">Carregando portfólio...</p>
                </div>
              </div>
            </div>

            {/* Botão de tela cheia no canto inferior direito */}
            <button
              onClick={openFullscreen}
              className="absolute bottom-4 right-4 inline-flex items-center gap-2 px-4 py-2 bg-gray-800/90 backdrop-blur-sm hover:bg-gray-700/90 text-white font-medium rounded-lg border border-gray-700 transition-all hover:scale-105"
            >
              <ExternalLink className="h-4 w-4" />
              Tela Cheia
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default TeamSection;