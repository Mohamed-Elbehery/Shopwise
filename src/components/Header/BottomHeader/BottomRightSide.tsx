/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useRef, useState } from 'react';
import { GoChevronDown } from 'react-icons/go';
import { TfiSearch } from 'react-icons/tfi';
import { NavLink } from 'react-router-dom';
import { categories, home_blog_Links, pagesLinks, productsLinks, shopLayout, shop_banner } from '../../../constants';
import useMenus from '../../../hooks/useMenus';
import ShoppingCart from '../../ShoppingCart/ShoppingCart';

const BottomRightSide: React.FC = () => {
  const { isHomeMenuHidden, setIsHomeMenuHidden , isPagesMenuHidden, setIsPagesMenuHidden
    , isProductsMenuHidden, setIsProductsMenuHidden, isBlogMenuHidden, setIsBlogMenuHidden
    , isShopMenuHidden, setIsShopMenuHidden } = useMenus();

  const [searchIcon, setSearchIcon] = useState<boolean>(false);
  const searchIconRef = useRef(null);
  const iconRef = useRef(null);

  useEffect(() => {
    const handler = (e) => {
      console.log(e.target.classList.value);
      
      if(e.target.classList.value == "search-container-displayed") setSearchIcon(false);
    }

    document.addEventListener('click', handler);

    return () => {
      document.removeEventListener('click', handler, false);
      document.removeEventListener('click', handler, true);
    }
  }, []);

  return (
    <ul className='bottom-header'>
      {/* Home Menu */}
      <li className='relative' onMouseEnter={() => setIsHomeMenuHidden(true)} onMouseLeave={() => setIsHomeMenuHidden(false)}>
        <NavLink className="main_nav-link font-medium" to="/">
          Home <GoChevronDown />
        </NavLink>
        {<ul className={isHomeMenuHidden ? 'menu-displayed' : 'menu-hidden'}>
          {home_blog_Links.map((link, index) => <li key={index} className='menu-link'>{link}</li>)}
        </ul>}
      </li>

      {/* Pages Menu */}
      <li className='main_nav-link font-medium relative' onMouseEnter={() => setIsPagesMenuHidden(true)} onMouseLeave={() => setIsPagesMenuHidden(false)}>
        Pages <GoChevronDown />
        {<ul className={isPagesMenuHidden ? 'menu-displayed' : 'menu-hidden'}>
          {pagesLinks.map((link, index) => <li key={index} className='menu-link'>{link}</li>)}
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
            <ul className='flex items-center gap-4'>
              {productsLinks.map((link, index) => 
                <li key={index} className='relative'>
                <img src={link.img} alt="menu-banner" />
                <div className='category-banner-content'>
                  <span className='capitalize font-medium text-[15px]'>{link.sale}</span>
                  <h2 className='font-medium text-2xl capitalize'>{link.title}</h2>
                  <span className='category-menu-btn relative'>Shop Now</span>
                </div>
              </li>
              )}
            </ul>
          </li>
        </ul>
      </li>

      {/* Blog */}
      <li className='main_nav-link font-medium relative' onMouseEnter={() => setIsBlogMenuHidden(true)} onMouseLeave={() => setIsBlogMenuHidden(false)}>
        Blog <GoChevronDown />
        {<ul className={isBlogMenuHidden ? 'menu-displayed' : 'menu-hidden'}>
          {home_blog_Links.map((link, index) => <li key={index} className='menu-link'>{link}</li>)}
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
          <li className='shop-img border-l border-y-gray-300 pl-3'>
            <div className='mt-3'>
              <img src={shop_banner} alt="shop-banner" />
            </div>
            <div className='absolute left-8 bottom-14 text-white z-50 space-y-2'>
              <h2 className='text-xl'>New Collection</h2>
              <h1 className='text-3xl font-bold'>Sale 30% Off</h1>
              <button className='shop-btn'>Shop Now</button>
            </div>
          </li>
        </ul>
      </li>

      {/* Contact Us */}
      <li><button className='main_nav-link font-medium'>Contact Us</button></li>
      
      {/* Search Icon */}
      <li onClick={() => setSearchIcon(true)} className='main_nav-link'>
        <button>
          <TfiSearch className="w-5 h-5" />
        </button>
        <div className={`${!searchIcon ? "search-container-hidden" : "search-container-displayed"}`}>
          <input ref={searchIconRef} className='bg-transparent w-[60%] text-white border-b-2 border-white pb-2 outline-none placeholder:text-white' type="text" placeholder='Search' />
          <TfiSearch ref={iconRef} className="w-5 h-5 cursor-pointer hover:text-primary transition duration-300 text-white -ml-5 mb-3"/>
        </div>
        {searchIcon && <div className='fixed opacity-0 left-0 top-0 w-full h-full z-[900] bg-[#000] bg-opacity-70 cursor-auto flex items-center justify-center transition-all duration-500;'>
        </div>}
      </li>

      {/* Shopping Cart */}
      <ShoppingCart />
    </ul>
  )
}

export default BottomRightSide
