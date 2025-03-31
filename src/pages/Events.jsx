import React from 'react';
import HeroSection from '../components/HeroSection';
import Card from '../components/ui/Card';

const Events = () => {
  const events = [
    {
      id: 1,
      date: "Sunday, March 10, 2024",
      title: "Sunday Worship Service",
      description: "Join us for our weekly worship service with prayer and communion.",
      time: "9:00 AM - 11:00 AM",
      image: "https://www.acstechnologies.com/church-growth/wp-content/uploads/sites/5/2019/06/ACST-2019-2159-scaled.jpg"
    },
    {
      id: 2,
      date: "Wednesday, March 13, 2024",
      title: "Weekly Bible Study",
      description: "Deep dive into scripture with our community bible study group.",
      time: "7:00 PM - 8:30 PM",
      image: "https://www.neverthirsty.org/wp-content/uploads/2022/08/start-church.jpg"
    },
    {
      id: 3,
      date: "Friday, March 15, 2024",
      title: "Youth Group Meeting",
      description: "Fun activities and spiritual growth for young people ages 13-18.",
      time: "6:00 PM - 8:00 PM",
      image: "https://media.istockphoto.com/id/91811021/photo/teamwork.jpg?s=612x612&w=0&k=20&c=ldolh4-nVWxNST9lrTbzxkQSyiry846TOPECvejYb0c="
    },
    {
      id: 4,
      date: "Saturday, March 16, 2024",
      title: "Community Service Day",
      description: "Join us as we serve our local community through various outreach programs.",
      time: "10:00 AM - 2:00 PM",
      image: "https://vspot.s3.amazonaws.com/sign-up/Article+Graphics/600x300+article+-+Day+of+Service+2024.png"
    },
    {
      id: 5,
      date: "Saturday, March 23, 2024",
      title: "Worship Night",
      description: "An evening of praise and worship with our church band.",
      time: "7:00 PM - 9:00 PM",
      image: "https://t3.ftcdn.net/jpg/06/55/03/10/360_F_655031012_ezp6y04yY161INy73UC1RDarJgSbVU5B.jpg"
    },
    {
      id: 6,
      date: "Sunday, March 24, 2024",
      title: "Family Fellowship Lunch",
      description: "Join us for a potluck lunch and fellowship after service.",
      time: "12:00 PM - 2:00 PM",
      image: "https://media.istockphoto.com/id/1358090868/photo/saying-grace-at-dinner-close-up.jpg?s=612x612&w=0&k=20&c=4I0MwgQhzKvnINNMHPesJu3usxNaAiwJnZZdc5qevZY="
    }
  ];
  
 
  
  const eventHeroImage = "https://www.vancopayments.com/hs-fs/hubfs/Church%20Fellowship%20Event%20-%20Concert.jpg?width=1200&height=801&name=Church%20Fellowship%20Event%20-%20Concert.jpg";
  return (
    <div className="min-h-screen bg-gray-50  ">
      <HeroSection
        image={eventHeroImage}
        title="Church Events"
        description="Church Events
Church Events
Join us for our upcoming events and be part of our growing community."
        // buttons={heroButtons}
        height="70vh"
        opacity="30"
      />
      <div className="max-w-7xl mx-auto py-24 ">
        <h1 className="text-2xl font-semibold text-gray-900 mb-6">Upcoming Events</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {events.slice(0, 8).map((event, index) => (
            <Card key={index} image={event.image} title={event.title} date={event.date} description={event.description} />
          ))}
        </div>

        <div className="mt-16 bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Event Calendar</h2>
          <p className="text-gray-600 mb-4">
            Want to stay updated on all our events? Subscribe to our church calendar or download our mobile app.
          </p>
          <div className="flex space-x-4">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
              Subscribe to Calendar
            </button>
            <button className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors">
              Download App
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events; 