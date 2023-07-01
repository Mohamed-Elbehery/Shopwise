import { IBanner } from "../../interfaces"

const Collection: React.FC<IBanner> = ({ img, sale, title, order }) => {
  return (
    <div className="relative group overflow-hidden">
      <img className="group-hover:scale-105 transition duration-[400ms] ease-in-out" src={img} alt="shopbanner" />
        {order == 1 ? 
        <div className="absolute right-10 translate-y-1/2 bottom-1/2 first-collection">
            <span className="block text-[20px] font-medium font-roboto text-secondary_dark">{sale}</span>
            <h1 className="text-[32px] font-bold text-secondary_dark">{title}</h1>
            <button className="relative text-base font-poppins text-secondary_light hover:underline hover:text-primary transition duration-300 after:absolute after:left-0 after:right-0 after:bottom-1 after:h-[6px] after:bg-secondary after:bg-opacity-40">Shop Now</button>
        </div>
        :
        <div className="absolute right-20 translate-y-1/2 bottom-1/2 second-collection">
          <h1 className="text-[32px] font-bold text-secondary_dark">{title}</h1>
          <span className="block text-[24px] font-medium font-roboto text-secondary_dark">{sale}</span>
          <button className="relative text-base font-poppins text-secondary_light hover:underline hover:text-primary transition duration-300 after:absolute after:left-0 after:right-0 after:bottom-1 after:h-[6px] after:bg-secondary after:bg-opacity-40 mt-1">Shop Now</button>
        </div>
        }
    </div>
  )
}

export default Collection
