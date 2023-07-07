import { useParams } from "react-router-dom"
import { useGetProductQuery } from "../features/api/productsApi"
import { IProduct } from "../interfaces";

const SignleProduct: React.FC<IProduct> = () => {
  const { id } = useParams();
  const { data } =  useGetProductQuery(`products/${id}`);

  return (
    <div>
      <img src={data?.image} alt="" />
    </div>
  )
}

export default SignleProduct
