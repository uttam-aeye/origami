import Link from "next/link"
import Image from "next/image"
import { CalendarCheck } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative bg-blue-600 py-16 md:py-24">
      <div className="absolute inset-0 z-0 opacity-20">
        <Image src="/placeholder.svg?height=1080&width=1920" alt="Background pattern" fill className="object-cover" />
      </div>
      <div className="container relative z-10 mx-auto grid gap-8 px-4 text-white md:grid-cols-2 md:items-center">
        <div>
          <h1 className="mb-4 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
            Expert ENT Care for Your Health
          </h1>
          <p className="mb-6 text-lg text-blue-100 md:text-xl">
            Sri Rama ENT Care Center provides specialized treatment for all ear, nose, and throat conditions with
            state-of-the-art facilities and experienced specialists.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="https://book-appointment.healthplix.com/dr-shakuntala-ghosh-ent-dilsukhnagar-hyderabad"
              target="_blank"
            >
              <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
                <CalendarCheck className="mr-2 h-5 w-5" />
                Book Appointment
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-blue-700">
                Contact Us
              </Button>
            </Link>
          </div>
          <div className="mt-8 flex items-center">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="h-10 w-10 overflow-hidden rounded-full border-2 border-blue-600 bg-blue-100">
                  <Image
                    src={`/placeholder.svg?height=100&width=100&text=${i}`}
                    alt={`Patient ${i}`}
                    width={40}
                    height={40}
                    className="h-full w-full object-cover"
                  />
                </div>
              ))}
            </div>
            <div className="ml-4">
              <p className="font-medium">Trusted by 140+ patients</p>
              <div className="flex items-center">
                {[1, 2, 3, 4].map((i) => (
                  <svg key={i} className="h-5 w-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
                <span className="ml-1 text-sm">(4.0)</span>
              </div>
            </div>
          </div>
        </div>
        <div className="relative h-[300px] overflow-hidden rounded-xl md:h-[400px] lg:h-[500px]">
          <Image
            src="/placeholder.svg?height=800&width=600&text=ENT+Doctor"
            alt="ENT Doctor"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  )
}

