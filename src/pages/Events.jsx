import React from 'react';
import HeroSection from '../components/HeroSection';
import EventCard from '../components/ui/EventCard';
import { CalendarIcon, ArrowDownTrayIcon } from '@heroicons/react/24/solid';

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
  
  const calendarLinks = [
    {
      id: 1,
      name: "Google Calendar",
      url: "https://calendar.google.com/calendar/ical/your-calendar-id/public/basic.ics",
      icon: <CalendarIcon className="w-6 h-6" />
    },
    {
      id: 2,
      name: "Apple Calendar",
      url: "https://calendar.google.com/calendar/ical/your-calendar-id/public/basic.ics",
      icon: <CalendarIcon className="w-6 h-6" />
    },
    {
      id: 3,
      name: "Outlook Calendar",
      url: "https://calendar.google.com/calendar/ical/your-calendar-id/public/basic.ics",
      icon: <CalendarIcon className="w-6 h-6" />
    }
  ];
  
  const eventHeroImage = "https://www.vancopayments.com/hs-fs/hubfs/Church%20Fellowship%20Event%20-%20Concert.jpg?width=1200&height=801&name=Church%20Fellowship%20Event%20-%20Concert.jpg";
  
  return (
    <div className="min-h-screen bg-gray-50">
      <HeroSection
        image={eventHeroImage}
        title="Church Events"
        description="Join us for our upcoming events and be part of our growing community."
        className="h-[70vh]"
        opacity="30"
      />
      <div className="max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8">
        <h1 className="text-2xl font-semibold text-gray-900 mb-6">Upcoming Events</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {events.map((event) => (
            <EventCard
              key={event.id}
              image={event.image}
              title={event.title}
              date={event.date}
              time={event.time}
              description={event.description}
            />
          ))}
        </div>

       
      </div>
    </div>
  );
};

export default Events; 