import { tranding_img } from "../../constants"

const SummerCollection: React.FC = () => {
  return (
    <section className="bg-[#F4F9FC] my-28">
      <div className="summer-collection container">
        <img src={tranding_img} className="-mt-10 h-[460px] w-[420px]" alt="tranding-img" />
        <div className="summer_collection-content">
          <span className="text-base font-poppins text-primary">New season trends!</span>
          <h1 className="text-[32px] font-bold mt-2 text-black">Best Summer Collection</h1>
          <span className="text-xl font-roboto font-medium block mt-2">Sale Get up to 50% Off</span>
          <button className="main-btn text-base block mt-6">Shop Now</button>
        </div>
      </div>
    </section>
  )
}

export default SummerCollection
