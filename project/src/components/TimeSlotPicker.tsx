import React from 'react';
import { TimeSlot } from '../types';
import { generateTimeSlots } from '../data/timeSlots';

interface TimeSlotPickerProps {
  selectedDate: Date;
  selectedTime: string | null;
  onTimeSelect: (time: string) => void;
}

const TimeSlotPicker: React.FC<TimeSlotPickerProps> = ({
  selectedDate,
  selectedTime,
  onTimeSelect,
}) => {
  const timeSlots = generateTimeSlots(selectedDate);

  // Group time slots by morning, afternoon, and evening
  const morningSlots = timeSlots.filter(
    (slot) => parseInt(slot.time.split(':')[0]) < 12
  );
  const afternoonSlots = timeSlots.filter(
    (slot) =>
      parseInt(slot.time.split(':')[0]) >= 12 &&
      parseInt(slot.time.split(':')[0]) < 17
  );
  const eveningSlots = timeSlots.filter(
    (slot) => parseInt(slot.time.split(':')[0]) >= 17
  );

  const renderTimeSlots = (slots: TimeSlot[], title: string) => {
    if (slots.length === 0) return null;

    return (
      <div className="mb-6">
        <h3 className="text-sm font-medium text-gray-500 mb-3">{title}</h3>
        <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
          {slots.map((slot) => (
            <button
              key={slot.id}
              onClick={() => slot.available && onTimeSelect(slot.time)}
              disabled={!slot.available}
              className={`py-2 px-3 rounded-md text-sm font-medium transition-colors ${selectedTime === slot.time
                ? 'bg-purple-600 text-white'
                : slot.available
                  ? 'bg-white border border-gray-200 hover:border-purple-600 text-gray-700'
                  : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                }`}
            >
              {formatTime(slot.time)}
            </button>
          ))}
        </div>
      </div>
    );
  };

  const formatTime = (time: string) => {
    const [hour, minute] = time.split(':');
    const hourNum = parseInt(hour);
    const period = hourNum >= 12 ? 'PM' : 'AM';
    const hour12 = hourNum % 12 || 12;
    return `${hour12}:${minute} ${period}`;
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <h2 className="text-lg font-semibold mb-4">Horários disponíveis</h2>
      {renderTimeSlots(morningSlots, 'Morning')}
      {renderTimeSlots(afternoonSlots, 'Afternoon')}
      {renderTimeSlots(eveningSlots, 'Evening')}

      {timeSlots.length === 0 && (
        <p className="text-center text-gray-500 py-4">
          Não há horários disponíveis para esta data. Selecione outra data.
        </p>
      )}
    </div>
  );
};

export default TimeSlotPicker;