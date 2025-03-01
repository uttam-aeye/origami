"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center">
          <span className="text-xl font-bold text-blue-600">Sri Rama</span>
          <span className="ml-1 text-xl font-bold">ENT Care</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex md:items-center md:gap-6">
          <Link href="/" className="text-sm font-medium text-gray-900 hover:text-blue-600">
            Home
          </Link>
          <Link href="/about" className="text-sm font-medium text-gray-900 hover:text-blue-600">
            About
          </Link>
          <Link href="/services" className="text-sm font-medium text-gray-900 hover:text-blue-600">
            Services
          </Link>
          <Link href="/doctors" className="text-sm font-medium text-gray-900 hover:text-blue-600">
            Doctors
          </Link>
          <Link href="/contact" className="text-sm font-medium text-gray-900 hover:text-blue-600">
            Contact
          </Link>
        </nav>

        <div className="hidden md:block">
          <Link
            href="https://book-appointment.healthplix.com/dr-shakuntala-ghosh-ent-dilsukhnagar-hyderabad"
            target="_blank"
          >
            <Button>Book Appointment</Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="container mx-auto px-4 pb-4 md:hidden">
          <nav className="flex flex-col space-y-4">
            <Link
              href="/"
              className="text-sm font-medium text-gray-900 hover:text-blue-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-sm font-medium text-gray-900 hover:text-blue-600"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/services"
              className="text-sm font-medium text-gray-900 hover:text-blue-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              href="/doctors"
              className="text-sm font-medium text-gray-900 hover:text-blue-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Doctors
            </Link>
            <Link
              href="/contact"
              className="text-sm font-medium text-gray-900 hover:text-blue-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <Link
              href="https://book-appointment.healthplix.com/dr-shakuntala-ghosh-ent-dilsukhnagar-hyderabad"
              target="_blank"
              onClick={() => setIsMenuOpen(false)}
            >
              <Button className="w-full">Book Appointment</Button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}

