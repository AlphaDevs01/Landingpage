import React, { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0');
          entry.target.classList.remove('opacity-0', 'translate-y-10');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, []);

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-10 dark:opacity-20">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-200 to-purple-200 dark:from-blue-900 dark:to-purple-900"></div>
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-teal-200 rounded-full filter blur-3xl dark:bg-teal-800"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-purple-200 rounded-full filter blur-3xl dark:bg-purple-800"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div 
          ref={heroRef}
          className="flex flex-col md:flex-row items-center justify-between gap-12 transition-all duration-700 transform opacity-0 translate-y-10"
        >
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-4 dark:text-white">
              Transformando Ideias em <span className="text-blue-800 dark:text-blue-400">Realidade Digital</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-2xl mx-auto md:mx-0 dark:text-gray-300">
              Desenvolvemos soluções tecnológicas inovadoras para empresas modernas. De sistemas de email a plataformas financeiras, nossa equipe especializada cria soluções de software confiáveis e inovadoras.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
              <button 
                onClick={scrollToContact}
                className="bg-blue-800 hover:bg-blue-900 text-white px-6 py-3 rounded-md font-medium flex items-center gap-2 transition-all hover:gap-3 dark:bg-blue-700 dark:hover:bg-blue-800"
              >
                Comece Agora <ArrowRight size={18} />
              </button>
              <button 
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-blue-800 hover:text-blue-900 font-medium dark:text-blue-400 dark:hover:text-blue-300"
              >
                Conheça Nossos Serviços
              </button>
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="relative">
              <div className="absolute -inset-4 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 opacity-30 blur-lg"></div>
              <div className="relative bg-white dark:bg-gray-800 rounded-lg shadow-xl overflow-hidden p-8">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-blue-50 dark:bg-gray-700 p-4 rounded-lg">
                    <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mb-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-800 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 19v-8.93a2 2 0 01.89-1.664l7-4.666a2 2 0 012.22 0l7 4.666A2 2 0 0121 10.07V19M3 19a2 2 0 002 2h14a2 2 0 002-2M3 19l6.75-4.5M21 19l-6.75-4.5M3 10l6.75 4.5M21 10l-6.75 4.5m0 0l-1.14.76a2 2 0 01-2.22 0l-1.14-.76" />
                      </svg>
                    </div>
                    <h3 className="font-semibold text-lg mb-1 dark:text-white">Sistemas de Email</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">Entrega confiável e análise</p>
                  </div>
                  <div className="bg-purple-50 dark:bg-gray-700 p-4 rounded-lg">
                    <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mb-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-800 dark:text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <h3 className="font-semibold text-lg mb-1 dark:text-white">Sistemas Financeiros</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">Processamento seguro</p>
                  </div>
                  <div className="bg-teal-50 dark:bg-gray-700 p-4 rounded-lg">
                    <div className="w-12 h-12 bg-teal-100 dark:bg-teal-900 rounded-full flex items-center justify-center mb-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-teal-800 dark:text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                      </svg>
                    </div>
                    <h3 className="font-semibold text-lg mb-1 dark:text-white">Desenvolvimento Web</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">Sites modernos e responsivos</p>
                  </div>
                  <div className="bg-amber-50 dark:bg-gray-700 p-4 rounded-lg">
                    <div className="w-12 h-12 bg-amber-100 dark:bg-amber-900 rounded-full flex items-center justify-center mb-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-amber-800 dark:text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                      </svg>
                    </div>
                    <h3 className="font-semibold text-lg mb-1 dark:text-white">Soluções Personalizadas</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">Adaptadas às suas necessidades</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;