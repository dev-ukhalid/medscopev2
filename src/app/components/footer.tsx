'use client';
import React from 'react';
import { MapPin, Phone, Mail, Instagram, Facebook, Twitter, MessageCircle } from 'lucide-react';

interface SocialLink {
  name: string;
  href: string;
  icon: React.ElementType;
  hoverColor: string;
}

const socialLinks: SocialLink[] = [
  {
    name: 'Instagram',
    href: '#',
    icon: Instagram,
    hoverColor: 'hover:text-pink-500'
  },
  {
    name: 'Facebook',
    href: '#',
    icon: Facebook,
    hoverColor: 'hover:text-blue-500'
  },
  {
    name: 'Twitter',
    href: '#',
    icon: Twitter,
    hoverColor: 'hover:text-blue-400'
  },
  {
    name: 'WhatsApp',
    href: '#',
    icon: MessageCircle,
    hoverColor: 'hover:text-green-500'
  }
];


const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h4 className="text-xl font-bold mb-4">MedScope</h4>
            <p className="text-gray-400">Advancing healthcare through innovation</p>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Information</h4>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-start space-x-2">
                <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
                <span>NO. 14 Murtala Mohammed Way opposite kano Golf club, Kano State, Nigeria.</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="w-5 h-5 flex-shrink-0" />
                <div>
                  <p>07000000000</p>
                  <p>08000000000</p>
                </div>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="w-5 h-5 flex-shrink-0" />
                <span>info@med-scope.net.ng</span>
              </li>
            </ul>
          </div>
          {/* Social Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>
            <div className="space-y-4">
              <div className="flex flex-wrap items-center gap-6">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    className={`text-gray-400 ${social.hoverColor} transition-colors duration-300`}
                    aria-label={social.name}
                  >
                    <social.icon className="w-6 h-6" />
                  </a>
                ))}
              </div>
              <p className="text-gray-400 text-sm">Follow us on social media for updates and news</p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} MedScope. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;