import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { CalendarCheck, Clock, MapPin, Phone } from "lucide-react"

export default function ContactPage() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="bg-blue-600 py-16 text-white">
        <div className="container mx-auto px-4">
          <h1 className="mb-4 text-4xl font-bold md:text-5xl">Contact Us</h1>
          <p className="text-xl text-blue-100">Get in touch with Sri Rama ENT Care Center</p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h2 className="mb-6 text-3xl font-bold">Get In Touch</h2>
              <p className="mb-8 text-gray-700">
                We're here to help with any questions or concerns you may have about our services. Feel free to reach
                out to us using any of the contact methods below.
              </p>

              <div className="mb-8 space-y-6">
                <div className="flex items-start">
                  <div className="mr-4 rounded-full bg-blue-100 p-3">
                    <MapPin className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="mb-1 font-semibold">Our Location</h3>
                    <p className="text-gray-600">
                      Opp. Ravindra Bharathi School, Lane, beside SBI Road, Hanuman Nagar, Krishna Nagar, Dilsukhnagar,
                      Hyderabad, Telangana 500060
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="mr-4 rounded-full bg-blue-100 p-3">
                    <Phone className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="mb-1 font-semibold">Phone Number</h3>
                    <p className="text-gray-600">+91 7416004877</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="mr-4 rounded-full bg-blue-100 p-3">
                    <Clock className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="mb-1 font-semibold">Working Hours</h3>
                    <p className="text-gray-600">
                      Monday to Saturday: 10:00 AM - 8:30 PM
                      <br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="mb-4 text-xl font-semibold">Book an Appointment</h3>
                <p className="mb-4 text-gray-700">
                  Ready to schedule your visit? Book an appointment online or call us directly.
                </p>
                <Link
                  href="https://book-appointment.healthplix.com/dr-shakuntala-ghosh-ent-dilsukhnagar-hyderabad"
                  target="_blank"
                >
                  <Button size="lg">
                    <CalendarCheck className="mr-2 h-5 w-5" />
                    Book Appointment
                  </Button>
                </Link>
              </div>
            </div>

            <div>
              <div className="rounded-lg border bg-white p-6 shadow-sm">
                <h3 className="mb-4 text-xl font-semibold">Send Us a Message</h3>
                <form className="space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label htmlFor="name" className="mb-1 block text-sm font-medium">
                        Your Name
                      </label>
                      <Input id="name" placeholder="Enter your name" />
                    </div>
                    <div>
                      <label htmlFor="phone" className="mb-1 block text-sm font-medium">
                        Phone Number
                      </label>
                      <Input id="phone" placeholder="Enter your phone number" />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="email" className="mb-1 block text-sm font-medium">
                      Email Address
                    </label>
                    <Input id="email" type="email" placeholder="Enter your email" />
                  </div>
                  <div>
                    <label htmlFor="subject" className="mb-1 block text-sm font-medium">
                      Subject
                    </label>
                    <Input id="subject" placeholder="Enter subject" />
                  </div>
                  <div>
                    <label htmlFor="message" className="mb-1 block text-sm font-medium">
                      Message
                    </label>
                    <Textarea id="message" placeholder="Enter your message" rows={5} />
                  </div>
                  <Button type="submit" className="w-full">
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <h2 className="mb-6 text-2xl font-bold">Our Location</h2>
          <div className="h-[400px] overflow-hidden rounded-lg border">
            <div className="relative h-full w-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.5456310116384!2d78.52893!3d17.370142!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb98f02d78b129%3A0x1071852fde78ef47!2sSri%20Rama%20Ent%20Care%20Center!5e0!3m2!1sen!2sin!4v1709312345678!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Sri Rama ENT Care Center Location"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

