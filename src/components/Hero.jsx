import { ArrowRight, Phone } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function Hero() {
  const { t } = useTranslation();

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
          {t("hero.eyebrow")}
        </span>

        <h1 className="text-white text-4xl md:text-7xl font-bold mt-5 max-w-3xl leading-tight">
          {t("hero.title")}
          <span className="text-green-400">{t("hero.highlight")}</span>
        </h1>

        <p className="text-gray-200 text-lg mt-6 max-w-xl">
          {t("hero.description")}
        </p>

        <div className="flex flex-wrap gap-4 mt-9">

          <a
            href="#contact"
            className="bg-green-500 text-white px-7 py-4 rounded-lg font-bold flex items-center gap-2 hover:bg-green-600"
          >
            {t("hero.book")} <ArrowRight />
          </a>

          <a
            href="tel:+919876543210"
            className="border border-white text-white px-7 py-4 rounded-lg flex items-center gap-2 hover:bg-white hover:text-black"
          >
            <Phone /> {t("hero.call")}
          </a>

        </div>
      </div>
    </section>
  );
}