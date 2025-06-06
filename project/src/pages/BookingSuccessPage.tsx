import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckCircle, Calendar } from 'lucide-react';
import { useAppContext } from '../contexts/AppContext';
import AppointmentSummary from '../components/AppointmentSummary';

const BookingSuccessPage: React.FC = () => {
  const navigate = useNavigate();
  const { appointments } = useAppContext();

  // Get the most recent appointment
  const latestAppointment = appointments.length > 0
    ? appointments[appointments.length - 1]
    : null;

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center mb-10">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-6">
            <CheckCircle size={40} className="text-green-500" />
          </div>

          <h1 className="text-3xl font-bold text-gray-800 mb-4">Reserva confirmada!</h1>
          <p className="text-gray-600">
            Sua consulta foi agendada com sucesso. Enviamos um e-mail de confirmação com todos os detalhes. Aguardamos sua visita em breve!
          </p>
        </div>

        {latestAppointment && (
          <div className="max-w-md mx-auto mb-10">
            <AppointmentSummary isPreview={false} />
          </div>
        )}

        <div className="max-w-md mx-auto flex flex-col md:flex-row gap-4 justify-center">
          <button
            onClick={() => navigate('/appointments')}
            className="px-6 py-3 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors flex items-center justify-center"
          >
            <Calendar size={20} className="mr-2" />
            Ver meus compromissos
          </button>

          <button
            onClick={() => navigate('/')}
            className="px-6 py-3 bg-white border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors"
          >
            Voltar para  Home
          </button>
        </div>

        {/* Reminder */}
        <div className="max-w-2xl mx-auto mt-12 bg-blue-50 border border-blue-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-blue-800 mb-2">Lembretes de compromissos</h3>
          <ul className="space-y-2 text-blue-700">
            <li>• Chegue 10 minutos antes do horário agendado.</li>
            <li>• Caso precise cancelar ou reagendar, faça-o com pelo menos 24 horas de antecedência.</li>
            <li>• Sinta-se à vontade para nos ligar em (123) 456-7890 se tiver alguma dúvida.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BookingSuccessPage;