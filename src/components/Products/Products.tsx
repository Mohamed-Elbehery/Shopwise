import { useState } from "react";
import { useGetAllProductsQuery } from "../../features/api/productsApi"
import Product from "./Product";

const Products: React.FC = () => {
  const [activeLink, setActiveLink] = useState<string>("");
  const { data } = useGetAllProductsQuery('products');

  const handleClick = (e: React.MouseEvent<HTMLLIElement>) => {
    setActiveLink(e.target.innerText);
  };

  return (
    <div className="products container flex flex-col mt-24 mb-10">
      <h1 className="text-[32px] font-roboto font-bold text-secondary_dark">Exclusive Products</h1>
      <ul className="flex items-center gap-10 font-roboto font-medium mt-8">
        <li onClick={handleClick}><button className={`${activeLink == "" && "active"} ${activeLink == "New Arrival" && "active"}`}>New Arrival</button></li>
        <li onClick={handleClick}><button className={`${activeLink == "Best Sellers" && "active"}`}>Best Sellers</button></li>
        <li onClick={handleClick}><button className={`${activeLink == "Features" && "active"}`}>Features</button></li>
        <li onClick={handleClick}><button className={`${activeLink == "Special Offer" && "active"}`}>Special Offer</button></li>
      </ul>
      <div className="products-container grid grid-cols-4 gap-6 mt-12">
        {data?.filter((product) => product.category.includes('men') || product.category.includes('women') ).filter((_, index) => index < 8).map((product) => <Product key={product?.id} {...product} />)}
      </div>
    </div>
  )
}

export default Products
