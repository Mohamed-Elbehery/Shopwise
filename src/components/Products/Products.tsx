import { useState } from "react";
import Product from "./Product";

const Products = ({ data }) => {
  const [activeLink, setActiveLink] = useState<string>("women's clothing");

  const handleClick = (e) => {
    setActiveLink(e.target.innerText);
  };

  const categories = ["women's clothing", "men's clothing", "jewelery", "electronics"];

  return (
    <section className="products container flex flex-col mt-24 mb-10">
      <h1 className="text-[32px] font-roboto font-bold text-secondary_dark">Exclusive Products</h1>
      <ul className="flex items-center gap-10 font-roboto font-medium mt-8">
      {categories.map((cat, index) => {
        if(index == 0) {
          return <li key={index} onClick={handleClick}><button className={`${activeLink.toLowerCase() == "" && "active"} ${activeLink.toLowerCase() == cat && "active"} capitalize`}>{cat}</button></li>
        } else {
          return <li key={index} onClick={handleClick}><button className={`${activeLink.toLowerCase() == cat && "active"} capitalize`}>{cat}</button></li>
        }
      })}
      </ul>
      <div className="products-container grid grid-cols-4 gap-6 mt-12">
        {data?.filter((product) => product.category == activeLink.toLowerCase()).filter((_, index) => index < 4).map((product) => <Product key={product?.id} data={product} {...product} />)}
      </div>
    </section>
  )
}

export default Products
