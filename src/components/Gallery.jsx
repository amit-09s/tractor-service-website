import engineMaintenance from "../assets/gallery/engine-maintenance.png";
import engineRepair from "../assets/gallery/engine-repair.png";
import fieldRepair from "../assets/gallery/field-repair.png";
import mobileService from "../assets/gallery/mobile-service.png";
import serviceTeam from "../assets/gallery/service-team.png";
import tractorMechanic from "../assets/gallery/tractor-mechanic.png";
import tractorService from "../assets/gallery/tractor-service.png";
import tractorWashing from "../assets/gallery/tractor-washing.png";

const images = [
  {
    src: tractorWashing,
    title: "Tractor Washing",
    alt: "Tractor washing - technician pressure-washing a green tractor",
  },
  {
    src: engineMaintenance,
    title: "Engine Maintenance",
    alt: "Engine maintenance - mechanic inspecting an open tractor engine",
  },
  {
    src: fieldRepair,
    title: "Field Repair",
    alt: "Field repair - tractor repair in a field with a mobile service vehicle",
  },
  {
    src: mobileService,
    title: "Mobile Service",
    alt: "Mobile service - service van assisting a tractor on a farm",
  },
  {
    src: tractorService,
    title: "Tractor Service",
    alt: "Tractor service - mechanic servicing a tractor in a workshop",
  },
  {
    src: tractorMechanic,
    title: "Tractor Mechanic",
    alt: "Tractor mechanic - close-up of a mechanic repairing an engine",
  },
  {
    src: engineRepair,
    title: "Engine Repair",
    alt: "Engine repair - mechanic diagnosing a tractor with service equipment",
  },
  {
    src: serviceTeam,
    title: "Our Service Team",
    alt: "Service team - tractor technicians standing in their workshop",
  },
];

export default function Gallery() {
  return (
    <section id="gallery" className="bg-gray-50 py-20">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="mb-10 text-center text-4xl font-bold">Our Work Gallery</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {images.map((image) => (
            <figure key={image.src} className="overflow-hidden rounded-2xl bg-white shadow-md">
              <img
                src={image.src}
                alt={image.alt}
                title={image.title}
                loading="lazy"
                className="h-64 w-full object-cover"
              />
              <figcaption className="px-4 py-3 text-center text-lg font-semibold text-gray-800">
                {image.title}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}