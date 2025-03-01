import Link from "next/link"
import { Ear, Stethoscope, Microscope, Thermometer, Pill, Activity } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ServicesSection() {
  const services = [
    {
      icon: <Ear className="h-10 w-10 text-blue-600" />,
      title: "Ear Treatments",
      description:
        "Comprehensive diagnosis and treatment for ear infections, hearing loss, tinnitus, and other ear-related conditions.",
      link: "/services#ear",
    },
    {
      icon: <Stethoscope className="h-10 w-10 text-blue-600" />,
      title: "Nose Treatments",
      description:
        "Specialized care for sinusitis, nasal polyps, deviated septum, and other nasal conditions including septoplasty.",
      link: "/services#nose",
    },
    {
      icon: <Microscope className="h-10 w-10 text-blue-600" />,
      title: "Throat Treatments",
      description:
        "Expert treatment for tonsillitis, vocal cord disorders, swallowing difficulties, and other throat conditions.",
      link: "/services#throat",
    },
    {
      icon: <Thermometer className="h-10 w-10 text-blue-600" />,
      title: "Sinus Surgery",
      description:
        "Advanced surgical procedures for chronic sinusitis and other sinus-related conditions that require surgical intervention.",
      link: "/services#sinus",
    },
    {
      icon: <Pill className="h-10 w-10 text-blue-600" />,
      title: "Allergy Management",
      description:
        "Comprehensive diagnosis and treatment plans for allergies affecting the ear, nose, and throat regions.",
      link: "/services#allergy",
    },
    {
      icon: <Activity className="h-10 w-10 text-blue-600" />,
      title: "Sleep Disorders",
      description: "Diagnosis and treatment of sleep-related breathing disorders, including sleep apnea and snoring.",
      link: "/services#sleep",
    },
  ]

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">Our Specialized Services</h2>
          <p className="mx-auto max-w-2xl text-gray-600">
            We offer a comprehensive range of ENT services to diagnose and treat various conditions affecting the ear,
            nose, and throat.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div key={index} className="rounded-lg border bg-white p-6 shadow-sm transition-all hover:shadow-md">
              <div className="mb-4">{service.icon}</div>
              <h3 className="mb-2 text-xl font-bold">{service.title}</h3>
              <p className="mb-4 text-gray-600">{service.description}</p>
              <Link href={service.link} className="text-blue-600 hover:underline">
                Learn more →
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link href="/services">
            <Button size="lg">View All Services</Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

