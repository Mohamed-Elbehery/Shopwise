import { useState, useRef, useEffect } from 'react';
import ScrollToTopButton from "../ScrollToTopButton/ScrollToTopButton"
import BottomHeader from "./BottomHeader/BottomHeader"
import TopHeader from "./TopHeader/TopHeader"

const Header: React.FC = () => {
  const [scrollButtonHidden, setIsScrollButtonHiden] = useState<boolean>(false);
  const headerRef = useRef(null);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if(window.scrollY >= 150) {
        setIsScrollButtonHiden(true);
        headerRef.current.classList = ['bottom-header-displayed'];
      } else {
        headerRef.current.classList = ['bottom-header-hidden'];
        setIsScrollButtonHiden(false);
      }
    });
  }, [])

  return (
    <header className="flex flex-col items-center font-poppins">
      {/* Top Header */}
      <TopHeader /> 
      {/* Bottom Header */}
      <div ref={headerRef} className='bottom-header-hidden transition-all duration-500'>
        <BottomHeader />
      </div>
      {scrollButtonHidden && <ScrollToTopButton />}
    </header>
  )
}

export default Header
