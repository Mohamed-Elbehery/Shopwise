import { Banners, Collections, FeaturedProducts, Footer, Newsletter, Products, Services, SummerCollection, Testimonials } from "../components/";

const Home: React.FC = () => {
  return (
    <main className="-z-10">
      <Banners />
      <Collections />
      <Products />
      <SummerCollection />
      <FeaturedProducts />
      <Testimonials />
      <Services />
      <Newsletter />
      <Footer />
    </main>
  )
}

export default Home;