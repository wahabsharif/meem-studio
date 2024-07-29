"use client";

import { useState } from "react";
import { GiTireIronCross } from "react-icons/gi";
import { FaBars } from "react-icons/fa6";
import { navBarLinks } from "@/data/navBarData";
import Image from "next/image";
import Logo from "@/assets/logo/next.svg";
import { ModeToggle } from "./ModeToggle";
import Link from "next/link";

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="block md:hidden  shadow-md bg-opacity-80 backdrop-blur-2xl backdrop-saturate-200">
      <div className="flex items-center justify-between p-4">
        <div className="flex-shrink-0">
          <Image src={Logo} alt="Logo" width={32} height={32} />
        </div>
        {/* Dropdown Menu and Mode Toggle */}
        <div className="flex items-center space-x-4 relative">
          <button
            className="p-2 hover:text-gray-500 rounded-xl focus:outline-slate-700"
            onClick={toggleMenu}
          >
            {isOpen ? <GiTireIronCross size={24} /> : <FaBars size={24} />}
          </button>
          <nav
            className={`absolute top-full right-16 w-full mt-8 ${
              isOpen ? "block" : "hidden"
            } px-4`} // Added px-4 for right margin
          >
            <ul className="p-4 bg-base-100 rounded-xl z-[10000] w-32 shadow">
              {navBarLinks.map((link) => (
                <li key={link.href} className="mb-2">
                  <Link
                    href={link.href}
                    className="hover:bg-gray-700 hover:text-white px-3 py-2 rounded-xl text-sm font-medium"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <ModeToggle />
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
