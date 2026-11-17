import { useTranslation } from "react-i18next";

export default function About() {
  const { t } = useTranslation();

  return (
    <section id="about" className="py-24">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        <img
          src="https://th.bing.com/th/id/OIG4.8l2th9HA.mm9DOzPQx1J?pid=ImgGn"
          alt={t("about.imageAlt")}
          className="rounded-2xl w-full h-[400px] object-cover"
        />

        <div>
          <p className="text-green-600 font-bold">{t("about.eyebrow")}</p>

          <h2 className="text-4xl font-bold mt-4">
            {t("about.title")}
          </h2>

          <p className="text-gray-600 mt-6 leading-8">
            {t("about.description")}
          </p>

          <ul className="mt-6 space-y-4">
            {t("about.benefits", { returnObjects: true }).map((item) => (
              <li key={item} className="flex gap-3 items-center">
                <span className="text-green-600 font-bold">✓</span>
                {item}
              </li>
            ))}
          </ul>
        </div>

      </div>
    </section>
  );
}