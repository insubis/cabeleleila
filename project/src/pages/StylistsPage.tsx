import React from 'react';
import { stylists } from '../data/stylists';
import StylistCard from '../components/StylistCard';

const StylistsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Our Stylists</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Meet our team of professional stylists dedicated to making you look and feel your best. Each stylist brings their unique expertise and passion to every appointment.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stylists.map(stylist => (
            <StylistCard key={stylist.id} stylist={stylist} />
          ))}
        </div>
        
        {/* Team Values */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              What sets our team apart is our commitment to excellence, continuous education, and personalized service.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-bold text-gray-800 mb-3">Expertise</h3>
              <p className="text-gray-600">
                Our stylists regularly participate in advanced training to stay current with the latest techniques and trends in the industry.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-bold text-gray-800 mb-3">Personalization</h3>
              <p className="text-gray-600">
                We believe that every client is unique. Our stylists take the time to understand your specific needs and preferences.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-bold text-gray-800 mb-3">Quality</h3>
              <p className="text-gray-600">
                We use only premium products and tools to ensure the best results and to keep your hair healthy and beautiful.
              </p>
            </div>
          </div>
        </div>
        
        {/* Join Our Team */}
        <div className="mt-20 bg-purple-600 text-white rounded-xl overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/2 p-10">
              <h2 className="text-2xl font-bold mb-4">Join Our Team</h2>
              <p className="mb-6">
                Are you a talented stylist looking for a dynamic and supportive workplace? We're always on the lookout for passionate professionals to join our team.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Competitive compensation</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Ongoing education opportunities</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Supportive team environment</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Growth and advancement potential</span>
                </li>
              </ul>
              <button className="px-6 py-2 bg-white text-purple-600 rounded-md hover:bg-gray-100 transition-colors font-medium">
                Apply Now
              </button>
            </div>
            <div className="md:w-1/2">
              <img 
                src="https://images.pexels.com/photos/3992874/pexels-photo-3992874.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Salon Team" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StylistsPage;