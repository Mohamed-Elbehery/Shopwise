import { Banners, Collections, FeaturedProducts, Products, SummerCollection } from "../components/";

const Home: React.FC = () => {
  return (
    <main className="-z-10">
      <Banners />
      <Collections />
      <Products />
      <SummerCollection />
      <FeaturedProducts />
    </main>
  )
}

export default Home;