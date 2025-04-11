import React from 'react';
import { Link } from 'react-router-dom';
import { 
  MapPinIcon, 
  PhoneIcon, 
  EnvelopeIcon,
  ClockIcon
} from '@heroicons/react/24/outline';
import { 
  FacebookIcon, 
  InstagramIcon, 
  YoutubeIcon, 
  TwitterIcon 
} from './ui/SocialIcons';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Events', href: '/events' },
    { name: 'Ministries', href: '/ministries' },
    { name: 'Sermons', href: '/sermons' },
    { name: 'Contact', href: '/contact' },
  ];

  const ministries = [
    { name: 'Children\'s Ministry', href: '/ministries#children' },
    { name: 'Youth Ministry', href: '/ministries#youth' },
    { name: 'Adult Bible Study', href: '/ministries#bible-study' },
    { name: 'Music Ministry', href: '/ministries#music' },
    { name: 'Outreach Ministry', href: '/ministries#outreach' },
    { name: 'Senior Ministry', href: '/ministries#senior' },
  ];

  const socialLinks = [
    { name: 'Facebook', icon: <FacebookIcon />, href: '#' },
    { name: 'Instagram', icon: <InstagramIcon />, href: '#' },
    { name: 'YouTube', icon: <YoutubeIcon />, href: '#' },
    { name: 'Twitter', icon: <TwitterIcon />, href: '#' },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Church Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Grace Community Church</h3>
            <p className="text-gray-400 mb-4">
              A welcoming community dedicated to sharing God's love and message of hope.
            </p>
            <div className="space-y-2">
              <div className="flex items-center text-gray-400">
                <MapPinIcon className="h-5 w-5 mr-2" />
                <span>123 Church Street, City, State 12345</span>
              </div>
              <div className="flex items-center text-gray-400">
                <PhoneIcon className="h-5 w-5 mr-2" />
                <span>(123) 456-7890</span>
              </div>
              <div className="flex items-center text-gray-400">
                <EnvelopeIcon className="h-5 w-5 mr-2" />
                <span>info@gracechurch.org</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Ministries */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Ministries</h3>
            <ul className="space-y-2">
              {ministries.map((ministry) => (
                <li key={ministry.name}>
                  <Link
                    to={ministry.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {ministry.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Times & Social */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Service Times</h3>
            <div className="space-y-2 mb-6">
              <div className="flex items-center text-gray-400">
                <ClockIcon className="h-5 w-5 mr-2" />
                <div>
                  <p className="font-medium">Sunday Service</p>
                  <p>9:00 AM & 11:00 AM</p>
                </div>
              </div>
              <div className="flex items-center text-gray-400">
                <ClockIcon className="h-5 w-5 mr-2" />
                <div>
                  <p className="font-medium">Wednesday Bible Study</p>
                  <p>7:00 PM</p>
                </div>
              </div>
            </div>

            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Grace Community Church. All rights reserved.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Link to="/privacy" className="text-gray-400 hover:text-white text-sm">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-400 hover:text-white text-sm">
                Terms of Use
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 