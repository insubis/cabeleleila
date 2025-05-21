import React from 'react';
import { Calendar, Clock, User, Scissors } from 'lucide-react';
import { useAppContext } from '../contexts/AppContext';
import { useNavigate } from 'react-router-dom';

interface AppointmentSummaryProps {
  onConfirm?: () => void;
  isPreview?: boolean;
}

const AppointmentSummary: React.FC<AppointmentSummaryProps> = ({ 
  onConfirm, 
  isPreview = true 
}) => {
  const { 
    selectedService, 
    selectedStylist, 
    selectedDate, 
    selectedTime,
    isAuthenticated
  } = useAppContext();
  const navigate = useNavigate();

  if (!selectedService || !selectedStylist || !selectedTime) {
    return (
      <div className="bg-white rounded-lg shadow-md p-6 text-center">
        <p className="text-gray-500">
          Please select a service, stylist, and time to see your appointment summary.
        </p>
      </div>
    );
  }

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const formatTime = (time: string) => {
    const [hour, minute] = time.split(':');
    const hourNum = parseInt(hour);
    const period = hourNum >= 12 ? 'PM' : 'AM';
    const hour12 = hourNum % 12 || 12;
    return `${hour12}:${minute} ${period}`;
  };

  const handleBookNow = () => {
    if (!isAuthenticated) {
      navigate('/login', { state: { redirectTo: '/booking' } });
      return;
    }
    
    if (onConfirm) {
      onConfirm();
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="bg-purple-600 text-white px-6 py-4">
        <h2 className="text-xl font-semibold">Appointment Summary</h2>
      </div>
      
      <div className="p-6">
        <div className="flex items-start space-x-3 mb-4">
          <Scissors className="text-purple-600 mt-1 flex-shrink-0" size={20} />
          <div>
            <p className="text-gray-500 text-sm">Service</p>
            <p className="font-medium">{selectedService.name}</p>
            <p className="text-gray-600 text-sm">${selectedService.price} • {selectedService.duration} min</p>
          </div>
        </div>
        
        <div className="flex items-start space-x-3 mb-4">
          <User className="text-purple-600 mt-1 flex-shrink-0" size={20} />
          <div>
            <p className="text-gray-500 text-sm">Stylist</p>
            <p className="font-medium">{selectedStylist.name}</p>
            <p className="text-gray-600 text-sm">{selectedStylist.specialty}</p>
          </div>
        </div>
        
        <div className="flex items-start space-x-3 mb-4">
          <Calendar className="text-purple-600 mt-1 flex-shrink-0" size={20} />
          <div>
            <p className="text-gray-500 text-sm">Date</p>
            <p className="font-medium">{formatDate(selectedDate)}</p>
          </div>
        </div>
        
        <div className="flex items-start space-x-3 mb-6">
          <Clock className="text-purple-600 mt-1 flex-shrink-0" size={20} />
          <div>
            <p className="text-gray-500 text-sm">Time</p>
            <p className="font-medium">{formatTime(selectedTime)}</p>
          </div>
        </div>
        
        {isPreview && (
          <div className="border-t border-gray-200 pt-4 mt-2">
            <div className="flex justify-between items-center mb-4">
              <span className="text-gray-700">Total</span>
              <span className="text-lg font-semibold">${selectedService.price}</span>
            </div>
            
            <button
              onClick={handleBookNow}
              className="w-full py-3 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors flex items-center justify-center font-medium"
            >
              {isAuthenticated ? 'Confirm Booking' : 'Sign In to Book'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default AppointmentSummary;