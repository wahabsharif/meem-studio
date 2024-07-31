import Logo from "@/assets/logo/next.svg";
import devLogo from "@/assets/logo/wahab-sharif-logo.svg";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="shadow-md bg-opacity-80 backdrop-blur-2xl border-slate-800 backdrop-saturate-200 py-6">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="flex flex-col md:flex-row items-center justify-between w-full">
          <div className="flex justify-start mb-4 md:mb-0 md:w-1/3">
            <Image
              src={Logo}
              alt="Logo"
              width={1000}
              height={1000}
              className="h-12"
            />
          </div>
          <div className="text-center mb-4 md:mb-0 md:w-1/3">
            <p className="text-sm mb-2">
              Al Arif Plaza, 2nd Floor, Office no 01, <br /> Kalmaa Chowk Ghouri
              Town Phase 4A, Islamabad
            </p>
            <p className="text-sm">
              <Link
                href="tel:+1234567890"
                className=" transition-transform transform hover:scale-110 hover:underline hover:text-gray-500"
              >
                Phone: (123) 456-7890
              </Link>
            </p>
            <p className="text-sm">
              <Link
                href="mailto:info@yourdomain.com"
                className=" transition-transform transform hover:scale-110 hover:underline hover:text-gray-500"
              >
                Email: info@yourdomain.com
              </Link>
            </p>
          </div>
          <div className="flex justify-end space-x-4 md:w-1/3">
            <Link
              href="https://facebook.com"
              aria-label="Facebook"
              className="bg-gray-500 p-4 rounded-full transition-transform transform hover:scale-110"
            >
              <FaFacebookF />
            </Link>
            <Link
              href="https://twitter.com"
              aria-label="Twitter"
              className="bg-gray-500 p-4 rounded-full transition-transform transform hover:scale-110"
            >
              <FaTwitter />
            </Link>
            <Link
              href="https://instagram.com"
              aria-label="Instagram"
              className="bg-gray-500 p-4 rounded-full transition-transform transform hover:scale-110"
            >
              <FaInstagram />
            </Link>
            <Link
              href="https://linkedin.com"
              aria-label="LinkedIn"
              className="bg-gray-500 p-4 rounded-full transition-transform transform hover:scale-110"
            >
              <FaLinkedinIn />
            </Link>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-700 mt-6 pt-4 text-center">
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4 text-sm">
          <p>
            &copy; {new Date().getFullYear()} Meem Studio. All rights reserved.
          </p>
          <span className="hidden sm:inline">|</span>
          <p className="text-sm flex items-center space-x-2">
            <span>Designed and developed by</span>
            <Link
              href="https://wahabsharif.me/"
              aria-label="Designed and developed by Wahab Sharif"
            >
              <Image
                src={devLogo}
                alt="Designed and developed by Logo"
                width={32}
                height={32}
                className="inline transition-transform transform hover:scale-110"
              />
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
