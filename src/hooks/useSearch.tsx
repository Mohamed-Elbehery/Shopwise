import { useEffect, useRef, useState } from 'react';


const useSearch = () => {
  // For Mobile Navigation Only
  const [isMenuOpened, setIsMenuOpened] = useState(false);

  // For Both Desktop and Mobile Navigation
  const [searchIcon, setSearchIcon] = useState<boolean>(false);
  const [slideRightContainer, setSlideRightContainer] = useState<number>(0);
  const searchIconRef = useRef(null);
  const iconRef = useRef(null);

  useEffect(() => {
    const handler = (e) => {
      if(e.target.classList.value == "search-container-displayed") {
        setSearchIcon(false);
        setSlideRightContainer(2);
      }
    }

    document.addEventListener('click', handler);

    return () => {
      document.removeEventListener('click', handler, false);
      document.removeEventListener('click', handler, true);
    }
  }, []);

  return { searchIcon, setSearchIcon, searchIconRef, iconRef, isMenuOpened, setIsMenuOpened, slideRightContainer, setSlideRightContainer };
}

export default useSearch
