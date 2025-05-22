import React from 'react';
import { stylists } from '../data/stylists';
import StylistCard from '../components/StylistCard';

const StylistsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Nossos estilistas</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Conheça nossa equipe de estilistas profissionais dedicados a fazer você parecer e se sentir melhor. Cada estilista traz seu conhecimento e paixão únicos para cada consulta.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stylists.map(stylist => (
            <StylistCard key={stylist.id} stylist={stylist} />
          ))}
        </div>

        {/* Team Values */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Nossos Valores</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              O que diferencia nossa equipe é o compromisso com a excelência, a educação contínua e o atendimento personalizado.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-bold text-gray-800 mb-3">Experiência</h3>
              <p className="text-gray-600">
                Nossos estilistas participam regularmente de treinamentos avançados para se manterem atualizados com as últimas técnicas e tendências do setor.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-bold text-gray-800 mb-3">Personalização</h3>
              <p className="text-gray-600">
                Acreditamos que cada cliente é único. Nossos estilistas dedicam tempo para entender suas necessidades e preferências específicas.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-bold text-gray-800 mb-3">Qualidade</h3>
              <p className="text-gray-600">
                Utilizamos apenas produtos e ferramentas premium para garantir os melhores resultados e manter seu cabelo saudável e bonito.
              </p>
            </div>
          </div>
        </div>

        {/* Join Our Team */}
        <div className="mt-20 bg-purple-600 text-white rounded-xl overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/2 p-10">
              <h2 className="text-2xl font-bold mb-4">Junte-se à nossa equipe</h2>
              <p className="mb-6">
                Você é um estilista talentoso que procura um local de trabalho dinâmico e de apoio? Estamos sempre em busca de profissionais apaixonados para se juntarem à nossa equipe.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Compensação competitiva</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Oportunidades de educação contínua</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Ambiente de equipe de apoio</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Potencial de crescimento e avanço</span>
                </li>
              </ul>
              <button className="px-6 py-2 bg-white text-purple-600 rounded-md hover:bg-gray-100 transition-colors font-medium">
                Inscreva-se agora
              </button>
            </div>
            <div className="md:w-1/2">
              <img
                src="https://images.pexels.com/photos/3992874/pexels-photo-3992874.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Salon Team"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StylistsPage;