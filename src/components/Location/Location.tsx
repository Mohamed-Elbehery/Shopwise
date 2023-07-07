import { Link, useLocation } from "react-router-dom"
import { HiOutlineChevronRight } from 'react-icons/hi';

const Location: React.FC = () => {
  const { pathname } = useLocation();

  return (
    <div className="bg-[#f7f8fb] py-[70px]">
      <div className="container">
        <h1 className="capitalize text-2xl font-roboto text-[28px] font-bold text-secondary_dark">{pathname.replace("/", "")}</h1>
        <span className="capitalize flex items-center gap-1"><Link className="hover:text-primary transition duration-300" to={"/"}>Home</Link> <HiOutlineChevronRight className="w-4 h-4 text-grey mt-1" /> <span className="text-primary font-medium">{pathname.replace("/", "")}</span></span>
      </div>
    </div>
  )
}

export default Location
