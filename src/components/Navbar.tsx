"use client";

import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const pathname = usePathname(); // Detects page change

  // Close menu when the route changes
  React.useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <nav className="bg-white shadow-md py-4 px-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <img src="/logo.png" alt="Samarth Lab Logo" className="h-10 w-auto" />
          <span className="text-xl font-bold">
            <span className="text-blue-600">Samarth</span>
            <span className="text-black"> Lab</span>
          </span>
        </div>

        {/* Mobile Menu Button */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>

        {/* Navigation Menu */}
        <div
          className={cn(
            "md:flex md:items-center md:space-x-6 md:static md:w-auto w-full absolute bg-white top-16 left-0 shadow-md md:shadow-none transition-all duration-300",
            isOpen ? "flex flex-col items-center space-y-4 py-4" : "hidden"
          )}
        >
          {[
            { href: "/", label: "Home" },
            { href: "/services", label: "Our Services" },
            { href: "/electrohomeopathy", label: "Electrohomeopathy" },
            { href: "/pathology", label: "Pathology Lab" },
            { href: "/xray", label: "X-Ray" },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setIsOpen(false)} // Closes menu on click
              className="relative block p-3 md:inline group text-lg"
            >
              <span className="relative z-10">{item.label}</span>
              {/* Underline Effect */}
              <span className="absolute left-0 bottom-0 w-full h-0.5 bg-blue-600 scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
            </Link>
          ))}

          {/* Book Appointment Button */}
          <Link href="/book-appointment" className="block md:inline">
            <Button
              onClick={() => setIsOpen(false)} // Closes menu on click
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg w-full md:w-auto md:px-12 md:py-2 text-sm md:text-base"
            >
              Book Appointment
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
}
