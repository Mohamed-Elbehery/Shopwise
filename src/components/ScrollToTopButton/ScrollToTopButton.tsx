import { HiOutlineChevronUp } from 'react-icons/hi2';

const ScrollToTopButton:React.FC = () => {
  return <button onClick={() => window.scroll({ top: 0, behavior: "smooth" })} className={"fixed bottom-5 right-5 bg-[#000000] text-2xl text-white p-2 hover:bg-primary transition-all duration-300 z-[999]"}> <HiOutlineChevronUp className="mx-auto" /> </button>
}

export default ScrollToTopButton
