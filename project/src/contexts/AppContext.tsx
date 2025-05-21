import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Service, Stylist, Appointment, User } from '../types';
import { services } from '../data/services';
import { stylists } from '../data/stylists';

interface AppContextType {
  selectedService: Service | null;
  selectedStylist: Stylist | null;
  selectedDate: Date;
  selectedTime: string | null;
  appointments: Appointment[];
  currentUser: User | null;
  isAuthenticated: boolean;
  setSelectedService: (service: Service | null) => void;
  setSelectedStylist: (stylist: Stylist | null) => void;
  setSelectedDate: (date: Date) => void;
  setSelectedTime: (time: string | null) => void;
  addAppointment: (appointment: Appointment) => void;
  cancelAppointment: (id: string) => void;
  login: (user: User) => void;
  logout: () => void;
}

const defaultContext: AppContextType = {
  selectedService: null,
  selectedStylist: null,
  selectedDate: new Date(),
  selectedTime: null,
  appointments: [],
  currentUser: null,
  isAuthenticated: false,
  setSelectedService: () => {},
  setSelectedStylist: () => {},
  setSelectedDate: () => {},
  setSelectedTime: () => {},
  addAppointment: () => {},
  cancelAppointment: () => {},
  login: () => {},
  logout: () => {},
};

const AppContext = createContext<AppContextType>(defaultContext);

export const useAppContext = () => useContext(AppContext);

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [selectedStylist, setSelectedStylist] = useState<Stylist | null>(null);
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  const addAppointment = (appointment: Appointment) => {
    setAppointments([...appointments, appointment]);
  };

  const cancelAppointment = (id: string) => {
    setAppointments(
      appointments.map(appointment => 
        appointment.id === id 
          ? { ...appointment, status: 'cancelled' as const } 
          : appointment
      )
    );
  };

  const login = (user: User) => {
    setCurrentUser(user);
    setIsAuthenticated(true);
  };

  const logout = () => {
    setCurrentUser(null);
    setIsAuthenticated(false);
  };

  return (
    <AppContext.Provider
      value={{
        selectedService,
        selectedStylist,
        selectedDate,
        selectedTime,
        appointments,
        currentUser,
        isAuthenticated,
        setSelectedService,
        setSelectedStylist,
        setSelectedDate,
        setSelectedTime,
        addAppointment,
        cancelAppointment,
        login,
        logout,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};