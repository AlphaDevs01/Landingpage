import React, { useEffect, useRef, useState } from 'react';
import { Send, Mail, Phone, MapPin, Check } from 'lucide-react';
import emailjs from 'emailjs-com'; // Importação do EmailJS

const Contact: React.FC = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  
  const formRef = useRef<HTMLDivElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const serviceId = 'service_ymsx9tb';
    const templateId = 'template_o68vlob';
    const userId = 'Q4Ri7TESdrrlc45_d';

    emailjs.send(serviceId, templateId, formData, userId)
      .then(() => {
        setFormSubmitted(true);
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        });

        setTimeout(() => {
          setFormSubmitted(false);
        }, 5000);
      })
      .catch((error) => {
        console.error('Erro ao enviar o e-mail:', error);
      });
  };

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

    if (formRef.current) {
      observer.observe(formRef.current);
    }

    if (infoRef.current) {
      observer.observe(infoRef.current);
    }

    return () => {
      if (formRef.current) {
        observer.unobserve(formRef.current);
      }
      if (infoRef.current) {
        observer.unobserve(infoRef.current);
      }
    };
  }, []);

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 dark:text-white">Entre em Contato</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto dark:text-gray-300">
            Pronto para discutir seu projeto? Preencha o formulário abaixo e receba uma resposta diretamente no seu e-mail.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 max-w-6xl mx-auto">
          <div 
            ref={infoRef}
            className="lg:col-span-2 bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg transition-all duration-700 transform opacity-0 translate-y-10"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6 dark:text-white">Informações de Contato</h3>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-blue-800 dark:text-blue-400" />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-gray-900 dark:text-white">E-mail</h4>
                  <a href="mailto:diomarbr4@gmail.com" className="text-gray-600 hover:text-blue-700 dark:text-gray-300 dark:hover:text-blue-400">
                    diomarbr4@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-blue-800 dark:text-blue-400" />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-gray-900 dark:text-white">Telefone</h4>
                  <a href="tel:+5562996988038" className="text-gray-600 hover:text-blue-700 dark:text-gray-300 dark:hover:text-blue-400">
                    +55 62 99698-8038
                  </a>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-blue-800 dark:text-blue-400" />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-gray-900 dark:text-white">Escritório</h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    Rua Onofre Ferreira, 46<br />
                    Qd.5 LT.23, Vila União<br />
                    Santa Bárbara de Goiás, GO<br />
                    CEP 75398-000
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div 
            ref={formRef}
            className="lg:col-span-3 bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg transition-all duration-700 transform opacity-0 translate-y-10 delay-300"
          >
            {formSubmitted ? (
              <div className="flex flex-col items-center justify-center h-full py-12">
                <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-6">
                  <Check className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2 dark:text-white">Obrigado!</h3>
                <p className="text-gray-600 text-center max-w-md dark:text-gray-300">
                  Sua mensagem foi enviada com sucesso. Entraremos em contato em breve!
                </p>
              </div>
            ) : (
              <>
                <h3 className="text-2xl font-bold text-gray-900 mb-6 dark:text-white">Envie-nos uma Mensagem</h3>
                
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1 dark:text-gray-300">
                        Nome Completo
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:focus:ring-blue-500"
                        placeholder="John Doe"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1 dark:text-gray-300">
                        Endereço de E-mail
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:focus:ring-blue-500"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1 dark:text-gray-300">
                        Telefone (Opcional)
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:focus:ring-blue-500"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1 dark:text-gray-300">
                        Assunto
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:focus:ring-blue-500"
                      >
                        <option value="">Select a subject</option>
                        <option value="Web Development">Web Development</option>
                        <option value="Email Systems">Email Systems</option>
                        <option value="Financial Systems">Financial Systems</option>
                        <option value="Custom Software">Custom Software</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1 dark:text-gray-300">
                      Mensagem
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:focus:ring-blue-500"
                      placeholder="Conte-nos sobre seu projeto..."
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-blue-800 hover:bg-blue-900 text-white font-medium py-3 px-6 rounded-md transition-colors flex items-center justify-center gap-2 dark:bg-blue-700 dark:hover:bg-blue-800"
                  >
                    Enviar Mensagem <Send size={18} />
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
