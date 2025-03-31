import React from 'react';

const Sermons = () => {
  const sermons = [
    {
      title: 'Walking in Faith',
      preacher: 'Pastor John Smith',
      date: 'March 24, 2024',
      scripture: 'Hebrews 11:1-6',
      description: 'Exploring the nature of faith and its importance in our daily walk with God.',
      videoUrl: '#',
      audioUrl: '#',
      thumbnail: 'sermon-1.jpg'
    },
    {
      title: 'The Power of Prayer',
      preacher: 'Pastor John Smith',
      date: 'March 17, 2024',
      scripture: 'Matthew 6:5-15',
      description: 'Understanding the transformative power of prayer in our lives.',
      videoUrl: '#',
      audioUrl: '#',
      thumbnail: 'sermon-2.jpg'
    },
    {
      title: 'Living in Community',
      preacher: 'Pastor John Smith',
      date: 'March 10, 2024',
      scripture: 'Acts 2:42-47',
      description: 'The importance of fellowship and community in the Christian life.',
      videoUrl: '#',
      audioUrl: '#',
      thumbnail: 'sermon-3.jpg'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Sermons</h1>
          <p className="text-xl text-gray-600">Watch or listen to our latest messages</p>
        </div>

        {/* Featured Sermon */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Latest Sermon</h2>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="aspect-w-16 aspect-h-9 bg-gray-200">
              {/* Placeholder for video player */}
              <div className="w-full h-full flex items-center justify-center text-gray-400">
                [Video Player]
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{sermons[0].title}</h3>
              <p className="text-gray-600 mb-4">{sermons[0].description}</p>
              <div className="flex items-center text-sm text-gray-500 mb-4">
                <span className="mr-4">Preached by {sermons[0].preacher}</span>
                <span>{sermons[0].date}</span>
              </div>
              <div className="flex space-x-4">
                <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                  Watch
                </button>
                <button className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors">
                  Download
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Past Sermons */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Past Sermons</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sermons.slice(1).map((sermon, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="aspect-w-16 aspect-h-9 bg-gray-200">
                  {/* Placeholder for sermon thumbnail */}
                  <div className="w-full h-full flex items-center justify-center text-gray-400">
                    [Thumbnail]
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{sermon.title}</h3>
                  <p className="text-gray-600 mb-4">{sermon.description}</p>
                  <div className="flex items-center text-sm text-gray-500 mb-4">
                    <span className="mr-4">Preached by {sermon.preacher}</span>
                    <span>{sermon.date}</span>
                  </div>
                  <div className="flex space-x-4">
                    <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                      Watch
                    </button>
                    <button className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors">
                      Download
                    </button>
                  </div>
                </div>
              </div>
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
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
              Browse Archive
            </button>
            <button className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors">
              Subscribe to Podcast
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sermons; 