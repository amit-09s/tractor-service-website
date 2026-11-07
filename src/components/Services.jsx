import {
  Wrench,
  Settings,
  Cog,
  BatteryCharging,
  Disc,
  Package
} from "lucide-react";

const services = [
  {
    icon: Wrench,
    title: "General Servicing",
    desc: "Complete tractor inspection and regular maintenance."
  },
  {
    icon: Settings,
    title: "Engine Repair",
    desc: "Professional engine diagnosis and repair services."
  },
  {
    icon: Cog,
    title: "Hydraulic Repair",
    desc: "Hydraulic system inspection and maintenance."
  },
  {
    icon: BatteryCharging,
    title: "Electrical Work",
    desc: "Battery, wiring and electrical system repair."
  },
  {
    icon: Disc,
    title: "Brake & Clutch",
    desc: "Brake and clutch checking and replacement."
  },
  {
    icon: Package,
    title: "Spare Parts",
    desc: "Quality tractor spare parts and accessories."
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-gray-50">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-14">
          <p className="text-green-600 font-bold uppercase">
            What We Offer
          </p>

          <h2 className="text-4xl font-bold mt-3 text-gray-900">
            Our Tractor Services
          </h2>

          <p className="text-gray-500 mt-4">
            Complete solutions for all your tractor needs.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">

          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition border border-gray-100"
              >
                <div className="bg-green-100 text-green-700 w-14 h-14 rounded-xl flex items-center justify-center">
                  <Icon size={30} />
                </div>

                <h3 className="text-xl font-bold mt-6">
                  {service.title}
                </h3>

                <p className="text-gray-500 mt-3 leading-7">
                  {service.desc}
                </p>

                <a
                  href="#contact"
                  className="text-green-700 font-semibold inline-block mt-5"
                >
                  Get Service →
                </a>
              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
}