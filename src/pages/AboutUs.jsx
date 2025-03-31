import React from 'react';
import ShortInfo from '../components/ShortInfo';
import pastor from '../assets/img/pastor.jpg';
import InfoCard from '../components/ui/InfoCard';

const cardData = [
  {
    id: 1,
    title: "Worship",
    description: "Join us for inspiring worship services every Sunday"
  },
  {
    id: 2,
    title: "Community",
    description: "Be part of our welcoming and supportive community"
  },
  {
    id: 3,
    title: "Service",
    description: "Make a difference through our various outreach programs"
  }
];

const AboutUs = () => {
    const descriptionClass = " text-sm text-gray-400"
  return (
    <div className="min-h-screen bg-white">
      <div className=" ">
        <ShortInfo image={pastor} bgColor={"bg-white"}>
          <div className='flex flex-col gap-3'>
            <h1 className='text-2xl font-bold'>About Our Church</h1>
            <p className={descriptionClass}>Grace Community Church has been serving our community for over 50 years. We are 
              a welcoming congregation dedicated to sharing God's love and message of hope 
              with all who enter our doors.</p>
            <p className={descriptionClass}>Our mission is to create a place where people can encounter God, experience 
              authentic community, and make a difference in the world.</p>
            <p className={descriptionClass}>We believe in the power of worship, prayer, and fellowship to transform lives and 
              strengthen faith.</p>
            <button className='bg-black w-fit text-white px-4 py-2'>Join Us This Sunday</button>
          </div>
        </ShortInfo>

        <div className=' bg-[#F9FAFB]'>
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 w-full py-24 gap-8  ">
            {cardData.map((card) => (
              <InfoCard
                key={card.id}
                title={card.title}
                description={card.description}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs; 