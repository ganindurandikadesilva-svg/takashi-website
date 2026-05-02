import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
} from "react-icons/fa";

import { BsTelephone } from "react-icons/bs";
import { MdOutlineMail } from "react-icons/md";
import { MdOutlineLocationOn } from "react-icons/md";

export default function Footer() {
  return (
    <footer className="bg-[#0b0b0b] text-gray-300 pt-12" id="contact">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-6 gap-10">
        {/* Logo + About */}
        <div className="md:col-span-2">
          {/* Logo */}
          <div className="flex items-center gap-3">
            {/* Logo Image */}
            <img
              src="/images/company_logo.png" // put your logo in public folder
              alt="Takashi Logo"
              className="w-10 h-10 object-contain"
              style={{
                mixBlendMode: "screen", // drops the black bg, keeps the red mark
                display: "block",
                flexShrink: 0,
              }}
            />

            {/* Text */}
            <div>
              <h2 className="text-white font-black text-2xl uppercase tracking-wide italic leading-none">
                TAKASHI
              </h2>
              <p className="text-red-600 text-[10px] font-bold uppercase tracking-wider">
                Edge of Excellence
              </p>
            </div>
          </div>

          {/* Description */}
          <p className="text-sm text-gray-400 mt-4 leading-relaxed">
            Takashi delivers high-performance cutting, grinding, and drilling
            accessories built for professionals who demand reliability and
            results.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 mt-5">
            <a href="#" className="hover:text-red-600">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-red-600">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-red-600">
              <FaYoutube />
            </a>
            <a href="#" className="hover:text-red-600">
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        {/* Products */}
        <div>
          <h3 className="text-white font-semibold mb-4">PRODUCTS</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-red-600 cursor-pointer">Cutting Discs</li>
            <li className="hover:text-red-600 cursor-pointer">Diamond Discs</li>
            <li className="hover:text-red-600 cursor-pointer">
              Grinding Discs
            </li>
            <li className="hover:text-red-600 cursor-pointer">Drill Bits</li>
            <li className="hover:text-red-600 cursor-pointer">
              Hacksaw Blades
            </li>
            <li className="hover:text-red-600 cursor-pointer">Accessories</li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-white font-semibold mb-4">COMPANY</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-red-600 cursor-pointer">About Us</li>
            <li className="hover:text-red-600 cursor-pointer">Why Takashi</li>
            <li className="hover:text-red-600 cursor-pointer">Careers</li>
            <li className="hover:text-red-600 cursor-pointer">News & Blog</li>
            <li className="hover:text-red-600 cursor-pointer">Contact Us</li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-white font-semibold mb-4">SUPPORT</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-red-600 cursor-pointer">Help Center</li>
            <li className="hover:text-red-600 cursor-pointer">
              Shipping & Delivery
            </li>
            <li className="hover:text-red-600 cursor-pointer">
              Returns & Refunds
            </li>
            <li className="hover:text-red-600 cursor-pointer">
              Terms & Conditions
            </li>
            <li className="hover:text-red-600 cursor-pointer">
              Privacy Policy
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-white font-semibold mb-4">CONTACT US</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2">
              <BsTelephone className="shrink-0 hover:text-red-600" />
              <span>+9438229778</span>
            </li>

            <li className="flex items-center gap-2">
              <MdOutlineMail className="shrink-0 hover:text-red-600" />
              <span>info@takashitools.com</span>
            </li>

            <li className="flex items-start gap-2">
              <MdOutlineLocationOn className="shrink-0 mt-1 hover:text-red-600" />
              <span>123 Industrial Way, Panadura, Sri Lanka</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-800 mt-10"></div>

      {/* Bottom */}
      <div className="text-center text-gray-500 text-sm py-5">
        © 2025 Takashi Tools. All Rights Reserved.
      </div>
    </footer>
  );
}
