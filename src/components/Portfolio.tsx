import React, { useEffect, useRef, useState } from 'react';
import { ExternalLink } from 'lucide-react';

interface Project {
  title: string;
  category: string;
  image: string;
  description: string;
}

const projects: Project[] = [
  {
    title: "Plataforma E-commerce",
    category: "Desenvolvimento Web",
    image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description: "Solução de e-commerce personalizada com gestão de estoque e processamento de pagamentos."
  },
  {
    title: "Dashboard Bancário",
    category: "Sistemas Financeiros",
    image: "https://images.pexels.com/photos/7567434/pexels-photo-7567434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description: "Dashboard financeiro seguro com análises em tempo real e processamento de transações."
  },
  {
    title: "Automação de Marketing",
    category: "Sistemas de Email",
    image: "https://images.pexels.com/photos/8867434/pexels-photo-8867434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description: "Plataforma avançada de email marketing com automação e análise de engajamento."
  },
  {
    title: "Portal de Saúde",
    category: "Software Personalizado",
    image: "https://images.pexels.com/photos/7089401/pexels-photo-7089401.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description: "Sistema seguro de gestão de pacientes com agendamento de consultas e manutenção de registros."
  },
  {
    title: "Plataforma Imobiliária",
    category: "Desenvolvimento Web",
    image: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description: "Sistema de listagem e gestão de imóveis com funcionalidade avançada de busca."
  },
  {
    title: "Dashboard Analítico",
    category: "Ferramentas Analíticas",
    image: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description: "Plataforma abrangente de visualização de dados e inteligência empresarial."
  }
];

const Portfolio: React.FC = () => {
  const [filter, setFilter] = useState<string>('Todos');
  const sectionRef = useRef<HTMLDivElement>(null);
  
  const categories = ['Todos', ...Array.from(new Set(projects.map(project => project.category)))];
  
  const filteredProjects = filter === 'Todos' 
    ? projects 
    : projects.filter(project => project.category === filter);

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

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="portfolio" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div 
          ref={sectionRef}
          className="text-center mb-12 transition-all duration-700 transform opacity-0 translate-y-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 dark:text-white">Nosso Portfólio</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto dark:text-gray-300">
            Explore nossos projetos mais recentes e veja como ajudamos nossos clientes a alcançar seus objetivos.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => setFilter(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                filter === category
                  ? 'bg-blue-800 text-white dark:bg-blue-700'
                  : 'bg-white text-gray-700 hover:bg-gray-100 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div 
              key={index} 
              className="group bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="relative overflow-hidden h-64">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent flex flex-col justify-end p-6">
                  <span className="text-sm text-blue-300 font-medium mb-2">{project.category}</span>
                  <h3 className="text-xl text-white font-bold">{project.title}</h3>
                </div>
                <div className="absolute inset-0 bg-blue-800/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <button className="bg-white text-blue-800 px-4 py-2 rounded-md flex items-center gap-2 font-medium hover:bg-gray-100 transition-colors">
                    Ver Detalhes <ExternalLink size={16} />
                  </button>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 dark:text-gray-300">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;