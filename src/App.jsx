import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { UserIcon, UsersIcon, MusicalNoteIcon, HandRaisedIcon } from '@heroicons/react/24/solid';
import Header from "./components/Header"
import HeroSection from "./components/HeroSection"
import ShortInfo from "./components/ShortInfo"
import CardsWrapper from "./components/CardsWrapper"
import AboutUs from "./pages/AboutUs"
import Services from "./pages/Services"
import Events from "./pages/Events"
import Ministries from "./pages/Ministries"
import Contact from "./pages/Contact"
import Sermons from "./pages/Sermons"
import Card from './components/ui/Card';
import MinistryIconCard from './components/ui/MinistryIconCard';
import pastor from "./assets/img/pastor.jpg"

const upcomingEvents = [
  {
    id: 1,
    date: "21st March 2025",
    title: "Sunday Worship Service",
    description: "Join us for a special worship service celebrating God's grace and love.",
    image: "https://images.unsplash.com/photo-1438232992991-995b7058bbb3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80"
  },
  {
    id: 2,
    date: "23rd March 2025",
    title: "Bible Study Group",
    description: "Dive deep into God's word with our weekly Bible study group.",
    image: "https://images.unsplash.com/photo-1504052434569-70ad5836ab65?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
  },
  {
    id: 3,
    date: "25th March 2025",
    title: "Community Outreach",
    description: "Help us serve our local community through various outreach programs.",
    image: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
  }
];

const ministries = [
  {
    id: 1,
    title: "Children's Ministry",
    description: "Nurturing young hearts in faith",
    icon: <UserIcon className="w-6 h-6" />
  },
  {
    id: 2,
    title: "Small Groups",
    description: "Growing together in community",
    icon: <UsersIcon className="w-6 h-6" />
  },
  {
    id: 3,
    title: "Worship",
    description: "Praising God through music",
    icon: <MusicalNoteIcon className="w-6 h-6" />
  },
  {
    id: 4,
    title: "Outreach",
    description: "Serving our community",
    icon: <HandRaisedIcon className="w-6 h-6" />
  }
];

const homeHeroButtons = [
  {
    text: "Join Us",
    href: "#",
    variant: "solid"
  }
];

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={
          <>
            <HeroSection
              video="https://videos.pexels.com/video-files/5949379/5949379-hd_1920_1080_24fps.mp4"
              title="Welcome to Grace Community Church"
              description="We are a community of believers who are passionate about Jesus Christ and the Bible."
              buttons={homeHeroButtons}
              className="h-[600px]"
              opacity="20"
            />
            <ShortInfo image={pastor}>
              <div className='flex flex-col gap-3'>
                <h1 className='text-2xl font-bold'>"Finding Peace in Troubled Times"</h1>
                <p className='text-gray-400'>Join Pastor Michael Thomson as he explores how we can find true peace through faith, even in life's most challenging moments.</p>
                <span className='flex gap-2'>
                  <button className='bg-black text-white px-4 py-2'>Join Us</button>
                  <button className='border px-4 py-2'>Learn More</button>
                </span>
              </div>
            </ShortInfo>
            
            <CardsWrapper 
              title="Upcoming Events" 
              bgColor="bg-white" 
              className="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {upcomingEvents.map((event) => (
                <Card 
                  key={event.id} 
                  image={event.image} 
                  title={event.title} 
                  date={event.date}
                  description={event.description}
                />
              ))}
            </CardsWrapper>

            <CardsWrapper 
              title="Our Ministries"
              bgColor="bg-gray-50" 
              className="grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
            >
              {ministries.map((ministry) => (
                <MinistryIconCard 
                  key={ministry.id} 
                  icon={ministry.icon} 
                  title={ministry.title} 
                  description={ministry.description} 
                />
              ))}
            </CardsWrapper>
          </>
        } />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/events" element={<Events />} />
        <Route path="/ministries" element={<Ministries />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/sermons" element={<Sermons />} />
      </Routes>
    </Router>
  )
}

export default App
