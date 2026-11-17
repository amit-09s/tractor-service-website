import { useState } from "react";
import { Menu, X, Tractor } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { i18n, t } = useTranslation();

  const links = [
    [t("navigation.home"), "#home"],
    [t("navigation.about"), "#about"],
    [t("navigation.services"), "#services"],
    [t("navigation.gallery"), "#gallery"],
    [t("navigation.contact"), "#contact"],
  ];

  return (
    <nav className="bg-[#14251b] text-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        <a href="#home" className="flex items-center gap-2">
          <Tractor size={32} className="text-green-400" />
          <span className="text-2xl font-bold">
            Tractor<span className="text-green-400">Care</span>
          </span>
        </a>

        <div className="hidden md:flex gap-8 items-center">
          {links.map(([name, href]) => (
            <a
              key={name}
              href={href}
              className="hover:text-green-400 transition"
            >
              {name}
            </a>
          ))}

          <a
            href="#contact"
            className="bg-green-500 px-5 py-3 rounded-lg font-semibold hover:bg-green-600"
          >
            {t("navigation.bookService")}
          </a>
          <div className="flex gap-2">
            <button type="button" onClick={() => i18n.changeLanguage("en")}>
              {t("navigation.english")}
            </button>
            <button type="button" onClick={() => i18n.changeLanguage("hi")}>
              {t("navigation.hindi")}
            </button>
          </div>
        </div>

        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
          aria-label={t("navigation.toggle")}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="md:hidden px-6 pb-5 flex flex-col gap-4">
          {links.map(([name, href]) => (
            <a
              key={name}
              href={href}
              onClick={() => setOpen(false)}
            >
              {name}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="bg-green-500 p-3 rounded-lg text-center"
          >
            {t("navigation.bookService")}
          </a>
          <div className="flex gap-4">
            <button type="button" onClick={() => i18n.changeLanguage("en")}>
              {t("navigation.english")}
            </button>
            <button type="button" onClick={() => i18n.changeLanguage("hi")}>
              {t("navigation.hindi")}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}