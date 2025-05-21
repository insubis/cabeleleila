import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { services } from '../data/services';
import { stylists } from '../data/stylists';
import { useAppContext } from '../contexts/AppContext';
import ServiceCard from '../components/ServiceCard';
import StylistCard from '../components/StylistCard';
import DatePicker from '../components/DatePicker';
import TimeSlotPicker from '../components/TimeSlotPicker';
import AppointmentSummary from '../components/AppointmentSummary';
import { ChevronRight } from 'lucide-react';

const BookingPage: React.FC = () => {
  const {
    selectedService,
    selectedStylist,
    selectedDate,
    selectedTime,
    setSelectedDate,
    setSelectedTime,
    addAppointment,
    isAuthenticated,
    currentUser
  } = useAppContext();
  
  const navigate = useNavigate();
  const location = useLocation();
  
  // Step tracking
  const getCurrentStep = () => {
    if (!selectedService) return 1;
    if (!selectedStylist) return 2;
    if (!selectedTime) return 3;
    return 4;
  };
  
  const currentStep = getCurrentStep();
  
  // Handle booking confirmation
  const handleConfirmBooking = () => {
    if (!selectedService || !selectedStylist || !selectedTime || !currentUser) {
      return;
    }
    
    const newAppointment = {
      id: `appointment-${Date.now()}`,
      userId: currentUser.id,
      stylistId: selectedStylist.id,
      serviceId: selectedService.id,
      date: selectedDate.toISOString().split('T')[0],
      timeSlot: selectedTime,
      status: 'confirmed' as const
    };
    
    addAppointment(newAppointment);
    navigate('/booking-success');
  };
  
  // Redirect to login if not authenticated and trying to confirm
  useEffect(() => {
    if (currentStep === 4 && !isAuthenticated) {
      navigate('/login', { state: { redirectTo: location.pathname } });
    }
  }, [currentStep, isAuthenticated, navigate, location.pathname]);

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Book Your Appointment</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Complete the steps below to schedule your salon appointment. Select your service, choose a stylist, pick a date and time, and confirm your booking.
          </p>
          
          {/* Booking Steps */}
          <div className="flex items-center justify-center mt-8 max-w-3xl mx-auto">
            <div className={`flex flex-col items-center ${currentStep >= 1 ? 'text-purple-600' : 'text-gray-400'}`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center mb-2 ${
                currentStep >= 1 ? 'bg-purple-600 text-white' : 'bg-gray-200 text-gray-500'
              }`}>
                1
              </div>
              <span className="text-xs">Service</span>
            </div>
            
            <div className={`w-12 h-0.5 mx-1 ${currentStep >= 2 ? 'bg-purple-600' : 'bg-gray-200'}`}></div>
            
            <div className={`flex flex-col items-center ${currentStep >= 2 ? 'text-purple-600' : 'text-gray-400'}`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center mb-2 ${
                currentStep >= 2 ? 'bg-purple-600 text-white' : 'bg-gray-200 text-gray-500'
              }`}>
                2
              </div>
              <span className="text-xs">Stylist</span>
            </div>
            
            <div className={`w-12 h-0.5 mx-1 ${currentStep >= 3 ? 'bg-purple-600' : 'bg-gray-200'}`}></div>
            
            <div className={`flex flex-col items-center ${currentStep >= 3 ? 'text-purple-600' : 'text-gray-400'}`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center mb-2 ${
                currentStep >= 3 ? 'bg-purple-600 text-white' : 'bg-gray-200 text-gray-500'
              }`}>
                3
              </div>
              <span className="text-xs">Date & Time</span>
            </div>
            
            <div className={`w-12 h-0.5 mx-1 ${currentStep >= 4 ? 'bg-purple-600' : 'bg-gray-200'}`}></div>
            
            <div className={`flex flex-col items-center ${currentStep >= 4 ? 'text-purple-600' : 'text-gray-400'}`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center mb-2 ${
                currentStep >= 4 ? 'bg-purple-600 text-white' : 'bg-gray-200 text-gray-500'
              }`}>
                4
              </div>
              <span className="text-xs">Confirm</span>
            </div>
          </div>
        </div>
        
        <div className="max-w-6xl mx-auto">
          {/* Step 1: Select Service */}
          {currentStep === 1 && (
            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-6">Select a Service</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {services.map(service => (
                  <ServiceCard key={service.id} service={service} />
                ))}
              </div>
            </div>
          )}
          
          {/* Step 2: Select Stylist */}
          {currentStep === 2 && (
            <div>
              <div className="flex items-center mb-6 text-gray-500 hover:text-purple-600 cursor-pointer" onClick={() => navigate('/booking')}>
                <ChevronRight size={16} className="transform rotate-180 mr-1" />
                <span>Back to Services</span>
              </div>
              
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">Select a Stylist</h2>
              <p className="text-gray-600 mb-6">
                You've selected: <span className="font-medium text-purple-600">{selectedService?.name}</span>
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {stylists.map(stylist => (
                  <StylistCard key={stylist.id} stylist={stylist} />
                ))}
              </div>
            </div>
          )}
          
          {/* Step 3: Select Date and Time */}
          {currentStep === 3 && (
            <div>
              <div className="flex items-center mb-6 text-gray-500 hover:text-purple-600 cursor-pointer" onClick={() => navigate('/stylists')}>
                <ChevronRight size={16} className="transform rotate-180 mr-1" />
                <span>Back to Stylists</span>
              </div>
              
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">Select Date and Time</h2>
              <p className="text-gray-600 mb-6">
                You've selected: <span className="font-medium text-purple-600">{selectedService?.name}</span> with <span className="font-medium text-purple-600">{selectedStylist?.name}</span>
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <DatePicker 
                  selectedDate={selectedDate} 
                  onDateChange={setSelectedDate} 
                />
                
                <TimeSlotPicker 
                  selectedDate={selectedDate}
                  selectedTime={selectedTime}
                  onTimeSelect={setSelectedTime}
                />
              </div>
            </div>
          )}
          
          {/* Step 4: Confirm Booking */}
          {currentStep === 4 && (
            <div>
              <div className="flex items-center mb-6 text-gray-500 hover:text-purple-600 cursor-pointer" onClick={() => setSelectedTime(null)}>
                <ChevronRight size={16} className="transform rotate-180 mr-1" />
                <span>Back to Date & Time</span>
              </div>
              
              <h2 className="text-2xl font-semibold text-gray-800 mb-6">Confirm Your Booking</h2>
              
              <div className="max-w-md mx-auto">
                <AppointmentSummary onConfirm={handleConfirmBooking} />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BookingPage;