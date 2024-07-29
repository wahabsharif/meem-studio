import Image from "next/image";
import Link from "next/link";
import React from "react";
import Logo from "@/assets/logo/vercel.svg";
import { ModeToggle } from "./ModeToggle";

const NavBar: React.FC = () => {
  return (
    <nav className="shadow-md bg-opacity-80 backdrop-blur-2xl backdrop-saturate-200">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          {/* LOGO */}
          <div className="flex-shrink-0">
            <Link href="/">
              <Image
                className="h-8 w-8"
                src={Logo}
                width={32}
                height={32}
                alt="Logo"
              />
            </Link>
          </div>

          {/* NAVBAR ITEMS */}
          <div className="flex-1 flex items-center justify-end">
            <div className="hidden sm:flex space-x-4">
              <Link
                href="#"
                className=" hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Portfolio
              </Link>
              <Link
                href="#"
                className=" hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Team
              </Link>
              <Link
                href="#"
                className=" hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Info
              </Link>
              <ModeToggle />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
