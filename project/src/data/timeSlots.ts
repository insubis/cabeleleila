import { TimeSlot } from '../types';

export const generateTimeSlots = (date: Date): TimeSlot[] => {
  const timeSlots: TimeSlot[] = [];
  const currentDate = new Date();

  // Start at 9 AM
  const startHour = 9;
  // End at 7 PM
  const endHour = 19;

  for (let hour = startHour; hour < endHour; hour++) {
    for (let minute = 0; minute < 60; minute += 30) {
      const timeString = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;

      const isPast = date.getDate() === currentDate.getDate() &&
        date.getMonth() === currentDate.getMonth() &&
        date.getFullYear() === currentDate.getFullYear() &&
        (hour < currentDate.getHours() ||
          (hour === currentDate.getHours() && minute < currentDate.getMinutes()));

      timeSlots.push({
        id: `${date.toISOString().split('T')[0]}-${timeString}`,
        time: timeString,
        available: !isPast && Math.random() > 0.3
      });
    }
  }

  return timeSlots;
};