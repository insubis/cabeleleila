import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface DatePickerProps {
  selectedDate: Date;
  onDateChange: (date: Date) => void;
}

const DatePicker: React.FC<DatePickerProps> = ({ selectedDate, onDateChange }) => {
  const today = new Date();
  const daysInMonth = new Date(
    selectedDate.getFullYear(),
    selectedDate.getMonth() + 1,
    0
  ).getDate();

  // Get day of week of the first day of the month (0 = Sunday, 6 = Saturday)
  const firstDayOfMonth = new Date(
    selectedDate.getFullYear(),
    selectedDate.getMonth(),
    1
  ).getDay();

  // Generate array of days in the month
  const daysArray = Array.from({ length: daysInMonth }, (_, i) => i + 1);

  // Generate empty cells for days before the first day of the month
  const emptyDays = Array.from({ length: firstDayOfMonth }, (_, i) => i);

  // Handle month navigation
  const prevMonth = () => {
    const newDate = new Date(selectedDate);
    newDate.setMonth(newDate.getMonth() - 1);
    onDateChange(newDate);
  };

  const nextMonth = () => {
    const newDate = new Date(selectedDate);
    newDate.setMonth(newDate.getMonth() + 1);
    onDateChange(newDate);
  };

  // Check if a date is selectable (today or future date)
  const isSelectable = (day: number) => {
    const date = new Date(
      selectedDate.getFullYear(),
      selectedDate.getMonth(),
      day
    );
    return (
      date >= new Date(today.getFullYear(), today.getMonth(), today.getDate())
    );
  };

  // Check if a date is selected
  const isSelected = (day: number) =>
    selectedDate.getDate() === day &&
    selectedDate.getMonth() === selectedDate.getMonth() &&
    selectedDate.getFullYear() === selectedDate.getFullYear();

  // Handle date selection
  const handleDateSelect = (day: number) => {
    if (isSelectable(day)) {
      const newDate = new Date(
        selectedDate.getFullYear(),
        selectedDate.getMonth(),
        day
      );
      onDateChange(newDate);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <div className="flex items-center justify-between mb-4">
        <button
          onClick={prevMonth}
          className="p-2 rounded-full hover:bg-gray-100 transition-colors"
          aria-label="Previous month"
        >
          <ChevronLeft size={20} />
        </button>
        <h2 className="text-lg font-semibold">
          {selectedDate.toLocaleString('default', {
            month: 'long',
            year: 'numeric',
          })}
        </h2>
        <button
          onClick={nextMonth}
          className="p-2 rounded-full hover:bg-gray-100 transition-colors"
          aria-label="Next month"
        >
          <ChevronRight size={20} />
        </button>
      </div>

      <div className="grid grid-cols-7 gap-1 mb-2">
        {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, index) => (
          <div
            key={index}
            className="text-center text-sm font-medium text-gray-500"
          >
            {day}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-1">
        {emptyDays.map((_, index) => (
          <div key={`empty-${index}`} className="h-9"></div>
        ))}

        {daysArray.map((day) => (
          <button
            key={day}
            onClick={() => handleDateSelect(day)}
            disabled={!isSelectable(day)}
            className={`h-9 w-full flex items-center justify-center rounded-full text-sm transition-colors ${
              isSelected(day)
                ? 'bg-purple-600 text-white'
                : isSelectable(day)
                ? 'hover:bg-purple-100 text-gray-700'
                : 'text-gray-300 cursor-not-allowed'
            }`}
          >
            {day}
          </button>
        ))}
      </div>
    </div>
  );
};

export default DatePicker;