import React from 'react';

const pricing = [
  {
    service: "Landing Page Simples",
    description: "Página única com informações, imagens e botão do WhatsApp. Responsiva e moderna.",
    price: "R$99,00",
    deadline: "1 a 2 dias"
  },
  {
    service: "Landing Page Profissional",
    description: "Com formulário, galeria, mapa, botão flutuante de WhatsApp, ideal para empresas.",
    price: "R$199,00",
    deadline: "2 a 4 dias"
  },
  {
    service: "Site Institucional",
    description: "Até 5 páginas (Home, Sobre, Serviços, Galeria, Contato). Com painel básico de edição.",
    price: "R$350,00",
    deadline: "4 a 7 dias"
  },
  {
    service: "Sistema de Cadastro Simples",
    description: "Cadastro, edição, listagem e exclusão (CRUD) com banco de dados (SQLite ou PostgreSQL).",
    price: "R$250,00",
    deadline: "3 a 5 dias"
  },
  {
    service: "Sistema Personalizado",
    description: "Controle de vendas, estoque, finanças, horas, etc. Com banco e painel completo.",
    price: "A partir de R$500,00",
    deadline: "5 a 10 dias"
  },
  {
    service: "Automação de Planilhas ou Dados",
    description: "Automatize tarefas repetitivas com scripts personalizados (Google Sheets, Excel, JSON).",
    price: "R$100,00 a R$300,00",
    deadline: "1 a 3 dias"
  },
  {
    service: "Ajustes ou Manutenção",
    description: "Corrijo erros, melhoro performance ou adapto sistemas existentes.",
    price: "A partir de R$50,00",
    deadline: "Conforme análise"
  },
  {
    service: "Painel Admin Personalizado",
    description: "Criação de painel moderno (React, Tailwind) com login, filtros e relatórios.",
    price: "R$300,00 a R$600,00",
    deadline: "4 a 8 dias"
  }
];

const PricingTable: React.FC = () => (
  <section id="pricing" className="py-20 bg-white dark:bg-gray-800">
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 dark:text-white">
         Tabela de Preços — Serviços de Programação Personalizados
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto dark:text-gray-300">
          Desenvolvimento rápido, direto ao ponto, com preço justo. Entrega profissional e suporte básico incluso.
        </p>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white dark:bg-gray-900 rounded-xl shadow-lg">
          <thead>
            <tr>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 dark:text-gray-200">Serviço</th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 dark:text-gray-200">Descrição</th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 dark:text-gray-200">Valor</th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 dark:text-gray-200">Prazo Médio</th>
            </tr>
          </thead>
          <tbody>
            {pricing.map((item, idx) => (
              <tr key={idx} className={idx % 2 === 0 ? "bg-gray-50 dark:bg-gray-800" : ""}>
                <td className="px-4 py-3 font-medium text-gray-900 dark:text-white">{item.service}</td>
                <td className="px-4 py-3 text-gray-700 dark:text-gray-300">{item.description}</td>
                <td className="px-4 py-3 text-blue-800 font-semibold dark:text-blue-400">{item.price}</td>
                <td className="px-4 py-3 text-gray-700 dark:text-gray-300">{item.deadline}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </section>
);

export default PricingTable;
