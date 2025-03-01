import Image from "next/image"

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Rajesh Kumar",
      image: "/placeholder.svg?height=100&width=100&text=RK",
      text: "I had been suffering from chronic sinusitis for years. After undergoing sinus surgery at Sri Rama ENT Care Center, I can finally breathe normally again. Dr. Shakuntala Ghosh and her team provided excellent care throughout my treatment.",
      rating: 5,
    },
    {
      name: "Priya Sharma",
      image: "/placeholder.svg?height=100&width=100&text=PS",
      text: "My son had recurring ear infections that were affecting his hearing. The doctors at Sri Rama ENT Care Center diagnosed the issue accurately and provided effective treatment. We're very grateful for their expertise and care.",
      rating: 4,
    },
    {
      name: "Anand Reddy",
      image: "/placeholder.svg?height=100&width=100&text=AR",
      text: "I underwent septoplasty and turbinectomy at this clinic for my breathing problems. The procedure was successful, and I experienced minimal discomfort during recovery. The staff was supportive and professional throughout.",
      rating: 5,
    },
  ]

  return (
    <section className="bg-gray-50 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">What Our Patients Say</h2>
          <p className="mx-auto max-w-2xl text-gray-600">
            Read testimonials from our patients who have experienced our care and treatments.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="rounded-lg bg-white p-6 shadow-sm">
              <div className="mb-4 flex items-center">
                <div className="mr-4 h-12 w-12 overflow-hidden rounded-full">
                  <Image
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    width={48}
                    height={48}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={`h-4 w-4 ${i < testimonial.rating ? "text-yellow-400" : "text-gray-300"}`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-600">"{testimonial.text}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

