import React from 'react';
import { Clock, DollarSign } from 'lucide-react';
import { Service } from '../types';
import { useAppContext } from '../contexts/AppContext';
import { useNavigate } from 'react-router-dom';

interface ServiceCardProps {
  service: Service;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  const { setSelectedService } = useAppContext();
  const navigate = useNavigate();

  const handleBookNow = () => {
    setSelectedService(service);
    navigate('/booking');
  };

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden transition-transform duration-300 hover:scale-[1.02] hover:shadow-lg">
      <div className="h-48 overflow-hidden">
        <img 
          src={service.image} 
          alt={service.name} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{service.name}</h3>
        <p className="text-gray-600 mb-4">{service.description}</p>
        
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center text-gray-500">
            <Clock size={16} className="mr-1" />
            <span>{service.duration} min</span>
          </div>
          <div className="flex items-center text-gray-700 font-medium">
            <DollarSign size={16} className="mr-1" />
            <span>${service.price}</span>
          </div>
        </div>
        
        <button
          onClick={handleBookNow}
          className="w-full py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors flex items-center justify-center"
        >
          Book Now
        </button>
      </div>
    </div>
  );
};

export default ServiceCard;