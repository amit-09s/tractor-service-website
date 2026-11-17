import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Gallery from "./components/Gallery";
import { useTranslation } from "react-i18next";

function App() {
  const { t } = useTranslation();

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />

      <Gallery />

      <section className="py-16 text-center">
        <h2 className="text-3xl font-bold">{t("trust.title")}</h2>
        <p className="mt-4 text-gray-600">
          {t("trust.description")}
        </p>
      </section>

      <Contact />

      <footer className="bg-black text-white text-center p-6">
        {t("footer")}
      </footer>
    </>
  );
}

export default App;