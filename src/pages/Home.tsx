import { Banners, Collections, FeaturedProducts, Products, Services, SummerCollection, Testimonials } from "../components/";

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
    </main>
  )
}

export default Home;