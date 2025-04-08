import React from 'react';
import MinistryCard from '../components/ui/MinistryCard';
import HeroSection from '../components/HeroSection';

const Ministries = () => {
  const ministries = [
    {
      title: 'Children\'s Ministry',
      description: 'Nurturing young hearts and minds in the love of Christ through age-appropriate activities, Bible stories, and fellowship.',
      schedule: 'Sundays 9:00 AM - 10:30 AM',
      image: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
    },
    {
      title: 'Youth Ministry',
      description: 'Empowering teenagers to grow in their faith through Bible study, fellowship, and community service opportunities.',
      schedule: 'Wednesdays 7:00 PM - 8:30 PM',
      image: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
    },
    {
      title: 'Adult Bible Study',
      description: 'Deep dive into Scripture with engaging discussions and fellowship for adults of all ages.',
      schedule: 'Tuesdays 7:00 PM - 8:30 PM',
      image: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
    },
    {
      title: 'Music Ministry',
      description: 'Praising God through song with our choir, worship team, and special musical presentations.',
      schedule: 'Practice: Thursdays 7:00 PM - 8:30 PM',
      image: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
    },
    {
      title: 'Outreach Ministry',
      description: 'Serving our community through various programs including food drives, clothing donations, and support for those in need.',
      schedule: 'Various times throughout the month',
      image: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
    },
    {
      title: 'Senior Ministry',
      description: 'Fellowship and activities designed specifically for our senior members, including Bible study, social events, and community service.',
      schedule: 'Fridays 10:00 AM - 12:00 PM',
      image: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
    }
  ];

  const heroImage = "https://images.unsplash.com/photo-1511895426328-dc8714191300?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80";

  return (
    <div className="min-h-screen">
      <HeroSection
        image={heroImage}
        title="Our Ministries"
        description="Discover ways to get involved and grow in your faith"
        className="h-[50vh]"
        opacity="30"
      />

      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ministries.map((ministry, index) => (
            <MinistryCard
              key={index}
              title={ministry.title}
              description={ministry.description}
              schedule={ministry.schedule}
              image={ministry.image}
            />
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