import React, { useState } from 'react';
import { useAppContext } from '../contexts/AppContext';
import AppointmentCard from '../components/AppointmentCard';
import { Calendar, Filter, PlusCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const AppointmentsPage: React.FC = () => {
  const { appointments, isAuthenticated } = useAppContext();
  const navigate = useNavigate();
  const [statusFilter, setStatusFilter] = useState<string | null>(null);
  
  // Redirect if not authenticated
  React.useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login', { state: { redirectTo: '/appointments' } });
    }
  }, [isAuthenticated, navigate]);
  
  if (!isAuthenticated) {
    return null;
  }
  
  // Filter appointments based on status
  const filteredAppointments = statusFilter 
    ? appointments.filter(appointment => appointment.status === statusFilter)
    : appointments;
  
  // Group appointments by upcoming and past
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  
  const upcomingAppointments = filteredAppointments.filter(appointment => {
    const appointmentDate = new Date(appointment.date);
    return appointmentDate >= today && appointment.status !== 'cancelled';
  });
  
  const pastAppointments = filteredAppointments.filter(appointment => {
    const appointmentDate = new Date(appointment.date);
    return appointmentDate < today || appointment.status === 'cancelled';
  });

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-800 mb-2">My Appointments</h1>
            <p className="text-gray-600">
              View and manage all your scheduled appointments.
            </p>
          </div>
          
          <button
            onClick={() => navigate('/booking')}
            className="mt-4 md:mt-0 px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors flex items-center"
          >
            <PlusCircle size={18} className="mr-2" />
            New Appointment
          </button>
        </div>
        
        {/* Filters */}
        <div className="mb-8 flex items-center space-x-2 overflow-x-auto pb-2">
          <div className="text-gray-500 flex items-center mr-2">
            <Filter size={16} className="mr-1" />
            <span>Filter:</span>
          </div>
          
          <button
            onClick={() => setStatusFilter(null)}
            className={`px-3 py-1 rounded-md text-sm transition-colors ${
              statusFilter === null
                ? 'bg-purple-600 text-white'
                : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
            }`}
          >
            All
          </button>
          
          <button
            onClick={() => setStatusFilter('confirmed')}
            className={`px-3 py-1 rounded-md text-sm transition-colors ${
              statusFilter === 'confirmed'
                ? 'bg-purple-600 text-white'
                : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
            }`}
          >
            Confirmed
          </button>
          
          <button
            onClick={() => setStatusFilter('pending')}
            className={`px-3 py-1 rounded-md text-sm transition-colors ${
              statusFilter === 'pending'
                ? 'bg-purple-600 text-white'
                : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
            }`}
          >
            Pending
          </button>
          
          <button
            onClick={() => setStatusFilter('cancelled')}
            className={`px-3 py-1 rounded-md text-sm transition-colors ${
              statusFilter === 'cancelled'
                ? 'bg-purple-600 text-white'
                : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
            }`}
          >
            Cancelled
          </button>
          
          <button
            onClick={() => setStatusFilter('completed')}
            className={`px-3 py-1 rounded-md text-sm transition-colors ${
              statusFilter === 'completed'
                ? 'bg-purple-600 text-white'
                : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
            }`}
          >
            Completed
          </button>
        </div>
        
        {/* No Appointments */}
        {appointments.length === 0 && (
          <div className="bg-white rounded-lg shadow-md p-8 text-center">
            <Calendar size={48} className="mx-auto text-gray-400 mb-4" />
            <h2 className="text-xl font-semibold text-gray-800 mb-2">No Appointments Found</h2>
            <p className="text-gray-600 mb-6">
              You don't have any appointments scheduled yet. Book your first appointment now!
            </p>
            <button
              onClick={() => navigate('/booking')}
              className="px-6 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors"
            >
              Book an Appointment
            </button>
          </div>
        )}
        
        {/* Upcoming Appointments */}
        {upcomingAppointments.length > 0 && (
          <div className="mb-10">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Upcoming Appointments</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {upcomingAppointments.map(appointment => (
                <AppointmentCard key={appointment.id} appointment={appointment} />
              ))}
            </div>
          </div>
        )}
        
        {/* Past Appointments */}
        {pastAppointments.length > 0 && (
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Past Appointments</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {pastAppointments.map(appointment => (
                <AppointmentCard key={appointment.id} appointment={appointment} />
              ))}
            </div>
          </div>
        )}
        
        {/* No Results for Filter */}
        {appointments.length > 0 && filteredAppointments.length === 0 && (
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <p className="text-gray-600">
              No appointments match your selected filter. 
              <button 
                onClick={() => setStatusFilter(null)} 
                className="text-purple-600 hover:text-purple-700 ml-1"
              >
                Clear filter
              </button>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AppointmentsPage;