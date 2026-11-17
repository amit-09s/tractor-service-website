import engineMaintenance from "../assets/gallery/engine-maintenance.png";
import engineRepair from "../assets/gallery/engine-repair.png";
import fieldRepair from "../assets/gallery/field-repair.png";
import mobileService from "../assets/gallery/mobile-service.png";
import serviceTeam from "../assets/gallery/service-team.png";
import tractorMechanic from "../assets/gallery/tractor-mechanic.png";
import tractorService from "../assets/gallery/tractor-service.png";
import tractorWashing from "../assets/gallery/tractor-washing.png";
import { useTranslation } from "react-i18next";

const images = [
  {
    src: tractorWashing,
    key: "washing",
  },
  {
    src: engineMaintenance,
    key: "maintenance",
  },
  {
    src: fieldRepair,
    key: "fieldRepair",
  },
  {
    src: mobileService,
    key: "mobileService",
  },
  {
    src: tractorService,
    key: "tractorService",
  },
  {
    src: tractorMechanic,
    key: "mechanic",
  },
  {
    src: engineRepair,
    key: "engineRepair",
  },
  {
    src: serviceTeam,
    key: "team",
  },
];

export default function Gallery() {
  const { t } = useTranslation();

  return (
    <section id="gallery" className="bg-gray-50 py-20">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="mb-10 text-center text-4xl font-bold">{t("gallery.title")}</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {images.map((image) => (
            <figure key={image.src} className="overflow-hidden rounded-2xl bg-white shadow-md">
              <img
                src={image.src}
                alt={t(`gallery.alts.${image.key}`)}
                title={t(`gallery.items.${image.key}`)}
                loading="lazy"
                className="h-64 w-full object-cover"
              />
              <figcaption className="px-4 py-3 text-center text-lg font-semibold text-gray-800">
                {t(`gallery.items.${image.key}`)}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}