import React from 'react';
import Hero from '../components/Hero';
import { useNavigate } from 'react-router-dom';
import { services } from '../data/services';
import { stylists } from '../data/stylists';
import ServiceCard from '../components/ServiceCard';
import StylistCard from '../components/StylistCard';
import { ArrowRight, Check, Star, Clock, Scissors, Brush, MessageSquare } from 'lucide-react';

const HomePage: React.FC = () => {
  const navigate = useNavigate();
  const featuredServices = services.slice(0, 4);
  const featuredStylists = stylists.slice(0, 3);

  return (
    <div>
      <Hero />
      
      {/* Featured Services */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover our range of professional hair services designed to enhance your natural beauty and leave you feeling refreshed.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredServices.map(service => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
          
          <div className="text-center mt-10">
            <button 
              onClick={() => navigate('/services')}
              className="inline-flex items-center text-purple-600 font-medium hover:text-purple-700 transition-colors"
            >
              View All Services
              <ArrowRight size={16} className="ml-1" />
            </button>
          </div>
        </div>
      </section>
      
      {/* Why Choose Us */}
      <section className="py-16 bg-purple-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Why Choose Us</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We're committed to providing you with the highest quality hair care and an exceptional salon experience.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-md transform transition-transform hover:scale-[1.03]">
              <div className="bg-purple-100 w-14 h-14 rounded-full flex items-center justify-center mb-5">
                <Scissors className="text-purple-600" size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Expert Stylists</h3>
              <p className="text-gray-600">
                Our team of experienced professionals stays up-to-date with the latest trends and techniques.
              </p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-start">
                  <Check size={16} className="text-green-500 mt-1 mr-2" />
                  <span className="text-gray-700">Continuously trained</span>
                </li>
                <li className="flex items-start">
                  <Check size={16} className="text-green-500 mt-1 mr-2" />
                  <span className="text-gray-700">Years of experience</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-md transform transition-transform hover:scale-[1.03]">
              <div className="bg-purple-100 w-14 h-14 rounded-full flex items-center justify-center mb-5">
                <Brush className="text-purple-600" size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Premium Products</h3>
              <p className="text-gray-600">
                We use only the highest quality products to ensure the best results for your hair.
              </p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-start">
                  <Check size={16} className="text-green-500 mt-1 mr-2" />
                  <span className="text-gray-700">Salon-quality brands</span>
                </li>
                <li className="flex items-start">
                  <Check size={16} className="text-green-500 mt-1 mr-2" />
                  <span className="text-gray-700">Environmentally friendly</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-md transform transition-transform hover:scale-[1.03]">
              <div className="bg-purple-100 w-14 h-14 rounded-full flex items-center justify-center mb-5">
                <Clock className="text-purple-600" size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Convenient Booking</h3>
              <p className="text-gray-600">
                Our online booking system makes it easy to schedule appointments on your time.
              </p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-start">
                  <Check size={16} className="text-green-500 mt-1 mr-2" />
                  <span className="text-gray-700">24/7 online booking</span>
                </li>
                <li className="flex items-start">
                  <Check size={16} className="text-green-500 mt-1 mr-2" />
                  <span className="text-gray-700">Appointment reminders</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* Featured Stylists */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Meet Our Stylists</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our talented team of professionals is dedicated to providing you with exceptional service and results.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredStylists.map(stylist => (
              <StylistCard key={stylist.id} stylist={stylist} />
            ))}
          </div>
          
          <div className="text-center mt-10">
            <button 
              onClick={() => navigate('/stylists')}
              className="inline-flex items-center text-purple-600 font-medium hover:text-purple-700 transition-colors"
            >
              View All Stylists
              <ArrowRight size={16} className="ml-1" />
            </button>
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">What Our Clients Say</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Don't just take our word for it. Here's what our satisfied clients have to say about their experiences.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-md relative">
              <div className="absolute -top-4 left-6 text-purple-600">
                <MessageSquare size={32} className="fill-purple-100 stroke-purple-600" />
              </div>
              <div className="pt-4">
                <div className="flex items-center mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} size={18} className="fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  "The stylists here are amazing! I've been coming for years and have never been disappointed. My hair has never looked better!"
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full overflow-hidden mr-3">
                    <img 
                      src="https://images.pexels.com/photos/1674752/pexels-photo-1674752.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                      alt="Client" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">Emily Johnson</p>
                    <p className="text-sm text-gray-500">Regular Client</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-md relative">
              <div className="absolute -top-4 left-6 text-purple-600">
                <MessageSquare size={32} className="fill-purple-100 stroke-purple-600" />
              </div>
              <div className="pt-4">
                <div className="flex items-center mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} size={18} className="fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  "I had a balayage done here and it exceeded all my expectations. The color is perfect and the booking process was so easy!"
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full overflow-hidden mr-3">
                    <img 
                      src="https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                      alt="Client" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">Sarah Miller</p>
                    <p className="text-sm text-gray-500">New Client</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-md relative">
              <div className="absolute -top-4 left-6 text-purple-600">
                <MessageSquare size={32} className="fill-purple-100 stroke-purple-600" />
              </div>
              <div className="pt-4">
                <div className="flex items-center mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} size={18} className="fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  "The staff is professional and friendly, and the salon has a great atmosphere. I always look forward to my appointments here."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full overflow-hidden mr-3">
                    <img 
                      src="https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                      alt="Client" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">Michael Davis</p>
                    <p className="text-sm text-gray-500">Loyal Client</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="py-16 bg-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Look?</h2>
          <p className="text-lg text-purple-100 mb-8 max-w-2xl mx-auto">
            Book your appointment today and experience the difference with our expert stylists and premium services.
          </p>
          <button 
            onClick={() => navigate('/booking')}
            className="px-8 py-3 bg-white text-purple-600 rounded-md hover:bg-gray-100 transition-colors font-medium text-lg"
          >
            Book Your Appointment
          </button>
        </div>
      </section>
    </div>
  );
};

export default HomePage;