import React from 'react';
import { 
  ArrowPathIcon, 
  HeartIcon, 
  CakeIcon, 
  UserPlusIcon,
  UsersIcon,
  CalendarIcon,
  BeakerIcon
} from '@heroicons/react/24/solid';
import HeroSection from '../components/HeroSection';
import { CpuChipIcon } from '@heroicons/react/24/outline';

const Services = () => {
  const serviceTimes = [
    {
      day: 'Sunday',
      times: ['9:00 AM - Traditional Service', '11:00 AM - Contemporary Service'],
      description: 'Join us for worship, prayer, and fellowship'
    },
    {
      day: 'Wednesday',
      times: ['7:00 PM - Bible Study', '7:00 PM - Youth Group'],
      description: 'Midweek spiritual growth and community'
    }
  ];

  const specialServices = [
    {
      id: 1,
      title: "Baptism",
      description: "Celebrate new life in Christ through baptism",
      icon: <UserPlusIcon className="w-12 h-12 text-gray-900 mx-auto mb-4" />
    },
    {
      id: 2,
      title: "Communion",
      description: "First Sunday of each month",
      icon: <BeakerIcon className="w-12 h-12 text-gray-900 mx-auto mb-4" />
    },
    {
      id: 3,
      title: "Weddings",
      description: "Celebrate your special day in our sanctuary",
      icon: <UsersIcon className="w-12 h-12 text-gray-900 mx-auto mb-4" />
    }
  ];

  const heroButtons = [
    {
      text: "Service Times",
      href: "#service-times",
      variant: "solid"
    },
    {
      text: "Watch Live",
      href: "#live-stream",
      variant: "outline"
    }
  ];

  const serviceHeroImage = "https://images.unsplash.com/photo-1662151900393-97f6bc1567ef?q=80&w=2029&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  return (
    <div className="min-h-screen">
      <HeroSection
        image={serviceHeroImage}
        title="Join Us in Worship"
        description="Experience the power of worship and fellowship in our vibrant community"
        buttons={heroButtons}
        className="h-[70vh]"
        opacity="30"
      />

      <div className='bg-[#F9FAFB]'>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div id="service-times" className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {serviceTimes.map((service, index) => (
              <div key={index} className="bg-white p-8 border border-gray-100 ">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">{service.day}</h2>
                <ul className="space-y-3 mb-4">
                  {service.times.map((time, timeIndex) => (
                    <li key={timeIndex} className="text-gray-600">{time}</li>
                  ))}
                </ul>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>

          <div className="p-8 mb-16">
            <h2 className="text-2xl font-semibold text-center text-gray-900 mb-6">Special Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {specialServices.map((service) => (
                <div key={service.id} className="text-center bg-white p-8 rounded-lg border border-gray-100 transition-shadow">
                  {service.icon}
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div id="live-stream" className="bg-white p-8 border border-gray-100 ">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Livestream Services</h2>
            <p className="text-gray-600 mb-4">
              Can't make it to church? Join us online through our livestream service every Sunday at 11:00 AM.
              Watch previous services on our YouTube channel.
            </p>
            <button className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors">
              Watch Live
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services; 