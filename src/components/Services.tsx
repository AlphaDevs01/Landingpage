import React, { useEffect, useRef } from 'react';
import { Mail, CreditCard, Globe, Code, Database, LineChart, Cloud, ShieldCheck } from 'lucide-react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, delay }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('opacity-100', 'translate-y-0');
            entry.target.classList.remove('opacity-0', 'translate-y-10');
          }, delay);
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, [delay]);

  return (
    <div 
      ref={cardRef}
      className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 transition-all duration-500 transform opacity-0 translate-y-10 hover:shadow-xl hover:-translate-y-1"
    >
      <div className="w-14 h-14 bg-blue-100 dark:bg-blue-900/50 rounded-lg flex items-center justify-center mb-4 text-blue-800 dark:text-blue-400">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300">{description}</p>
    </div>
  );
};

const Services: React.FC = () => {
  const titleRef = useRef<HTMLDivElement>(null);

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

    if (titleRef.current) {
      observer.observe(titleRef.current);
    }

    return () => {
      if (titleRef.current) {
        observer.unobserve(titleRef.current);
      }
    };
  }, []);

  const services = [
    {
      icon: <Mail size={28} />,
      title: "Sistemas de Email",
      description: "Plataformas robustas de envio de emails com análise, automação e recursos de integração.",
      delay: 100
    },
    {
      icon: <CreditCard size={28} />,
      title: "Sistemas Financeiros",
      description: "Soluções seguras para processamento de pagamentos, contabilidade e gestão financeira.",
      delay: 200
    },
    {
      icon: <Globe size={28} />,
      title: "Desenvolvimento Web",
      description: "Sites e aplicações web personalizados com design responsivo e experiência moderna.",
      delay: 300
    },
    {
      icon: <Code size={28} />,
      title: "Software Personalizado",
      description: "Soluções de software sob medida para suas necessidades específicas de negócio.",
      delay: 400
    },
    {
      icon: <Database size={28} />,
      title: "Soluções de Banco de Dados",
      description: "Serviços eficientes de design, migração e otimização de bancos de dados.",
      delay: 500
    },
    {
      icon: <LineChart size={28} />,
      title: "Ferramentas Analíticas",
      description: "Soluções de visualização e análise de dados para tomada de decisões informada.",
      delay: 600
    },
    {
      icon: <Cloud size={28} />,
      title: "Serviços em Nuvem",
      description: "Configuração, migração e gerenciamento de infraestrutura escalável em nuvem.",
      delay: 700
    },
    {
      icon: <ShieldCheck size={28} />,
      title: "Soluções de Segurança",
      description: "Auditorias de segurança abrangentes e implementação de medidas robustas de proteção.",
      delay: 800
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div 
          ref={titleRef}
          className="text-center mb-16 transition-all duration-700 transform opacity-0 translate-y-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 dark:text-white">Nossos Serviços</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto dark:text-gray-300">
            Fornecemos soluções tecnológicas abrangentes para ajudar empresas a prosperar na era digital.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              delay={service.delay}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;