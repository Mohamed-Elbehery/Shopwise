import { useState, useEffect } from 'react';
import ScrollToTopButton from "../ScrollToTopButton/ScrollToTopButton"
import BottomHeader from "./BottomHeader/BottomHeader"
import TopHeader from "./TopHeader/TopHeader"

const Header: React.FC = () => {
  const [scrollButtonHidden, setIsScrollButtonHiden] = useState<boolean>(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if(window.scrollY >= 150) {
        setIsScrollButtonHiden(true);
      } else {
        setIsScrollButtonHiden(false);
      }
    });
  }, [])

  return (
    <header className="flex flex-col items-center font-poppins">
      {/* Top Header */}
      <TopHeader /> 
      {/* Bottom Header */}
      <BottomHeader />
      {scrollButtonHidden && <ScrollToTopButton />}
    </header>
  )
}

export default Header
