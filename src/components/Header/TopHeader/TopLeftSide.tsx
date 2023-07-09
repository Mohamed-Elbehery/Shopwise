import { useState, useRef, useEffect } from 'react';
import { GoChevronDown } from 'react-icons/go';
import { TfiMobile } from 'react-icons/tfi';
import { eng, fn, us } from '../../../constants';

const LeftSide: React.FC = () => {
  // Languages Menu
  const [isLangMenuHidden, setIsLangMenuHidden] = useState(false);
  const languagesRef = useRef(null);
  // Currencies Menu
  const [isCurrencyMenuHidden, setIsCurrencyMenuHidden] = useState(false);
  const currenciesRef = useRef(null);

  // Initial Value for Menus
  const [language, setLanguage] = useState(
  <>
    <img src={eng} alt="eng-flag" className='rounded-full menu-clickable w-4 h-4' />
    English <GoChevronDown className="text-secondary_light menu-clickable" />
  </>
  );
  const [currency, setCurrency] = useState("USD");

  // On Click Outside
  useEffect(() => {
    const handler = (e) => {      
      if(e.target !== languagesRef.current && e.target !== currenciesRef.current && e.target.classList[1] !== 'menu-clickable') {
        setIsCurrencyMenuHidden(false);
        setIsLangMenuHidden(false);
      }
    }

    document.addEventListener('mousedown', handler);

    return () => {
      document.removeEventListener('mousedown' ,handler, true);
      document.removeEventListener('mousedown' ,handler, false);
    }
  }, []);

  return (
    <ul className='flex items-center gap-4 max-[440px]:gap-2'>
      {/* Language */}
      <li ref={languagesRef} onClick={() => setIsLangMenuHidden(!isLangMenuHidden)} >
        <button className='header_list menu-clickable menu-clickable relative pl-3'>
        {language}
        <ul className={`${!isLangMenuHidden ? "menu-language-hidden" : "menu-language-displayed"} menu-clickable`}>
          <li className='header_list menu-clickable p-2' onClick={() => setLanguage(<>
            <img src={eng} alt="eng-flag" className='rounded-full menu-clickable w-4 h-4' />
            English <GoChevronDown className="text-secondary_light menu-clickable" />
          </>)}>
            <img src={eng} alt="eng-flag" className='rounded-full menu-clickable w-4 h-4' />
            English
          </li>
          <li className='header_list menu-clickable p-2' onClick={() => setLanguage(<>
            <img src={fn} alt="eng-flag" className='rounded-full menu-clickable w-4 h-4' />
            France <GoChevronDown className="text-secondary_light menu-clickable" />
            </>)}>
            <img src={fn} alt="eng-flag" className='rounded-full w-4 h-4' />
            France
          </li>
          <li className='header_list menu-clickable p-2' onClick={() => setLanguage(<>
            <img src={us} alt="eng-flag" className='rounded-full menu-clickable w-4 h-4' />
            United States <GoChevronDown className="text-secondary_light menu-clickable" />
          </>)}>
            <img src={us} alt="eng-flag" className='rounded-full menu-clickable w-4 h-4' />
            United States
          </li>
        </ul>
        </button>
      </li>

      {/* Currency */}
      <li ref={currenciesRef} onClick={() => setIsCurrencyMenuHidden(!isCurrencyMenuHidden)}>
        <button className='header_list menu-clickable relative'>
          {currency} <GoChevronDown className="text-secondary_light menu-clickable" />
          <ul className={`${!isCurrencyMenuHidden ? "menu-currency-hidden" : "menu-currency-displayed"} menu-clickable`}>
            <li className='text-base menu-clickable' onClick={() => setCurrency("USD")}>USD</li>
            <li className='text-base menu-clickable' onClick={() => setCurrency("EUR")}>EUR</li>
            <li className='text-base menu-clickable' onClick={() => setCurrency("GBP")}>GBP</li>
          </ul>
        </button>
      </li>

      {/* Mobile Number */}
      <li className='mobile-number'>
        <TfiMobile className="w-4 h-4" /> 123-456-7890
      </li>
    </ul>
  )
}

export default LeftSide
