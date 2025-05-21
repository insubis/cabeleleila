import React from 'react';
import { Calendar, Clock, Scissors, User, Check, X } from 'lucide-react';
import { Appointment } from '../types';
import { useAppContext } from '../contexts/AppContext';
import { services } from '../data/services';
import { stylists } from '../data/stylists';

interface AppointmentCardProps {
  appointment: Appointment;
}

const AppointmentCard: React.FC<AppointmentCardProps> = ({ appointment }) => {
  const { cancelAppointment } = useAppContext();
  
  const service = services.find(s => s.id === appointment.serviceId);
  const stylist = stylists.find(s => s.id === appointment.stylistId);
  
  if (!service || !stylist) return null;

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
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

  const getStatusColor = () => {
    switch (appointment.status) {
      case 'confirmed':
        return 'text-green-600 bg-green-50 border-green-200';
      case 'pending':
        return 'text-amber-600 bg-amber-50 border-amber-200';
      case 'cancelled':
        return 'text-red-600 bg-red-50 border-red-200';
      case 'completed':
        return 'text-blue-600 bg-blue-50 border-blue-200';
      default:
        return 'text-gray-600 bg-gray-50 border-gray-200';
    }
  };

  const getStatusIcon = () => {
    switch (appointment.status) {
      case 'confirmed':
        return <Check size={14} className="mr-1" />;
      case 'cancelled':
        return <X size={14} className="mr-1" />;
      default:
        return null;
    }
  };

  const isPastAppointment = () => {
    const appointmentDate = new Date(appointment.date);
    const today = new Date();
    
    return appointmentDate < today;
  };

  const handleCancel = () => {
    if (window.confirm('Are you sure you want to cancel this appointment?')) {
      cancelAppointment(appointment.id);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100">
      <div className="p-5">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-lg font-semibold text-gray-800">{service.name}</h3>
          <span className={`px-3 py-1 rounded-full text-xs font-medium flex items-center border ${getStatusColor()}`}>
            {getStatusIcon()}
            {appointment.status.charAt(0).toUpperCase() + appointment.status.slice(1)}
          </span>
        </div>
        
        <div className="space-y-3 mb-5">
          <div className="flex items-start space-x-3">
            <Calendar className="text-purple-600 mt-1 flex-shrink-0" size={18} />
            <div>
              <p className="text-gray-700">{formatDate(appointment.date)}</p>
            </div>
          </div>
          
          <div className="flex items-start space-x-3">
            <Clock className="text-purple-600 mt-1 flex-shrink-0" size={18} />
            <div>
              <p className="text-gray-700">{formatTime(appointment.timeSlot)}</p>
              <p className="text-gray-500 text-sm">{service.duration} minutes</p>
            </div>
          </div>
          
          <div className="flex items-start space-x-3">
            <User className="text-purple-600 mt-1 flex-shrink-0" size={18} />
            <div>
              <p className="text-gray-700">{stylist.name}</p>
              <p className="text-gray-500 text-sm">{stylist.specialty}</p>
            </div>
          </div>
          
          <div className="flex items-start space-x-3">
            <Scissors className="text-purple-600 mt-1 flex-shrink-0" size={18} />
            <div>
              <p className="text-gray-700">${service.price}</p>
            </div>
          </div>
        </div>
        
        {appointment.status !== 'cancelled' && appointment.status !== 'completed' && !isPastAppointment() && (
          <div className="flex space-x-3">
            <button
              onClick={handleCancel}
              className="flex-1 py-2 border border-red-500 text-red-500 rounded-md hover:bg-red-50 transition-colors"
            >
              Cancel
            </button>
            <button
              className="flex-1 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors"
            >
              Reschedule
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default AppointmentCard;