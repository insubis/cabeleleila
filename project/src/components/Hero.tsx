import React from 'react';
import { Calendar } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Hero: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen flex items-center bg-gradient-to-br from-purple-50 to-gray-100">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 bg-repeat z-0" style={{
        backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%239C92AC\' fill-opacity=\'0.4\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
      }} />

      <div className="container mx-auto px-4 pt-24 z-10">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 lg:pr-10 mb-10 lg:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-6 leading-tight">
              <span className="block">A beleza começa com</span>
              <span className="text-purple-600">compromissos perfeitos</span>
            </h1>

            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Agende sua próxima visita ao salão com facilidade. Estilistas profissionais, serviços premium e uma experiência de reserva perfeita.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => navigate('/booking')}
                className="px-8 py-3 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors flex items-center justify-center font-medium text-lg"
              >
                <Calendar size={20} className="mr-2" />
                Book Appointment
              </button>

              <button
                onClick={() => navigate('/services')}
                className="px-8 py-3 bg-white text-gray-800 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors font-medium text-lg"
              >
                Ver serviços
              </button>
            </div>
          </div>

          <div className="lg:w-1/2 relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-500">
              <img
                src="https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Hair Salon"
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Floating badges */}
            <div className="absolute -top-10 -left-10 md:top-10 md:-left-16 bg-white rounded-lg shadow-md p-3 transform rotate-[-8deg] animate-float">
              <div className="flex items-center space-x-2">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="font-medium">Aprovado por mais de 1.000 clientes</span>
              </div>
            </div>

            <div className="absolute -bottom-6 -right-6 md:bottom-10 md:-right-10 bg-white rounded-lg shadow-md py-2 px-4 transform rotate-[5deg] animate-float-delayed">
              <p className="font-medium text-gray-800">Serviços capilares premium</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;