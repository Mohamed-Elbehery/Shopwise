import { Banners, Collections, FeaturedProducts, Products, Services, SummerCollection, Testimonials, Loading } from "../components/";
import { useGetAllProductsQuery } from "../features/api/productsApi";

const Home: React.FC = () => {
  const { data, isFetching } = useGetAllProductsQuery('products');

  return (
    <main className="-z-10">
      {isFetching ? <Loading className="load-in" /> : <Loading className="load-out" />}
      <>
        <Banners />
        <Collections />
        <Products data={data} />
        <SummerCollection />
        <FeaturedProducts data={data} />
        <Testimonials />
        <Services />
        </>
    </main>
  )
}

export default Home;