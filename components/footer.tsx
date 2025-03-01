import Link from "next/link"
import { Facebook, Instagram, Twitter, MapPin, Phone, Clock } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-4">
          {/* Clinic Info */}
          <div>
            <h3 className="mb-4 text-xl font-bold">Sri Rama ENT Care Center</h3>
            <p className="mb-4 text-gray-300">Specialized care for all your Ear, Nose, and Throat conditions.</p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-300 hover:text-white">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-gray-300 hover:text-white">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-gray-300 hover:text-white">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-white">
                  Our Services
                </Link>
              </li>
              <li>
                <Link href="/doctors" className="text-gray-300 hover:text-white">
                  Our Doctors
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services#ear" className="text-gray-300 hover:text-white">
                  Ear Treatments
                </Link>
              </li>
              <li>
                <Link href="/services#nose" className="text-gray-300 hover:text-white">
                  Nose Treatments
                </Link>
              </li>
              <li>
                <Link href="/services#throat" className="text-gray-300 hover:text-white">
                  Throat Treatments
                </Link>
              </li>
              <li>
                <Link href="/services#surgery" className="text-gray-300 hover:text-white">
                  ENT Surgeries
                </Link>
              </li>
              <li>
                <Link href="/services#consultation" className="text-gray-300 hover:text-white">
                  Consultations
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Contact Information</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="mr-2 h-5 w-5 shrink-0 text-blue-400" />
                <span className="text-gray-300">
                  Opp. Ravindra Bharathi School, Lane, beside SBI Road, Hanuman Nagar, Krishna Nagar, Dilsukhnagar,
                  Hyderabad, Telangana 500060
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 h-5 w-5 text-blue-400" />
                <span className="text-gray-300">+91 7416004877</span>
              </li>
              <li className="flex items-center">
                <Clock className="mr-2 h-5 w-5 text-blue-400" />
                <span className="text-gray-300">Mon-Sat: 10:00 AM - 8:30 PM</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-800 pt-8 text-center">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} Sri Rama ENT Care Center. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

