import React, { useEffect, useRef } from 'react';
import { CheckCircle } from 'lucide-react';

const About: React.FC = () => {
  const aboutRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
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

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    if (imageRef.current) {
      observer.observe(imageRef.current);
    }

    return () => {
      if (aboutRef.current) {
        observer.unobserve(aboutRef.current);
      }
      if (imageRef.current) {
        observer.unobserve(imageRef.current);
      }
    };
  }, []);

  const advantages = [
    "Equipe experiente de desenvolvedores e designers",
    "Soluções personalizadas para suas necessidades específicas",
    "Metodologia ágil para entrega mais rápida",
    "Suporte contínuo e serviços de manutenção",
    "Tecnologias de ponta e melhores práticas"
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div 
            ref={imageRef}
            className="lg:w-1/2 transition-all duration-700 transform opacity-0 translate-y-10"
          >
            <div className="relative">
              <div className="absolute -inset-4 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 opacity-20 blur-xl"></div>
              <div className="relative overflow-hidden rounded-xl shadow-2xl">
                <img 
                  src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Equipe colaborando" 
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>

          <div 
            ref={aboutRef}
            className="lg:w-1/2 transition-all duration-700 transform opacity-0 translate-y-10 delay-300"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 dark:text-white">Sobre a AlphaDevss</h2>
            <p className="text-lg text-gray-700 mb-6 dark:text-gray-300">
              A AlphaDevss é uma empresa jovem e inovadora especializada em desenvolvimento de software personalizado, aplicações web e soluções digitais para empresas de todos os portes.
            </p>
            <p className="text-lg text-gray-700 mb-8 dark:text-gray-300">
              Desde sua fundação, a AlphaDevss tem ajudado empresas a transformar sua presença digital e operações com soluções tecnológicas modernas e eficientes. Nossa equipe de desenvolvedores, designers e estrategistas trabalha de forma colaborativa para entregar resultados excepcionais.
            </p>

            <div className="space-y-3 mb-8">
              {advantages.map((advantage, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="text-green-600 w-6 h-6 flex-shrink-0 mt-0.5" />
                  <p className="text-gray-700 dark:text-gray-300">{advantage}</p>
                </div>
              ))}
            </div>

            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-blue-800 hover:bg-blue-900 text-white px-6 py-3 rounded-md transition-colors inline-flex items-center gap-2 dark:bg-blue-700 dark:hover:bg-blue-800"
            >
              Saiba Mais Sobre Nós
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;