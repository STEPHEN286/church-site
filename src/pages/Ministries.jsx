import React from 'react';

const Ministries = () => {
  const ministries = [
    {
      title: 'Children\'s Ministry',
      description: 'Nurturing young hearts and minds in the love of Christ through age-appropriate activities, Bible stories, and fellowship.',
      schedule: 'Sundays 9:00 AM - 10:30 AM',
      image: 'children-ministry.jpg'
    },
    {
      title: 'Youth Ministry',
      description: 'Empowering teenagers to grow in their faith through Bible study, fellowship, and community service opportunities.',
      schedule: 'Wednesdays 7:00 PM - 8:30 PM',
      image: 'youth-ministry.jpg'
    },
    {
      title: 'Adult Bible Study',
      description: 'Deep dive into Scripture with engaging discussions and fellowship for adults of all ages.',
      schedule: 'Tuesdays 7:00 PM - 8:30 PM',
      image: 'bible-study.jpg'
    },
    {
      title: 'Music Ministry',
      description: 'Praising God through song with our choir, worship team, and special musical presentations.',
      schedule: 'Practice: Thursdays 7:00 PM - 8:30 PM',
      image: 'music-ministry.jpg'
    },
    {
      title: 'Outreach Ministry',
      description: 'Serving our community through various programs including food drives, clothing donations, and support for those in need.',
      schedule: 'Various times throughout the month',
      image: 'outreach-ministry.jpg'
    },
    {
      title: 'Senior Ministry',
      description: 'Fellowship and activities designed specifically for our senior members, including Bible study, social events, and community service.',
      schedule: 'Fridays 10:00 AM - 12:00 PM',
      image: 'senior-ministry.jpg'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Ministries</h1>
          <p className="text-xl text-gray-600">Discover ways to get involved and grow in your faith</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ministries.map((ministry, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-48 bg-gray-200">
                {/* Placeholder for ministry image */}
                <div className="w-full h-full flex items-center justify-center text-gray-400">
                  [Ministry Image]
                </div>
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-semibold text-gray-900 mb-2">{ministry.title}</h2>
                <p className="text-gray-600 mb-4">{ministry.description}</p>
                <p className="text-sm text-gray-500 mb-4">
                  <span className="font-semibold">Schedule:</span> {ministry.schedule}
                </p>
                <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Get Involved</h2>
          <p className="text-gray-600 mb-6">
            Interested in joining one of our ministries? We'd love to have you! Contact our ministry leaders
            or fill out the form below to learn more about getting involved.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Contact Information</h3>
              <p className="text-gray-600">Email: ministries@church.com</p>
              <p className="text-gray-600">Phone: (555) 123-4567</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Office Hours</h3>
              <p className="text-gray-600">Monday - Friday: 9:00 AM - 5:00 PM</p>
              <p className="text-gray-600">Saturday: 9:00 AM - 1:00 PM</p>
              <p className="text-gray-600">Sunday: Closed</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ministries; 