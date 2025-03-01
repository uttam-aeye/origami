import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CalendarCheck } from "lucide-react"

export default function ServicesPage() {
  const services = [
    {
      id: "ear",
      title: "Ear Treatments",
      image: "/placeholder.svg?height=600&width=800&text=Ear+Treatment",
      description:
        "We provide comprehensive diagnosis and treatment for various ear conditions including ear infections, hearing loss, tinnitus, vertigo, and ear wax removal. Our specialists use advanced diagnostic tools to accurately identify ear problems and develop effective treatment plans.",
      treatments: [
        "Ear Infection Treatment",
        "Hearing Loss Evaluation",
        "Tinnitus Management",
        "Vertigo Treatment",
        "Ear Wax Removal",
        "Ear Surgery",
      ],
    },
    {
      id: "nose",
      title: "Nose Treatments",
      image: "/placeholder.svg?height=600&width=800&text=Nose+Treatment",
      description:
        "Our nose treatments address conditions such as sinusitis, nasal polyps, deviated septum, and allergic rhinitis. We offer both medical and surgical interventions including septoplasty and turbinectomy to improve nasal breathing and function.",
      treatments: [
        "Sinusitis Treatment",
        "Nasal Polyp Removal",
        "Septoplasty",
        "Turbinectomy",
        "Allergic Rhinitis Management",
        "Nasal Obstruction Treatment",
      ],
    },
    {
      id: "throat",
      title: "Throat Treatments",
      image: "/placeholder.svg?height=600&width=800&text=Throat+Treatment",
      description:
        "We treat a wide range of throat conditions including tonsillitis, pharyngitis, vocal cord disorders, and swallowing difficulties. Our approach combines medical treatments with lifestyle modifications to provide comprehensive care for throat-related issues.",
      treatments: [
        "Tonsillitis Treatment",
        "Pharyngitis Management",
        "Vocal Cord Disorder Treatment",
        "Swallowing Difficulty Assessment",
        "Throat Infection Treatment",
        "Tonsillectomy",
      ],
    },
    {
      id: "sinus",
      title: "Sinus Surgery",
      image: "/placeholder.svg?height=600&width=800&text=Sinus+Surgery",
      description:
        "For patients with chronic sinusitis that doesn't respond to medical treatment, we offer advanced sinus surgery options. Our surgical procedures aim to improve sinus drainage, relieve pressure, and enhance breathing.",
      treatments: [
        "Functional Endoscopic Sinus Surgery (FESS)",
        "Balloon Sinuplasty",
        "Sinus Drainage Procedures",
        "Polyp Removal",
        "Post-Surgical Care",
        "Minimally Invasive Techniques",
      ],
    },
    {
      id: "consultation",
      title: "ENT Consultations",
      image: "/placeholder.svg?height=600&width=800&text=ENT+Consultation",
      description:
        "Our comprehensive ENT consultations include a thorough examination, medical history review, and diagnostic tests as needed. We take the time to understand your symptoms and concerns to provide accurate diagnosis and personalized treatment plans.",
      treatments: [
        "Initial Assessment",
        "Follow-up Consultations",
        "Pre-surgical Evaluations",
        "Post-treatment Reviews",
        "Second Opinions",
        "Preventive Care Advice",
      ],
    },
  ]

  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="bg-blue-600 py-16 text-white">
        <div className="container mx-auto px-4">
          <h1 className="mb-4 text-4xl font-bold md:text-5xl">Our Services</h1>
          <p className="text-xl text-blue-100">Comprehensive ENT care for all your ear, nose, and throat conditions</p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {services.map((service, index) => (
            <div
              key={index}
              id={service.id}
              className={`mb-16 scroll-mt-20 ${index % 2 === 1 ? "md:flex-row-reverse" : ""}`}
            >
              <div className="grid gap-8 md:grid-cols-2 md:items-center">
                <div className="relative h-[300px] overflow-hidden rounded-xl md:h-[400px]">
                  <Image src={service.image || "/placeholder.svg"} alt={service.title} fill className="object-cover" />
                </div>
                <div>
                  <h2 className="mb-4 text-3xl font-bold">{service.title}</h2>
                  <p className="mb-6 text-gray-700">{service.description}</p>
                  <div className="mb-6">
                    <h3 className="mb-3 text-xl font-semibold">Treatments Include:</h3>
                    <ul className="grid gap-2 sm:grid-cols-2">
                      {service.treatments.map((treatment, i) => (
                        <li key={i} className="flex items-center">
                          <svg
                            className="mr-2 h-5 w-5 text-blue-600"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          {treatment}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4 text-3xl font-bold">Ready to Schedule Your Appointment?</h2>
          <p className="mx-auto mb-8 max-w-2xl text-gray-600">
            Don't let ENT issues affect your quality of life. Our specialists are ready to provide you with the best
            care possible.
          </p>
          <Link
            href="https://book-appointment.healthplix.com/dr-shakuntala-ghosh-ent-dilsukhnagar-hyderabad"
            target="_blank"
          >
            <Button size="lg">
              <CalendarCheck className="mr-2 h-5 w-5" />
              Book Your Appointment Now
            </Button>
          </Link>
        </div>
      </section>
    </main>
  )
}

