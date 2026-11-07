import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />

      <section id="gallery" className="py-20 text-center bg-gray-50">
        <h2 className="text-4xl font-bold">Our Work Gallery</h2>
        <p className="mt-4 text-gray-500">
          Add your tractor repair and workshop photos here.
        </p>
      </section>

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