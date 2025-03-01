import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CalendarCheck } from "lucide-react"

export default function DoctorsPage() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="bg-blue-600 py-16 text-white">
        <div className="container mx-auto px-4">
          <h1 className="mb-4 text-4xl font-bold md:text-5xl">Our Doctors</h1>
          <p className="text-xl text-blue-100">Meet our experienced ENT specialists dedicated to your care</p>
        </div>
      </section>

      {/* Doctor Profile */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 md:grid-cols-2 md:items-start">
            <div className="relative h-[400px] overflow-hidden rounded-xl md:sticky md:top-20">
              <Image
                src="/placeholder.svg?height=800&width=600&text=Dr.+Shakuntala+Ghosh"
                alt="Dr. Shakuntala Ghosh"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="mb-2 text-3xl font-bold">Dr. Shakuntala Ghosh</h2>
              <p className="mb-4 text-xl text-blue-600">ENT Specialist</p>

              <div className="mb-6 space-y-4">
                <p className="text-gray-700">
                  Dr. Shakuntala Ghosh is a highly skilled and experienced ENT specialist at Sri Rama ENT Care Center.
                  With her extensive knowledge and expertise in diagnosing and treating various ear, nose, and throat
                  conditions, she has helped numerous patients improve their quality of life.
                </p>
                <p className="text-gray-700">
                  She specializes in a wide range of ENT procedures including septoplasty, turbinectomy, sinus surgery,
                  and other treatments for common and complex ENT disorders. Her patient-centered approach ensures that
                  each patient receives personalized care tailored to their specific needs.
                </p>
                <p className="text-gray-700">
                  Dr. Ghosh is known for her compassionate care and dedication to staying updated with the latest
                  advancements in ENT treatments. She takes the time to listen to her patients' concerns and thoroughly
                  explains their conditions and treatment options.
                </p>
              </div>

              <div className="mb-8">
                <h3 className="mb-3 text-xl font-semibold">Specializations</h3>
                <ul className="grid gap-2 sm:grid-cols-2">
                  {[
                    "Septoplasty",
                    "Turbinectomy",
                    "Sinus Surgery",
                    "Ear Infections",
                    "Hearing Loss",
                    "Tonsillitis",
                    "Nasal Polyps",
                    "Allergic Rhinitis",
                  ].map((specialization, index) => (
                    <li key={index} className="flex items-center">
                      <svg className="mr-2 h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {specialization}
                    </li>
                  ))}
                </ul>
              </div>

              <Link
                href="https://book-appointment.healthplix.com/dr-shakuntala-ghosh-ent-dilsukhnagar-hyderabad"
                target="_blank"
              >
                <Button size="lg">
                  <CalendarCheck className="mr-2 h-5 w-5" />
                  Book an Appointment with Dr. Ghosh
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="bg-blue-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-8 text-center text-3xl font-bold">Why Choose Our Doctors?</h2>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-lg bg-white p-6 shadow-sm">
              <h3 className="mb-3 text-xl font-semibold text-blue-600">Expertise & Experience</h3>
              <p className="text-gray-700">
                Our doctors have extensive experience in diagnosing and treating a wide range of ENT conditions,
                ensuring you receive the highest quality of care.
              </p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-sm">
              <h3 className="mb-3 text-xl font-semibold text-blue-600">Patient-Centered Approach</h3>
              <p className="text-gray-700">
                We prioritize your needs and concerns, taking the time to listen and develop personalized treatment
                plans that address your specific condition.
              </p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-sm">
              <h3 className="mb-3 text-xl font-semibold text-blue-600">Advanced Treatments</h3>
              <p className="text-gray-700">
                Our doctors stay updated with the latest advancements in ENT care to provide you with the most effective
                and modern treatment options available.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

