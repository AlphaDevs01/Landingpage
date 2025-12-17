import React from 'react';
import { Mail, Phone, MapPin, Instagram, Github, Code } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const Footer: React.FC = () => {
  const { theme } = useTheme();
  const isDarkMode = theme === 'dark';

  // Cores baseadas no tema
  const bgColor = isDarkMode ? 'bg-gray-900' : 'bg-gray-100';
  const borderColor = isDarkMode ? 'border-gray-800' : 'border-gray-300';
  const textPrimary = isDarkMode ? 'text-white' : 'text-gray-900';
  const textSecondary = isDarkMode ? 'text-gray-400' : 'text-gray-600';
  const textTertiary = isDarkMode ? 'text-gray-500' : 'text-gray-500';
  const hoverText = isDarkMode ? 'hover:text-white' : 'hover:text-gray-900';
  const socialBg = isDarkMode ? 'bg-gray-800' : 'bg-gray-200';
  const socialHover = isDarkMode ? 'hover:bg-pink-600' : 'hover:bg-pink-500';
  const socialHoverGray = isDarkMode ? 'hover:bg-gray-600' : 'hover:bg-gray-400';
  const iconColor = isDarkMode ? 'text-gray-300' : 'text-gray-700';
  const blueIcon = isDarkMode ? 'text-blue-400' : 'text-blue-600';

  return (
    <footer className={`${bgColor} ${textPrimary} pt-16 pb-8 transition-colors duration-300`}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Logo e Sobre */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <Code className="h-8 w-8 text-blue-500" />
              <span className="text-2xl font-bold">AlphaDevss</span>
            </div>
            <p className={`${textSecondary} mb-6`}>
              Oferecendo soluções tecnológicas inovadoras para empresas de todos os tamanhos. Transformamos ideias em realidade digital.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.instagram.com/alphadevss?igsh=MXM2eDQ3a3JocWQwdQ==" 
                className={`w-10 h-10 rounded-full ${socialBg} ${socialHover} flex items-center justify-center transition-colors duration-300`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram size={20} className={iconColor} />
              </a>
              <a 
                href="https://github.com/AlphaDevs01" 
                className={`w-10 h-10 rounded-full ${socialBg} ${socialHoverGray} flex items-center justify-center transition-colors duration-300`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github size={20} className={iconColor} />
              </a>
            </div>
          </div>
          
          {/* Serviços */}
          <div>
            <h3 className="text-xl font-bold mb-6">Serviços</h3>
            <ul className="space-y-3">
              {['Sistemas de E-mail', 'Sistemas Financeiros', 'Desenvolvimento Web', 'Software Personalizado', 'Soluções de Banco de Dados', 'Ferramentas Analíticas'].map((service) => (
                <li key={service}>
                  <a 
                    href="#" 
                    className={`${textSecondary} ${hoverText} transition-colors duration-300`}
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Empresa */}
          <div>
            <h3 className="text-xl font-bold mb-6">Empresa</h3>
            <ul className="space-y-3">
              {['Sobre Nós', 'Portfólio', 'Carreiras', 'Blog', 'Política de Privacidade'].map((item) => (
                <li key={item}>
                  <a 
                    href="#" 
                    className={`${textSecondary} ${hoverText} transition-colors duration-300`}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contato */}
          <div>
            <h3 className="text-xl font-bold mb-6">Fale Conosco</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <Mail className={`w-5 h-5 ${blueIcon} mt-0.5`} />
                <span className={textSecondary}>diomarbr4@gmail.com</span>
              </li>
              <li className="flex items-start space-x-3">
                <Phone className={`w-5 h-5 ${blueIcon} mt-0.5`} />
                <span className={textSecondary}>+55 62 99698-8038</span>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className={`w-5 h-5 ${blueIcon} mt-0.5`} />
                <span className={textSecondary}>
                  Rua Onofre Ferreira, 46<br />
                  Qd.5 LT.23, Vila União<br />
                  Santa Bárbara de Goiás, GO<br />
                  CEP 75398-000
                </span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Rodapé inferior */}
        <div className={`border-t ${borderColor} pt-8 transition-colors duration-300`}>
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className={`${textTertiary} text-center md:text-left mb-4 md:mb-0`}>
              &copy; {new Date().getFullYear()} AlphaDevss. Todos os direitos reservados.
            </p>
            <div className="flex space-x-6">
              {['Termos de Serviço', 'Política de Privacidade', 'Cookies'].map((item) => (
                <a 
                  key={item}
                  href="#" 
                  className={`${textTertiary} ${hoverText} transition-colors duration-300`}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;