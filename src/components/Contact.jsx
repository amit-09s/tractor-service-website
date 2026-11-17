import { useState } from "react";
import { Phone, MapPin, Clock } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function Contact() {
  const { t } = useTranslation();
  const [form, setForm] = useState({
    name: "",
    phone: "",
    tractor: "",
    service: "",
    staff:"",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const message = t("contact.whatsappMessage", {
      name: form.name,
      phone: form.phone,
      tractor: form.tractor,
      service: form.service ? t(`services.items.${form.service}.title`) : "",
      staff: form.staff,
    });

    window.open(
      `https://wa.me/919876543210?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <section id="contact" className="py-24 bg-[#14251b] text-white">

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-14">

        <div>
          <p className="text-green-400 font-bold">{t("contact.eyebrow")}</p>

          <h2 className="text-4xl font-bold mt-4">
            {t("contact.title")}
          </h2>

          <p className="text-gray-300 mt-5">
            {t("contact.description")}
          </p>

          <div className="space-y-7 mt-10">

            <div className="flex gap-4">
              <Phone className="text-green-400" />
              <div>
                <h3 className="font-bold">{t("contact.phoneLabel")}</h3>
                <p className="text-gray-300">+91 8463068595</p>
              </div>
            </div>

            <div className="flex gap-4">
              <MapPin className="text-green-400" />
              <div>
                <h3 className="font-bold">{t("contact.addressLabel")}</h3>
                <p className="text-gray-300">{t("contact.address")}</p>
              </div>
            </div>

            <div className="flex gap-4">
              <Clock className="text-green-400" />
              <div>
                <h3 className="font-bold">{t("contact.hoursLabel")}</h3>
                <p className="text-gray-300">{t("contact.hours")}</p>
              </div>
            </div>

          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-white text-gray-900 p-8 rounded-2xl space-y-5"
        >
          <h3 className="text-2xl font-bold">{t("contact.formTitle")}</h3>

          <input
            required
            placeholder={t("contact.name")}
            className="w-full p-4 border rounded-lg"
            value={form.name}
            onChange={(e) => setForm({...form, name:e.target.value})}
          />

          <input
            required
            type="tel"
            pattern="[0-9]{10}"
            placeholder={t("contact.phone")}
            className="w-full p-4 border rounded-lg"
            value={form.phone}
            onChange={(e) => setForm({...form, phone:e.target.value})}
          />

          <input
            required
            placeholder={t("contact.tractor")}
            className="w-full p-4 border rounded-lg"
            value={form.tractor}
            onChange={(e) => setForm({...form, tractor:e.target.value})}
          />

          <input
            required
            placeholder={t("contact.staff")}
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
            <option value="">{t("contact.selectService")}</option>
            <option value="general">{t("services.items.general.title")}</option>
            <option value="engine">{t("services.items.engine.title")}</option>
            <option value="hydraulic">{t("services.items.hydraulic.title")}</option>
            <option value="electrical">{t("services.items.electrical.title")}</option>
            <option value="brakes">{t("services.items.brakes.title")}</option>
            <option value="parts">{t("services.items.parts.title")}</option>
          </select>

          <button
            type="submit"
            className="w-full bg-green-600 text-white py-4 rounded-lg font-bold hover:bg-green-700"
          >
            {t("contact.submit")}
          </button>

        </form>
      </div>
    </section>
  );
}