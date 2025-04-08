import React from 'react';
import HeroSection from '../components/HeroSection';
import SermonCard from '../components/ui/SermonCard';

const Sermons = () => {
  const sermons = [
    {
      title: 'Walking in Faith',
      preacher: 'Pastor John Smith',
      date: 'March 24, 2024',
      scripture: 'Hebrews 11:1-6',
      description: 'Exploring the nature of faith and its importance in our daily walk with God.',
      videoUrl: 'https://www.youtube.com/watch?v=LDEzmU9nSl4',
      audioUrl: '#',
      thumbnail: 'https://img.youtube.com/vi/LDEzmU9nSl4/maxresdefault.jpg'
    },
    {
      title: 'The Power of Prayer',
      preacher: 'Pastor John Smith',
      date: 'March 17, 2024',
      scripture: 'Matthew 6:5-15',
      description: 'Understanding the transformative power of prayer in our lives.',
      videoUrl: 'https://www.youtube.com/watch?v=6KVhdq3f9xo',
      audioUrl: '#',
      thumbnail: 'https://img.youtube.com/vi/6KVhdq3f9xo/maxresdefault.jpg'
    },
    {
      title: 'Living in Community',
      preacher: 'Pastor John Smith',
      date: 'March 10, 2024',
      scripture: 'Acts 2:42-47',
      description: 'The importance of fellowship and community in the Christian life.',
      videoUrl: 'https://www.youtube.com/watch?v=LDEzmU9nSl4',
      audioUrl: '#',
      thumbnail: 'https://img.youtube.com/vi/LDEzmU9nSl4/maxresdefault.jpg'
    }
  ];

  const videoUrl = "https://videos.pexels.com/video-files/7220082/7220082-uhd_2560_1440_25fps.mp4";
  // const heroImage = "https://images.unsplash.com/photo-1511895426328-dc8714191300?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80";

  return (
    <div className="min-h-screen">
      <HeroSection
        video={videoUrl}
        title="Sermons"
        description="Watch or listen to our latest messages"
        className="h-[70vh]"
        opacity="30"
      />

      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        {/* Featured Sermon */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Latest Sermon</h2>
          <SermonCard {...sermons[0]} isFeatured={true} />
        </div>

        {/* Past Sermons */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Past Sermons</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sermons.slice(1).map((sermon, index) => (
              <SermonCard key={index} {...sermon} />
            ))}
          </div>
        </div>

        {/* Sermon Archive */}
        <div className="mt-16 bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Sermon Archive</h2>
          <p className="text-gray-600 mb-6">
            Looking for a specific sermon? Browse our complete archive of past messages.
          </p>
          <div className="flex space-x-4">
            <button 
              onClick={() => window.open('https://www.youtube.com/@YourChurchChannel', '_blank')}
              className="flex-1 bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors"
            >
              Visit Our YouTube Channel
            </button>
            <button className="flex-1 bg-gray-100 text-gray-900 px-6 py-3 rounded-lg hover:bg-gray-200 transition-colors">
              Subscribe to Podcast
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sermons; 