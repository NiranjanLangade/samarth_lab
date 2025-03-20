"use client";

import { FaFacebookF, FaGoogle, FaTwitter, FaVimeoV, FaPinterestP, FaPaperPlane } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-blue-500 text-white py-12 px-6 lg:px-20">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* About Us */}
        <div>
          <h3 className="text-xl font-bold mb-2">About Us</h3>
          <div className="w-10 h-1 bg-white mb-4"></div>
          <p className="text-sm leading-relaxed">
            Lorem ipsum dolor sit am consectetur adipisicing elit do eiusmod tempor
            incididunt ut labore dolore magna.
          </p>
          <div className="flex gap-3 mt-4">
            {[
              { icon: <FaFacebookF />, link: "#" },
              { icon: <FaGoogle />, link: "#" },
              { icon: <FaTwitter />, link: "#" },
              { icon: <FaVimeoV />, link: "#" },
              { icon: <FaPinterestP />, link: "#" },
            ].map((social, index) => (
              <a
                key={index}
                href={social.link}
                className="w-8 h-8 flex items-center justify-center border border-white rounded-full hover:bg-white hover:text-blue-700 transition"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-bold mb-2">Quick Links</h3>
          <div className="w-10 h-1 bg-white mb-4"></div>
          <div className="grid grid-cols-2 gap-2 text-sm">
            {[
              "Home",
              "About Us",
              "Services",
              "Our Cases",
              "Other Links",
              "Consulting",
              "Finance",
              "Testimonials",
              "FAQ",
              "Contact Us",
            ].map((link, index) => (
              <a key={index} href="#" className="hover:text-gray-300 transition">
                ➤ {link}
              </a>
            ))}
          </div>
        </div>

        {/* Open Hours */}
        <div>
          <h3 className="text-xl font-bold mb-2">Open Hours</h3>
          <div className="w-10 h-1 bg-white mb-4"></div>
          <p className="text-sm leading-relaxed mb-2">
            Lorem ipsum dolor sit ame consectetur adipisicing elit do eiusmod tempor
            incididunt.
          </p>
          <ul className="text-sm space-y-1">
            <li className="flex justify-between">
              <span>Monday - Friday</span> <span>8.00 - 20.00</span>
            </li>
            <li className="flex justify-between">
              <span>Saturday</span> <span>9.00 - 18.30</span>
            </li>
            <li className="flex justify-between">
              <span>Monday - Thursday</span> <span>9.00 - 15.00</span>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-xl font-bold mb-2">Newsletter</h3>
          <div className="w-10 h-1 bg-white mb-4"></div>
          <p className="text-sm leading-relaxed mb-4">
            Subscribe to our newsletter to get all our news in your inbox.
          </p>
          <div className="flex">
            <input
              type="email"
              placeholder="Email Address"
              className="w-full px-4 py-2 text-sm text-gray-800 rounded-l-lg focus:outline-none"
            />
            <button className="bg-white text-blue-700 px-4 flex items-center justify-center rounded-r-lg hover:bg-gray-100 transition">
              <FaPaperPlane />
            </button>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-sm mt-8 border-t border-white/30 pt-4">
        © Copyright 2024 | Designed & developed <span className="font-semibold">Niranjan</span>
      </div>
    </footer>
  );
};

export default Footer;
