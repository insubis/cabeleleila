import React from 'react';
import Hero from '../components/Hero';
import { useNavigate } from 'react-router-dom';
import { services } from '../data/services';
import { stylists } from '../data/stylists';
import ServiceCard from '../components/ServiceCard';
import StylistCard from '../components/StylistCard';
import { ArrowRight, Check, Star, Clock, Scissors, Brush, MessageSquare } from 'lucide-react';

const HomePage: React.FC = () => {
  const navigate = useNavigate();
  const featuredServices = services.slice(0, 4);
  const featuredStylists = stylists.slice(0, 3);

  return (
    <div>
      <Hero />

      {/* Featured Services */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Nossos serviços</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Descubra nossa gama de serviços capilares profissionais projetados para realçar sua beleza natural e deixar você se sentindo revigorada.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredServices.map(service => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>

          <div className="text-center mt-10">
            <button
              onClick={() => navigate('/services')}
              className="inline-flex items-center text-purple-600 font-medium hover:text-purple-700 transition-colors"
            >
              Ver todos os serviços
              <ArrowRight size={16} className="ml-1" />
            </button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-purple-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Por que nos escolher</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Estamos comprometidos em oferecer a você cuidados capilares da mais alta qualidade e uma experiência excepcional no salão.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-md transform transition-transform hover:scale-[1.03]">
              <div className="bg-purple-100 w-14 h-14 rounded-full flex items-center justify-center mb-5">
                <Scissors className="text-purple-600" size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Estilista especialistas</h3>
              <p className="text-gray-600">
                Nossa equipe de profissionais experientes se mantém atualizada com as últimas tendências e técnicas.
              </p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-start">
                  <Check size={16} className="text-green-500 mt-1 mr-2" />
                  <span className="text-gray-700">Treinado continuamente</span>
                </li>
                <li className="flex items-start">
                  <Check size={16} className="text-green-500 mt-1 mr-2" />
                  <span className="text-gray-700">Anos de experiência</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md transform transition-transform hover:scale-[1.03]">
              <div className="bg-purple-100 w-14 h-14 rounded-full flex items-center justify-center mb-5">
                <Brush className="text-purple-600" size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Produtos Premium</h3>
              <p className="text-gray-600">
                Usamos apenas produtos da mais alta qualidade para garantir os melhores resultados para seu cabelo.
              </p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-start">
                  <Check size={16} className="text-green-500 mt-1 mr-2" />
                  <span className="text-gray-700">Marcas com qualidade de salão</span>
                </li>
                <li className="flex items-start">
                  <Check size={16} className="text-green-500 mt-1 mr-2" />
                  <span className="text-gray-700">Ecologicamente correto</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md transform transition-transform hover:scale-[1.03]">
              <div className="bg-purple-100 w-14 h-14 rounded-full flex items-center justify-center mb-5">
                <Clock className="text-purple-600" size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Reserva conveniente</h3>
              <p className="text-gray-600">
                Nosso sistema de reservas on-line facilita o agendamento de consultas no seu tempo.
              </p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-start">
                  <Check size={16} className="text-green-500 mt-1 mr-2" />
                  <span className="text-gray-700">Reserva online 24 horas por dia, 7 dias por semana</span>
                </li>
                <li className="flex items-start">
                  <Check size={16} className="text-green-500 mt-1 mr-2" />
                  <span className="text-gray-700">Lembretes de compromissos</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Stylists */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Conheça Nossos Estilistas</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Nossa talentosa equipe de profissionais se dedica a lhe oferecer serviços e resultados excepcionais.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredStylists.map(stylist => (
              <StylistCard key={stylist.id} stylist={stylist} />
            ))}
          </div>

          <div className="text-center mt-10">
            <button
              onClick={() => navigate('/stylists')}
              className="inline-flex items-center text-purple-600 font-medium hover:text-purple-700 transition-colors"
            >
              Ver todos os estilistas
              <ArrowRight size={16} className="ml-1" />
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">O que nossos clientes dizem</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Não acredite apenas na nossa palavra. Veja o que nossos clientes satisfeitos têm a dizer sobre suas experiências.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-md relative">
              <div className="absolute -top-4 left-6 text-purple-600">
                <MessageSquare size={32} className="fill-purple-100 stroke-purple-600" />
              </div>
              <div className="pt-4">
                <div className="flex items-center mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} size={18} className="fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  "Os cabeleireiros aqui são incríveis! Venho há anos e nunca me decepcionei. Meu cabelo nunca esteve melhor!"
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full overflow-hidden mr-3">
                    <img
                      src="https://images.pexels.com/photos/1674752/pexels-photo-1674752.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                      alt="Client"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">Emily Johnson</p>
                    <p className="text-sm text-gray-500">Cliente Regular</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md relative">
              <div className="absolute -top-4 left-6 text-purple-600">
                <MessageSquare size={32} className="fill-purple-100 stroke-purple-600" />
              </div>
              <div className="pt-4">
                <div className="flex items-center mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} size={18} className="fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  "Fiz uma balayage aqui e superou todas as minhas expectativas. A cor ficou perfeita e o processo de reserva foi super fácil!"
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full overflow-hidden mr-3">
                    <img
                      src="https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                      alt="Client"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">Sarah Miller</p>
                    <p className="text-sm text-gray-500">Nova Cliente</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md relative">
              <div className="absolute -top-4 left-6 text-purple-600">
                <MessageSquare size={32} className="fill-purple-100 stroke-purple-600" />
              </div>
              <div className="pt-4">
                <div className="flex items-center mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} size={18} className="fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  "A equipe é profissional e simpática, e o salão tem um ambiente ótimo. Sempre aguardo ansiosamente meus horários aqui."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full overflow-hidden mr-3">
                    <img
                      src="https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                      alt="Client"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">Michael Davis</p>
                    <p className="text-sm text-gray-500">Cliente Fiel</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Pronto para transformar seu visual?</h2>
          <p className="text-lg text-purple-100 mb-8 max-w-2xl mx-auto">
            Agende seu horário hoje mesmo e sinta a diferença com nossos estilistas especialistas e serviços premium.
          </p>
          <button
            onClick={() => navigate('/booking')}
            className="px-8 py-3 bg-white text-purple-600 rounded-md hover:bg-gray-100 transition-colors font-medium text-lg"
          >
            Agende sua consulta
          </button>
        </div>
      </section>
    </div>
  );
};

export default HomePage;