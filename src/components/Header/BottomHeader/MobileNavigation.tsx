import { TfiSearch } from "react-icons/tfi"
import { IoMenuSharp } from "react-icons/io5"
import { IoMdClose } from "react-icons/io"
import { GoChevronDown } from 'react-icons/go';
import ShoppingCart from "../../ShoppingCart/ShoppingCart";
import useSearch from "../../../hooks/useSearch";

const MobileNavigation: React.FC = () => {
  const { searchIcon, setSearchIcon, searchIconRef, iconRef, isMenuOpened, setIsMenuOpened, slideRightContainer, setSlideRightContainer } = useSearch();

  return (
    <div className="mobile-navigation">
      {/* Search Icon */}
      <button onClick={() => {
        setSearchIcon(true)
        setSlideRightContainer(1);
      }} className='main_nav-link'>
        <TfiSearch className="w-5 h-5" />
          <div className={`${!searchIcon ? "search-container-hidden" : "search-container-displayed"}`}>
            <input ref={searchIconRef} className='pr-6 bg-transparent w-[60%] text-white border-b-2 border-white pb-2 outline-none placeholder:text-white' type="text" placeholder='Search' />
            <TfiSearch ref={iconRef} className="w-5 h-5 cursor-pointer hover:text-primary transition duration-300 text-white -ml-5 mb-3"/>
          </div>
        <div className={`search-container-slide ${slideRightContainer == 2 ? "translate-x-full" : "transition-none"}`}></div>
        </button>

      {/* Shopping Cart */}
      <ShoppingCart className="mobile-cart" />

      {/* Mobile Navigation */}
      {isMenuOpened 
        ? 
        <button className='main_nav-lin mobile-icon' onClick={() => setIsMenuOpened(false)}>
          <IoMdClose className="w-7 h-7" />
        </button>
        :
        <button className='main_nav-link mobile-icon' onClick={() => setIsMenuOpened(true)}>
          <IoMenuSharp className="w-7 h-7" />
        </button>
      }

      {/* Mobile Menu */}
      <ul className={`absolute left-0 right-0 top-full bg-white px-3 overflow-hidden transition-all duration-500 ease-out ${isMenuOpened ? "-bottom-[385px]" : "-bottom-[0vh]"}`}>
        <li className="main_nav-link flex items-center justify-between">Home <GoChevronDown /></li>
        <li className="main_nav-link flex items-center justify-between">Pages <GoChevronDown /></li>
        <li className="main_nav-link flex items-center justify-between">Products <GoChevronDown /></li>
        <li className="main_nav-link flex items-center justify-between">Blog <GoChevronDown /></li>
        <li className="main_nav-link flex items-center justify-between">Shop <GoChevronDown /></li>
        <li className="main_nav-link flex items-center justify-between">Contact Us <GoChevronDown /></li>
      </ul>
    </div>
  )
}

export default MobileNavigation
