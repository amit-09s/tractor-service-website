import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Gallery from "./components/Gallery";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />

      <Gallery />

      <section className="py-16 text-center">
        <h2 className="text-3xl font-bold">Trusted Tractor Service</h2>
        <p className="mt-4 text-gray-600">
          Quality work and reliable service for every farmer.
        </p>
      </section>

      <Contact />

      <footer className="bg-black text-white text-center p-6">
        © 2026 TractorCare. All Rights Reserved.
      </footer>
    </>
  );
}

export default App;