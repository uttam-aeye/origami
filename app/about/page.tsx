import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle2 } from "lucide-react"

export default function AboutPage() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="bg-blue-600 py-16 text-white">
        <div className="container mx-auto px-4">
          <h1 className="mb-4 text-4xl font-bold md:text-5xl">About Sri Rama ENT Care Center</h1>
          <p className="text-xl text-blue-100">Providing specialized ENT care in Hyderabad since our establishment</p>
        </div>
      </section>

      {/* About Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <h2 className="mb-6 text-3xl font-bold">Our Story</h2>
              <p className="mb-4 text-gray-700">
                Sri Rama ENT Care Center was established with a vision to provide specialized and comprehensive care for
                Ear, Nose, and Throat conditions to the residents of Hyderabad. Located in Dilsukhnagar, our clinic has
                grown to become a trusted name in ENT care.
              </p>
              <p className="mb-4 text-gray-700">
                Our team is led by Dr. Shakuntala Ghosh, an experienced ENT specialist with expertise in diagnosing and
                treating various ENT conditions. With state-of-the-art equipment and a patient-centered approach, we
                strive to provide the highest quality of care to all our patients.
              </p>
              <p className="mb-6 text-gray-700">
                We understand the impact that ENT conditions can have on a person's quality of life, which is why we are
                committed to providing effective treatments and personalized care to help our patients lead healthier,
                more comfortable lives.
              </p>
              <Link href="/contact">
                <Button>Contact Us</Button>
              </Link>
            </div>
            <div className="relative h-[400px] overflow-hidden rounded-xl">
              <Image
                src="/placeholder.svg?height=800&width=600&text=Clinic+Interior"
                alt="Sri Rama ENT Care Center Interior"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold">Our Mission & Values</h2>
            <p className="mx-auto max-w-2xl text-gray-600">
              We are guided by our commitment to excellence in patient care and our core values
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-lg bg-white p-8 shadow-sm">
              <h3 className="mb-4 text-2xl font-bold text-blue-600">Our Mission</h3>
              <p className="text-gray-700">
                To provide exceptional ENT care through accurate diagnosis, effective treatments, and compassionate
                service, improving the quality of life for our patients and the community we serve.
              </p>
            </div>
            <div className="rounded-lg bg-white p-8 shadow-sm">
              <h3 className="mb-4 text-2xl font-bold text-blue-600">Our Vision</h3>
              <p className="text-gray-700">
                To be the leading ENT care provider in Hyderabad, recognized for clinical excellence, innovative
                treatments, and patient satisfaction.
              </p>
            </div>
          </div>

          <div className="mt-12">
            <h3 className="mb-6 text-2xl font-bold">Our Core Values</h3>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[
                "Patient-Centered Care",
                "Clinical Excellence",
                "Integrity",
                "Compassion",
                "Innovation",
                "Accessibility",
              ].map((value, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle2 className="mr-3 h-6 w-6 text-blue-600" />
                  <div>
                    <h4 className="font-semibold">{value}</h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold">Our Facilities</h2>
            <p className="mx-auto max-w-2xl text-gray-600">
              We are equipped with modern facilities and equipment to provide comprehensive ENT care
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                title: "Modern Consultation Rooms",
                image: "/placeholder.svg?height=400&width=600&text=Consultation+Room",
                description: "Comfortable and private consultation rooms for thorough examinations and discussions.",
              },
              {
                title: "Advanced Diagnostic Equipment",
                image: "/placeholder.svg?height=400&width=600&text=Diagnostic+Equipment",
                description: "State-of-the-art diagnostic tools for accurate assessment of ENT conditions.",
              },
              {
                title: "Procedure Rooms",
                image: "/placeholder.svg?height=400&width=600&text=Procedure+Room",
                description: "Well-equipped procedure rooms for minor surgeries and treatments.",
              },
            ].map((facility, index) => (
              <div key={index} className="overflow-hidden rounded-lg border bg-white shadow-sm">
                <div className="relative h-48">
                  <Image
                    src={facility.image || "/placeholder.svg"}
                    alt={facility.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="mb-2 text-xl font-bold">{facility.title}</h3>
                  <p className="text-gray-600">{facility.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Accessibility Features */}
      <section className="bg-blue-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-8 text-3xl font-bold">Accessibility Features</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="flex items-start">
              <CheckCircle2 className="mr-3 h-6 w-6 text-blue-600" />
              <div>
                <h4 className="text-lg font-semibold">Wheelchair-Accessible Entrance</h4>
                <p className="text-gray-600">Our clinic entrance is designed to be accessible for wheelchair users.</p>
              </div>
            </div>
            <div className="flex items-start">
              <CheckCircle2 className="mr-3 h-6 w-6 text-blue-600" />
              <div>
                <h4 className="text-lg font-semibold">Wheelchair-Accessible Toilet</h4>
                <p className="text-gray-600">We have wheelchair-accessible restroom facilities for our patients.</p>
              </div>
            </div>
            <div className="flex items-start">
              <CheckCircle2 className="mr-3 h-6 w-6 text-blue-600" />
              <div>
                <h4 className="text-lg font-semibold">Restroom Facilities</h4>
                <p className="text-gray-600">
                  Clean and well-maintained restroom facilities are available for all patients.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <CheckCircle2 className="mr-3 h-6 w-6 text-blue-600" />
              <div>
                <h4 className="text-lg font-semibold">Convenient Location</h4>
                <p className="text-gray-600">
                  Our clinic is located in a convenient area with easy access to public transportation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

