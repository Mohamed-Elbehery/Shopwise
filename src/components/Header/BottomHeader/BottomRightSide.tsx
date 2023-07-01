import { GoChevronDown } from 'react-icons/go';
import { TfiSearch } from 'react-icons/tfi';
import { PiShoppingCartThin } from 'react-icons/pi';
import { NavLink } from 'react-router-dom';
import { menu_banner1, menu_banner2, menu_banner3, categories, shopLayout, shop_banner } from '../../../constants';
import useMenus from '../../../hooks/useMenus';

const BottomRightSide: React.FC = () => {
  const { isHomeMenuHidden, setIsHomeMenuHidden , isPagesMenuHidden, setIsPagesMenuHidden
    , isProductsMenuHidden, setIsProductsMenuHidden, isBlogMenuHidden, setIsBlogMenuHidden
    , isShopMenuHidden, setIsShopMenuHidden } = useMenus();

  return (
    <ul className='bottom-header'>
      {/* Home Menu */}
      <li className='relative' onMouseEnter={() => setIsHomeMenuHidden(true)} onMouseLeave={() => setIsHomeMenuHidden(false)}>
        <NavLink className="main_nav-link font-medium" to="/">
          Home <GoChevronDown />
        </NavLink>
        {<ul className={isHomeMenuHidden ? 'menu-displayed' : 'menu-hidden'}>
          <li className='menu-link'>Fashion 1</li>
          <li className='menu-link'>Fashion 2</li>
          <li className='menu-link'>Furniture 1</li>
          <li className='menu-link'>Furniture 2</li>
          <li className='menu-link'>Electronics 1</li>
          <li className='menu-link'>Electronics 2</li>
        </ul>}
      </li>

      {/* Pages Menu */}
      <li className='main_nav-link font-medium relative' onMouseEnter={() => setIsPagesMenuHidden(true)} onMouseLeave={() => setIsPagesMenuHidden(false)}>
        Pages <GoChevronDown />
        {<ul className={isPagesMenuHidden ? 'menu-displayed' : 'menu-hidden'}>
          <li className='menu-link'>About Us</li>
          <li className='menu-link'>Contact Us</li>
          <li className='menu-link'>Faq</li>
          <li className='menu-link'>404 Error Page</li>
          <li className='menu-link'>Login</li>
          <li className='menu-link'>Register</li>
          <li className='menu-link'>Terms And Conditions</li>
        </ul>}
      </li>

      {/* Products Menu */}
      <li className='main_nav-link font-medium' onMouseEnter={() => setIsProductsMenuHidden(true)} onMouseLeave={() => setIsProductsMenuHidden(false)}>
        Products <GoChevronDown />
        <ul className={isProductsMenuHidden ? 'category-displayed' : 'category-hidden'}>
          {/* Categories */}
          {categories.map((item, index) => (
            <li className='w-1/4 border-l border-y-gray-300 pl-6' key={index}>
              <ul className='space-y-5'>
                <li className='font-bold'><h1>{item.title}</h1></li>
                {item.cats.map((cat, index) => (
                  <li className='menu-link capitalize' key={index}>{cat}</li>
                ))}
              </ul>
            </li>
          ))}
          {/* Categories Banners */}
          <li className='w-full mt-6'>
            <ul className='flex items-center gap-6'>
              <li className='relative'>
                <img src={menu_banner1} alt="menu-banner" />
                <div className='category-banner-content'>
                  <span className='capitalize font-medium text-[15px]'>10% Off</span>
                  <h2 className='font-medium text-2xl capitalize'>New Arrival</h2>
                  <span className='category-menu-btn relative'>Shop Now</span>
                </div>
              </li>
              <li className='relative'>
                <img src={menu_banner2} alt="menu-banner" />
                <div className='category-banner-content'>
                  <span className='capitalize font-medium text-[15px]'>15% Off</span>
                  <h2 className='font-medium text-2xl capitalize'>Men's Fashion</h2>
                  <span className='category-menu-btn relative'>Shop Now</span>
                </div>
              </li>
              <li className='relative'>
                <img src={menu_banner3} alt="menu-banner" />
                <div className='category-banner-content'>
                  <span className='capitalize font-medium text-[15px]'>23% Off</span>
                  <h2 className='font-medium text-2xl capitalize'>Kid's Fashion</h2>
                  <span className='category-menu-btn relative w-fit'>Shop Now</span>
                </div>
              </li>
            </ul>
          </li>
        </ul>
      </li>

      {/* Blog */}
      <li className='main_nav-link font-medium relative' onMouseEnter={() => setIsBlogMenuHidden(true)} onMouseLeave={() => setIsBlogMenuHidden(false)}>
        Blog <GoChevronDown />
        {<ul className={isBlogMenuHidden ? 'menu-displayed' : 'menu-hidden'}>
          <li className='menu-link'>Fashion 1</li>
          <li className='menu-link'>Fashion 2</li>
          <li className='menu-link'>Furniture 1</li>
          <li className='menu-link'>Furniture 2</li>
          <li className='menu-link'>Electronics 1</li>
          <li className='menu-link'>Electronics 2</li>
        </ul>}
      </li>

      {/* Shop */}
      <li className='main_nav-link font-medium' onMouseEnter={() => setIsShopMenuHidden(true)} onMouseLeave={() => setIsShopMenuHidden(false)}>
        Shop <GoChevronDown />
        <ul className={isShopMenuHidden ? 'category-displayed' : 'category-hidden'}>
          {/* Shop Links */}
          {shopLayout.map((item, index) => (
            <li className='w-1/4 border-l border-y-gray-300 pl-6' key={index}>
              <ul className='space-y-5'>
                <li className='font-bold'><h1>{item.title}</h1></li>
                {item.layouts.map((layout, index) => (
                  <li className='menu-link capitalize' key={index}>{layout}</li>
                ))}
              </ul>
            </li>
          ))}
          {/* Shop Banner */}
          <li className='shop-img border-l border-y-gray-300 pl-6'>
            <img src={shop_banner} alt="shop-banner" />
            <div className='absolute left-10 bottom-20 text-white z-50 space-y-2'>
              <h2 className='text-xl'>New Collection</h2>
              <h1 className='text-3xl font-bold'>Sale 30% Off</h1>
              <button className='shop-btn'>Shop Now</button>
            </div>
          </li>
        </ul>
      </li>

      {/* Contact Us */}
      <li><NavLink className='main_nav-link font-medium' to="/contact-us">Contact Us</NavLink></li>
      
      {/* Search Icon */}
      <li className='main_nav-link'><TfiSearch className="w-5 h-5" /></li>

      {/* Shopping Cart Icon */}
      <li className='main_nav-link relative'>
        <PiShoppingCartThin className="w-6 h-6" />
        <span className='cart-length'>2</span>
      </li>
    </ul>
  )
}

export default BottomRightSide
