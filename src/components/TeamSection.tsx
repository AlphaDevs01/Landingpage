import React, { useState, useEffect } from 'react';
import { X, ExternalLink, Users, ChevronRight } from 'lucide-react';
import { useTheme } from '../context/ThemeContext'; // Importe o contexto

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
  const [isIframeLoading, setIsIframeLoading] = useState(true);
  const [iframeError, setIframeError] = useState(false);
  
  // Use o contexto global de tema
  const { theme } = useTheme();
  const isDarkMode = theme === 'dark';

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
      role: 'Backend Developer Júnior & Co-fundador',
      bio: "Especialista em JavaScript/NodeJS, trabalhando a mais de 3 anos em desenvolvimento de api's backend, aplicações e websites com funcionalidades completas.",
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
    setIsIframeLoading(true);
    setIframeError(false);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedMember(null);
    setIsIframeLoading(false);
    setIframeError(false);
    document.body.style.overflow = 'auto';
  };

  const openFullscreen = () => {
    if (selectedMember) {
      window.open(selectedMember.portfolioUrl, '_blank');
    }
  };

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const target = e.target as HTMLImageElement;
    // Fallback para imagem padrão caso a local não carregue
    target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(target.alt)}&background=${isDarkMode ? '1e40af' : '3b82f6'}&color=fff&size=300`;
    target.onerror = null; // Previne loop infinito
  };

  const handleIframeLoad = () => {
    setIsIframeLoading(false);
  };

  const handleIframeError = () => {
    setIsIframeLoading(false);
    setIframeError(true);
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

  // Cores baseadas no tema
  const bgGradientFrom = isDarkMode ? 'from-gray-900' : 'from-gray-50';
  const bgGradientTo = isDarkMode ? 'to-gray-950' : 'to-white';
  const cardBg = isDarkMode ? 'bg-gray-800/50' : 'bg-white/80';
  const cardBorder = isDarkMode ? 'border-gray-700' : 'border-gray-200';
  const cardHoverBorder = isDarkMode ? 'hover:border-blue-500' : 'hover:border-blue-400';
  const textPrimary = isDarkMode ? 'text-white' : 'text-gray-900';
  const textSecondary = isDarkMode ? 'text-gray-300' : 'text-gray-600';
  const textTertiary = isDarkMode ? 'text-gray-400' : 'text-gray-500';
  const textBlue = isDarkMode ? 'text-blue-400' : 'text-blue-600';
  const textBlueLight = isDarkMode ? 'text-blue-300' : 'text-blue-500';
  const badgeBg = isDarkMode ? 'bg-blue-900/80' : 'bg-blue-100/90';
  const badgeText = isDarkMode ? 'text-blue-200' : 'text-blue-800';
  const buttonGradientFrom = isDarkMode ? 'from-blue-600' : 'from-blue-500';
  const buttonGradientTo = isDarkMode ? 'to-blue-700' : 'to-blue-600';
  const buttonHoverFrom = isDarkMode ? 'hover:from-blue-700' : 'hover:from-blue-600';
  const buttonHoverTo = isDarkMode ? 'hover:to-blue-800' : 'hover:to-blue-700';
  const modalBg = isDarkMode ? 'bg-black/90' : 'bg-white/95';
  const modalContentBg = isDarkMode ? 'bg-gray-900' : 'bg-white';
  const modalBorder = isDarkMode ? 'border-gray-700' : 'border-gray-300';
  const modalHeaderBg = isDarkMode ? 'from-gray-900 to-gray-800' : 'from-gray-50 to-gray-100';
  const modalContentInnerBg = isDarkMode ? 'bg-gray-950' : 'bg-gray-50';

  return (
    <section id="team" className={`py-20 bg-gradient-to-b ${bgGradientFrom} ${bgGradientTo}`}>
      <div className="container mx-auto px-4 md:px-6">
        {/* Cabeçalho da Seção */}
        <div className="text-center mb-16">
          <div className={`inline-flex items-center justify-center p-3 ${isDarkMode ? 'bg-blue-900/20' : 'bg-blue-100'} rounded-full mb-4`}>
            <Users className={`h-8 w-8 ${textBlue}`} />
          </div>
          <h2 className={`text-4xl md:text-5xl font-bold ${textPrimary} mb-4`}>
            Nossa <span className={textBlue}>Equipe</span>
          </h2>
          <p className={`text-xl ${textSecondary} max-w-2xl mx-auto`}>
            Conheça os desenvolvedores por trás da AlphaDevs. Profissionais apaixonados por tecnologia e inovação.
          </p>
        </div>

        {/* Grid de Membros da Equipe */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className={`group ${cardBg} backdrop-blur-sm rounded-2xl overflow-hidden border ${cardBorder} ${cardHoverBorder} transition-all duration-300 hover:shadow-2xl ${isDarkMode ? 'hover:shadow-blue-900/20' : 'hover:shadow-blue-200/30'}`}
            >
              {/* Imagem do Membro */}
              <div className={`relative h-82 overflow-hidden ${isDarkMode ? 'bg-gradient-to-br from-gray-800 to-gray-900' : 'bg-gradient-to-br from-gray-100 to-gray-200'}`}>
                {isLoading ? (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className={`h-12 w-12 animate-spin rounded-full border-4 ${isDarkMode ? 'border-gray-600' : 'border-gray-300'} ${isDarkMode ? 'border-t-blue-500' : 'border-t-blue-400'}`}></div>
                  </div>
                ) : (
                  <img
                    src={member.imageUrl}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={handleImageError}
                  />
                )}
                <div className={`absolute inset-0 bg-gradient-to-t ${isDarkMode ? 'from-gray-900' : 'from-white/60'} via-transparent to-transparent`}></div>
                <div className="absolute bottom-4 left-4">
                  <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${badgeBg} ${badgeText} backdrop-blur-sm`}>
                    {member.role.split('&')[0].trim()}
                  </span>
                </div>
              </div>

              {/* Informações do Membro */}
              <div className="p-6">
                <h3 className={`text-2xl font-bold ${textPrimary} mb-2`}>{member.name}</h3>
                <p className={`${textBlueLight} mb-3`}>{member.role}</p>
                <p className={`${textSecondary} mb-6 line-clamp-3`}>{member.bio}</p>
                
                <button
                  onClick={() => openModal(member)}
                  className={`inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r ${buttonGradientFrom} ${buttonGradientTo} text-white font-medium rounded-lg ${buttonHoverFrom} ${buttonHoverTo} transition-all duration-300 transform hover:-translate-y-1 ${isDarkMode ? 'hover:shadow-lg hover:shadow-blue-900/30' : 'hover:shadow-lg hover:shadow-blue-200/30'} group/btn`}
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
          <p className={`${textTertiary} text-lg max-w-3xl mx-auto`}>
            Trabalhamos em conjunto para entregar soluções de software que superam expectativas.
            Cada projeto é uma oportunidade de inovar e criar valor para nossos clientes.
          </p>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && selectedMember && (
        <div className={`fixed inset-0 z-50 flex items-center justify-center p-4 ${modalBg} backdrop-blur-sm`}>
          <div className={`relative w-full max-w-6xl h-[80vh] ${modalContentBg} rounded-2xl overflow-hidden border ${modalBorder} ${isDarkMode ? 'shadow-2xl' : 'shadow-xl'}`}>
            {/* Cabeçalho do Modal */}
            <div className={`flex items-center justify-between p-6 border-b ${isDarkMode ? 'border-gray-800' : 'border-gray-200'} bg-gradient-to-r ${modalHeaderBg}`}>
              <div>
                <h3 className={`text-2xl font-bold ${textPrimary}`}>{selectedMember.name}</h3>
                <p className={textSecondary}>{selectedMember.role}</p>
              </div>
              <div className="flex items-center gap-3">
                <button
                  onClick={openFullscreen}
                  className={`inline-flex items-center gap-2 px-4 py-2 ${isDarkMode ? 'bg-blue-600 hover:bg-blue-700' : 'bg-blue-500 hover:bg-blue-600'} text-white font-medium rounded-lg transition-colors`}
                >
                  <ExternalLink className="h-4 w-4" />
                  Abrir em Nova Aba
                </button>
                <button
                  onClick={closeModal}
                  className={`p-2 ${isDarkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-200'} rounded-lg transition-colors`}
                >
                  <X className={`h-6 w-6 ${textTertiary}`} />
                </button>
              </div>
            </div>

            {/* Conteúdo do Modal - Iframe */}
            <div className={`relative h-[calc(80vh-80px)] ${modalContentInnerBg}`}>
              <iframe
                src={selectedMember.portfolioUrl}
                className="w-full h-full border-0"
                title={`Portfólio de ${selectedMember.name}`}
                loading="lazy"
                onLoad={handleIframeLoad}
                onError={handleIframeError}
                sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
              />
              
              {/* Overlay de carregamento - SOMENTE se estiver carregando */}
              {isIframeLoading && (
                <div className={`absolute inset-0 flex items-center justify-center ${modalContentInnerBg}`}>
                  <div className="text-center">
                    <div className={`h-16 w-16 animate-spin rounded-full border-4 ${isDarkMode ? 'border-gray-700' : 'border-gray-300'} ${isDarkMode ? 'border-t-blue-500' : 'border-t-blue-400'} mx-auto mb-4`}></div>
                    <p className={textTertiary}>Carregando portfólio...</p>
                  </div>
                </div>
              )}

              {/* Mensagem de erro se o iframe falhar */}
              {iframeError && (
                <div className={`absolute inset-0 flex items-center justify-center ${modalContentInnerBg}`}>
                  <div className="text-center p-8">
                    <div className="h-16 w-16 mx-auto mb-4 text-red-500">
                      <X className="h-16 w-16" />
                    </div>
                    <h4 className={`text-xl font-bold ${textPrimary} mb-2`}>Não foi possível carregar o portfólio</h4>
                    <p className={textSecondary}>
                      O site pode ter restrições de segurança que impedem a exibição em iframe.
                    </p>
                    <button
                      onClick={openFullscreen}
                      className={`inline-flex items-center gap-2 px-6 py-3 ${isDarkMode ? 'bg-blue-600 hover:bg-blue-700' : 'bg-blue-500 hover:bg-blue-600'} text-white font-medium rounded-lg transition-colors mt-4`}
                    >
                      <ExternalLink className="h-5 w-5" />
                      Abrir Site em Nova Aba
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Botão de tela cheia no canto inferior direito */}
            <button
              onClick={openFullscreen}
              className={`absolute bottom-4 right-4 inline-flex items-center gap-2 px-4 py-2 ${isDarkMode ? 'bg-gray-800/90' : 'bg-gray-100/90'} backdrop-blur-sm ${isDarkMode ? 'hover:bg-gray-700/90' : 'hover:bg-gray-200/90'} ${textPrimary} font-medium rounded-lg border ${modalBorder} transition-all hover:scale-105 z-10`}
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