import { useGetAllProductsQuery } from "../../features/api/productsApi";
import Product from "../Products/Product";

const FeaturedProducts: React.FC = () => {
  const { data } = useGetAllProductsQuery('products');

  return (
    <div className="products container flex flex-col mb-10">
      <h1 className="mx-auto font-bold text-[32px] text-secondary_dark">Featured Products</h1>
      <div className="products-container grid grid-cols-4 gap-6 mt-12">
        {data?.filter((product) => product.category.includes('men') || product.category.includes('women') ).filter((_, index) => index < 4).map((product) => <Product key={product?.id} {...product} />)}
      </div>
    </div>
  )
}

export default FeaturedProducts
