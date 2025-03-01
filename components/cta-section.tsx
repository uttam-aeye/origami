import Link from "next/link"
import { CalendarCheck } from "lucide-react"
import { Button } from "@/components/ui/button"

export function CtaSection() {
  return (
    <section className="bg-blue-600 py-16">
      <div className="container mx-auto px-4 text-center text-white">
        <h2 className="mb-4 text-3xl font-bold md:text-4xl">Ready to Schedule Your Appointment?</h2>
        <p className="mx-auto mb-8 max-w-2xl text-blue-100">
          Don't let ENT issues affect your quality of life. Our specialists are ready to provide you with the best care
          possible.
        </p>
        <Link
          href="https://book-appointment.healthplix.com/dr-shakuntala-ghosh-ent-dilsukhnagar-hyderabad"
          target="_blank"
        >
          <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
            <CalendarCheck className="mr-2 h-5 w-5" />
            Book Your Appointment Now
          </Button>
        </Link>
        <p className="mt-4 text-sm text-blue-200">
          Or call us directly at <span className="font-semibold">+91 7416004877</span>
        </p>
      </div>
    </section>
  )
}

