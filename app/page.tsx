import Link from "next/link"
import Image from "next/image"
import { Clock, MapPin, Phone } from "lucide-react"

import { Button } from "@/components/ui/button"
import { HeroSection } from "@/components/hero-section"
import { ServicesSection } from "@/components/services-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { CtaSection } from "@/components/cta-section"
import { ChatbotButton } from "@/components/chatbot-button"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <HeroSection />

      {/* Quick Info Section */}
      <section className="bg-blue-50 py-8">
        <div className="container mx-auto grid grid-cols-1 gap-4 md:grid-cols-3">
          <div className="flex items-center gap-3 rounded-lg bg-white p-4 shadow-sm">
            <div className="rounded-full bg-blue-100 p-3">
              <Phone className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <h3 className="text-sm font-medium text-muted-foreground">Call Us</h3>
              <p className="font-semibold">+91 7416004877</p>
            </div>
          </div>
          <div className="flex items-center gap-3 rounded-lg bg-white p-4 shadow-sm">
            <div className="rounded-full bg-blue-100 p-3">
              <MapPin className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <h3 className="text-sm font-medium text-muted-foreground">Location</h3>
              <p className="font-semibold">Dilsukhnagar, Hyderabad</p>
            </div>
          </div>
          <div className="flex items-center gap-3 rounded-lg bg-white p-4 shadow-sm">
            <div className="rounded-full bg-blue-100 p-3">
              <Clock className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <h3 className="text-sm font-medium text-muted-foreground">Working Hours</h3>
              <p className="font-semibold">10:00 AM - 8:30 PM</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h2 className="mb-6 text-3xl font-bold text-gray-900">About Sri Rama ENT Care Center</h2>
              <p className="mb-4 text-gray-700">
                Sri Rama ENT Care Center is a specialized clinic dedicated to providing comprehensive care for Ear,
                Nose, and Throat conditions. Located in Dilsukhnagar, Hyderabad, our clinic has been serving patients
                with the highest standards of medical care.
              </p>
              <p className="mb-6 text-gray-700">
                Our team of experienced ENT specialists is led by Dr. Shakuntala Ghosh, who brings years of expertise in
                diagnosing and treating various ENT disorders. We are committed to providing personalized care and
                effective treatments to improve our patients' quality of life.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/about">
                  <Button variant="outline">Learn More About Us</Button>
                </Link>
                <Link href="/contact">
                  <Button>Contact Us</Button>
                </Link>
              </div>
            </div>
            <div className="relative min-h-[300px] overflow-hidden rounded-xl">
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="Sri Rama ENT Care Center"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <ServicesSection />
      <TestimonialsSection />
      <CtaSection />
      <ChatbotButton />
    </main>
  )
}

