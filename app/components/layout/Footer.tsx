import { businessInfo } from '@/app/lib/constants/content';
import { Facebook, Instagram, Linkedin, MapPin, Phone, Mail, ExternalLink } from 'lucide-react';
import Image from 'next/image';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="relative w-10 h-10 rounded-lg overflow-hidden bg-white shadow-sm">
                <Image
                  src="/images/logo.png"
                  alt={businessInfo.name}
                  fill
                  className="object-contain p-1"
                />
              </div>
              <p className="font-heading font-bold text-white text-lg">
                {businessInfo.name.split(" ")[0]}
              </p>
            </div>
            <p className="text-sm text-gray-400 mb-4 leading-relaxed">
              Leading manufacturer of premium metal profile sheets and shed solutions in Chhattisgarh
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="hover:text-brand-secondary transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="hover:text-brand-secondary transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="hover:text-brand-secondary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-heading font-bold mb-4 text-lg">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#services" className="hover:text-brand-secondary transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-brand-secondary transition-colors">
                  Products
                </a>
              </li>
              <li>
                <a href="/about" className="hover:text-brand-secondary transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-brand-secondary transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-heading font-bold mb-4 text-lg">Our Services</h3>
            <ul className="space-y-2 text-sm">
              <li>Metal Profile Sheets</li>
              <li>Color Coating</li>
              <li>Shed Construction</li>
              <li>Custom Solutions</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-heading font-bold mb-4 text-lg">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start">
                <MapPin className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" />
                <span>{businessInfo.address}</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-4 h-4 mr-2 flex-shrink-0" />
                <a
                  href={`tel:${businessInfo.phone}`}
                  className="hover:text-brand-secondary transition-colors"
                >
                  {businessInfo.phone}
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="w-4 h-4 mr-2 flex-shrink-0" />
                <a
                  href={`mailto:${businessInfo.email}`}
                  className="hover:text-brand-secondary transition-colors break-all"
                >
                  {businessInfo.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
            <p className="text-gray-400 text-center md:text-left">
              © {currentYear} {businessInfo.name}. All rights reserved.
            </p>
            
            {/* Marketing Dime Credit */}
            <div className="flex items-center gap-2 text-gray-400">
              <span>Designed & Developed by</span>
              <a
                href="https://marketingdime.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-brand-secondary hover:text-brand-secondary/80 transition-colors font-semibold"
              >
                Marketing Dime
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
          
          <p className="text-center text-gray-500 text-xs mt-4">
            Premium Metal Profile Sheets • Raipur, Chhattisgarh
          </p>
        </div>
      </div>
    </footer>
  );
}
