import {
  Wrench,
  Settings,
  Cog,
  BatteryCharging,
  Disc,
  Package
} from "lucide-react";
import { useTranslation } from "react-i18next";

const services = [
  {
    icon: Wrench,
    key: "general"
  },
  {
    icon: Settings,
    key: "engine"
  },
  {
    icon: Cog,
    key: "hydraulic"
  },
  {
    icon: BatteryCharging,
    key: "electrical"
  },
  {
    icon: Disc,
    key: "brakes"
  },
  {
    icon: Package,
    key: "parts"
  }
];

export default function Services() {
  const { t } = useTranslation();

  return (
    <section id="services" className="py-24 bg-gray-50">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-14">
          <p className="text-green-600 font-bold uppercase">
            {t("services.eyebrow")}
          </p>

          <h2 className="text-4xl font-bold mt-3 text-gray-900">
            {t("services.title")}
          </h2>

          <p className="text-gray-500 mt-4">
            {t("services.description")}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">

          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.key}
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition border border-gray-100"
              >
                <div className="bg-green-100 text-green-700 w-14 h-14 rounded-xl flex items-center justify-center">
                  <Icon size={30} />
                </div>

                <h3 className="text-xl font-bold mt-6">
                  {t(`services.items.${service.key}.title`)}
                </h3>

                <p className="text-gray-500 mt-3 leading-7">
                  {t(`services.items.${service.key}.description`)}
                </p>

                <a
                  href="#contact"
                  className="text-green-700 font-semibold inline-block mt-5"
                >
                  {t("services.getService")}
                </a>
              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
}