import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";
import HeroBanner from "../components/HeroBanner";
import QualityStrip from "../components/QualityStrip";
import CategoryGrid from "../components/CategoryGrid";
import NewsletterBanner from "../components/NewsletterBanner";

function Home() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <HeroBanner />
      <QualityStrip />
      <CategoryGrid />

      {/* <div className="max-w-7xl mx-auto px-6 py-10">
        <h1 className="text-4xl font-bold mb-8">Featured Products</h1>

        <div className="grid gap-6 [grid-template-columns:repeat(auto-fit,minmax(250px,1fr))]">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              name={product.name}
              price={product.price}
              image={product.image}
            />
          ))}
        </div>
      </div> */}

      <NewsletterBanner />

      <Footer />
    </div>
  );
}

export default Home;
