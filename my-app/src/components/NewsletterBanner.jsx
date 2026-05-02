// src/components/NewsletterBanner.jsx

function NewsletterBanner() {
  return (
    <section className="bg-black border-t border-gray-800">
      <div className="grid grid-cols-1 lg:grid-cols-3">
        {/* Left Image */}
        <div className="h-32 md:h-40 lg:h-44 overflow-hidden">
          <img
            src="../assests/newsletter_banner.png"
            alt="Takashi Grinder"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Middle Content */}
        <div className="bg-[#0d0d0d] text-white flex flex-col justify-center px-5 py-4">
          <h2 className="text-xl md:text-2xl font-extrabold uppercase leading-tight mb-1">
            Built For Performance.
            <br />
            Made To Last.
          </h2>

          <p className="text-gray-400 text-sm leading-5 max-w-md">
            Subscribe for the latest products and exclusive offers.
          </p>
        </div>

        {/* Right Subscribe Form */}
        <div className="bg-[#0d0d0d] flex items-center px-5 py-4">
          <div className="flex flex-col sm:flex-row w-full gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 bg-black border border-gray-700 text-white px-4 py-2 outline-none focus:border-red-600 transition"
            />

            <button className="bg-red-600 hover:bg-red-700 transition cursor-pointer text-white font-bold px-5 py-2 uppercase tracking-wide">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NewsletterBanner;
