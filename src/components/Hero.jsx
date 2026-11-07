import { ArrowRight, Phone } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-[600px] flex items-center bg-cover bg-center"
      style={{
        backgroundImage:
          "linear-gradient(90deg, rgba(10,25,15,.95), rgba(10,25,15,.3)), url('https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1800')",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-24 w-full">

        <span className="text-green-400 font-semibold uppercase tracking-widest">
          Professional Tractor Services
        </span>

        <h1 className="text-white text-4xl md:text-7xl font-bold mt-5 max-w-3xl leading-tight">
          Your Tractor Deserves
          <span className="text-green-400"> Expert Care.</span>
        </h1>

        <p className="text-gray-200 text-lg mt-6 max-w-xl">
          Reliable tractor repair, maintenance and spare parts
          to keep your farming work running smoothly.
        </p>

        <div className="flex flex-wrap gap-4 mt-9">

          <a
            href="#contact"
            className="bg-green-500 text-white px-7 py-4 rounded-lg font-bold flex items-center gap-2 hover:bg-green-600"
          >
            Book a Service <ArrowRight />
          </a>

          <a
            href="tel:+919876543210"
            className="border border-white text-white px-7 py-4 rounded-lg flex items-center gap-2 hover:bg-white hover:text-black"
          >
            <Phone /> Call Now
          </a>

        </div>
      </div>
    </section>
  );
}