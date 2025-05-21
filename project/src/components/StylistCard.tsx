import React from 'react';
import { Star, Briefcase } from 'lucide-react';
import { Stylist } from '../types';
import { useAppContext } from '../contexts/AppContext';
import { useNavigate } from 'react-router-dom';

interface StylistCardProps {
  stylist: Stylist;
}

const StylistCard: React.FC<StylistCardProps> = ({ stylist }) => {
  const { setSelectedStylist } = useAppContext();
  const navigate = useNavigate();

  const handleSelectStylist = () => {
    setSelectedStylist(stylist);
    navigate('/booking');
  };

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden transition-transform duration-300 hover:scale-[1.02] hover:shadow-lg">
      <div className="h-64 overflow-hidden">
        <img 
          src={stylist.avatar} 
          alt={stylist.name} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-1">{stylist.name}</h3>
        <p className="text-purple-600 font-medium mb-3">{stylist.specialty}</p>
        
        <div className="flex items-center space-x-4 mb-4">
          <div className="flex items-center text-amber-500">
            <Star size={16} className="fill-current" />
            <span className="ml-1 text-gray-700">{stylist.rating}</span>
          </div>
          <div className="flex items-center text-gray-500">
            <Briefcase size={16} className="mr-1" />
            <span>{stylist.experience}</span>
          </div>
        </div>
        
        <button
          onClick={handleSelectStylist}
          className={`w-full py-2 rounded-md transition-colors flex items-center justify-center ${
            stylist.available 
              ? 'bg-purple-600 text-white hover:bg-purple-700' 
              : 'bg-gray-200 text-gray-500 cursor-not-allowed'
          }`}
          disabled={!stylist.available}
        >
          {stylist.available ? 'Book with this Stylist' : 'Currently Unavailable'}
        </button>
      </div>
    </div>
  );
};

export default StylistCard;