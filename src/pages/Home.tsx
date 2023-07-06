import { Banners, Collections, FeaturedProducts, Newsletter, Products, Services, SummerCollection, Testimonials } from "../components/";

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
    </main>
  )
}

export default Home;