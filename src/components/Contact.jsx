import { useState } from "react";
import { Phone, MapPin, Clock } from "lucide-react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    tractor: "",
    service: "",
    staff:"",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const message = `
Hello, I want to book a tractor service.

Name: ${form.name}
Phone: ${form.phone}
Tractor Model: ${form.tractor}
Service: ${form.service}
Staff: ${form.staff}
    `;

    window.open(
      `https://wa.me/919876543210?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <section id="contact" className="py-24 bg-[#14251b] text-white">

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-14">

        <div>
          <p className="text-green-400 font-bold">CONTACT US</p>

          <h2 className="text-4xl font-bold mt-4">
            Book Your Tractor Service Today
          </h2>

          <p className="text-gray-300 mt-5">
            Contact us for tractor maintenance, repair and spare parts.
          </p>

          <div className="space-y-7 mt-10">

            <div className="flex gap-4">
              <Phone className="text-green-400" />
              <div>
                <h3 className="font-bold">Phone Number</h3>
                <p className="text-gray-300">+91 8463068595</p>
              </div>
            </div>

            <div className="flex gap-4">
              <MapPin className="text-green-400" />
              <div>
                <h3 className="font-bold">Shop Address</h3>
                <p className="text-gray-300">Bhopal Road, Near petrol Pump , Berasia Madhya Pradesh, India</p>
              </div>
            </div>

            <div className="flex gap-4">
              <Clock className="text-green-400" />
              <div>
                <h3 className="font-bold">Opening Hours</h3>
                <p className="text-gray-300">Monday - Saturday</p>
              </div>
            </div>

          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-white text-gray-900 p-8 rounded-2xl space-y-5"
        >
          <h3 className="text-2xl font-bold">Service Booking</h3>

          <input
            required
            placeholder="Your Name"
            className="w-full p-4 border rounded-lg"
            value={form.name}
            onChange={(e) => setForm({...form, name:e.target.value})}
          />

          <input
            required
            type="tel"
            pattern="[0-9]{10}"
            placeholder="Mobile Number"
            className="w-full p-4 border rounded-lg"
            value={form.phone}
            onChange={(e) => setForm({...form, phone:e.target.value})}
          />

          <input
            required
            placeholder="Tractor Model"
            className="w-full p-4 border rounded-lg"
            value={form.tractor}
            onChange={(e) => setForm({...form, tractor:e.target.value})}
          />

          <input
            required
            placeholder="Staff Name"
            className="w-full p-4 border rounded-lg"
            value={form.staff}
            onChange={(e) => setForm({...form, staff:e.target.value})}
          />

          <select
            required
            className="w-full p-4 border rounded-lg"
            value={form.service}
            onChange={(e) => setForm({...form, service:e.target.value})}
          >
            <option value="">Select Service</option>
            <option>General Servicing</option>
            <option>Engine Repair</option>
            <option>Hydraulic Repair</option>
            <option>Electrical Work</option>
            <option>Brake & Clutch</option>
            <option>Spare Parts</option>
          </select>

          <button
            type="submit"
            className="w-full bg-green-600 text-white py-4 rounded-lg font-bold hover:bg-green-700"
          >
            Book Service on WhatsApp
          </button>

        </form>
      </div>
    </section>
  );
}