import React from 'react';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Github, Code } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <Code className="h-8 w-8 text-blue-400" />
              <span className="text-2xl font-bold">AlphaDevss</span>
            </div>
            <p className="text-gray-400 mb-6">
              Oferecendo soluções tecnológicas inovadoras para empresas de todos os tamanhos. Transformamos ideias em realidade digital.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 hover:bg-blue-800 flex items-center justify-center transition-colors">
                <Facebook size={20} className="text-gray-300" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 hover:bg-blue-400 flex items-center justify-center transition-colors">
                <Twitter size={20} className="text-gray-300" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 hover:bg-pink-600 flex items-center justify-center transition-colors">
                <Instagram size={20} className="text-gray-300" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 hover:bg-blue-700 flex items-center justify-center transition-colors">
                <Linkedin size={20} className="text-gray-300" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 hover:bg-gray-600 flex items-center justify-center transition-colors">
                <Github size={20} className="text-gray-300" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-6">Serviços</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Sistemas de E-mail</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Sistemas Financeiros</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Desenvolvimento Web</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Software Personalizado</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Soluções de Banco de Dados</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Ferramentas Analíticas</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-6">Empresa</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Sobre Nós</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Portfólio</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Carreiras</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Blog</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Política de Privacidade</a>
              </li>
            </ul>
          </div>
          
          
          <div>
            <h3 className="text-xl font-bold mb-6">Fale Conosco</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-blue-400 mt-0.5" />
                <span className="text-gray-400">diomarbr4@gmail.com</span>
              </li>
              <li className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-blue-400 mt-0.5" />
                <span className="text-gray-400">+55 62 99698-8038</span>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-blue-400 mt-0.5" />
                <span className="text-gray-400">
                  Rua Onofre Ferreira, 46<br />
                  Qd.5 LT.23, Vila União<br />
                  Santa Bárbara de Goiás, GO<br />
                  CEP 75398-000
                </span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-center md:text-left mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} AlphaDevss. Todos os direitos reservados.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-500 hover:text-white transition-colors">
                Termos de Serviço
              </a>
              <a href="#" className="text-gray-500 hover:text-white transition-colors">
                Política de Privacidade
              </a>
              <a href="#" className="text-gray-500 hover:text-white transition-colors">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;