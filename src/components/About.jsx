export default function About() {
  return (
    <section id="about" className="py-24">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        <img
          src="https://images.unsplash.com/photo-1592982537447-6f2a6a0c5a1e?w=900"
          alt="Agricultural tractor"
          className="rounded-2xl w-full h-[400px] object-cover"
        />

        <div>
          <p className="text-green-600 font-bold">ABOUT OUR WORKSHOP</p>

          <h2 className="text-4xl font-bold mt-4">
            Keeping Your Tractors Ready for Every Season
          </h2>

          <p className="text-gray-600 mt-6 leading-8">
            We provide reliable tractor maintenance and repair
            solutions. Our focus is on quality work, honest pricing
            and customer satisfaction.
          </p>

          <ul className="mt-6 space-y-4">
            {[
              "Experienced mechanics",
              "Quality spare parts",
              "Affordable service charges",
              "Reliable repair solutions"
            ].map((item) => (
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