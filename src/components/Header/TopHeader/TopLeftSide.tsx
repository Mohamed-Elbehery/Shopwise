import { useState } from 'react';
import { GoChevronDown } from 'react-icons/go';
import { TfiMobile } from 'react-icons/tfi';
import { eng, fn, us } from '../../../constants';

const LeftSide: React.FC = () => {
  const [isLangMenuHidden, setIsLangMenuHidden] = useState(false);
  const [isCurrencyMenuHidden, setIsCurrencyMenuHidden] = useState(false);
  const [language, setLanguage] = useState(
  <>
    <img src={eng} alt="eng-flag" className='rounded-full w-4 h-4' />
    English <GoChevronDown className="text-secondary_light" />
  </>
  );
  const [currency, setCurrency] = useState("USD");

  return (
    <ul className='flex items-center gap-4'>
      {/* Language */}
      <li className='header_list relative pl-3' onClick={() => setIsLangMenuHidden(!isLangMenuHidden)} >
        {language}
        {isLangMenuHidden && <ul className='absolute -left-2 bottom-[-120px] bg-white w-36 border z-40'>
          <li className='header_list p-2' onClick={() => setLanguage(<>
            <img src={eng} alt="eng-flag" className='rounded-full w-4 h-4' />
            English <GoChevronDown className="text-secondary_light" />
          </>)}>
            <img src={eng} alt="eng-flag" className='rounded-full w-4 h-4' />
            English
          </li>
          <li className='header_list p-2' onClick={() => setLanguage(<>
            <img src={fn} alt="eng-flag" className='rounded-full w-4 h-4' />
            France <GoChevronDown className="text-secondary_light" />
            </>)}>
            <img src={fn} alt="eng-flag" className='rounded-full w-4 h-4' />
            France
          </li>
          <li className='header_list p-2' onClick={() => setLanguage(<>
            <img src={us} alt="eng-flag" className='rounded-full w-4 h-4' />
            United States <GoChevronDown className="text-secondary_light" />
          </>)}>
            <img src={us} alt="eng-flag" className='rounded-full w-4 h-4' />
            United States
          </li>
        </ul>}
      </li>

      {/* Currency */}
      <li className='header_list relative' onClick={() => setIsCurrencyMenuHidden(!isCurrencyMenuHidden)}>
        {currency} <GoChevronDown className="text-secondary_light" />
        {isCurrencyMenuHidden && <ul className='absolute bg-white w-12 h-28 -left-[10px] -bottom-[122px] z-50 border border-gray flex items-center justify-center flex-col gap-3'>
          <li onClick={() => setCurrency("USD")}>USD</li>
          <li onClick={() => setCurrency("EUR")}>EUR</li>
          <li onClick={() => setCurrency("GBP")}>GBP</li>
        </ul>}
      </li>

      {/* Mobile Number */}
      <li className='mobile-number'>
        <TfiMobile className="w-4 h-4" /> 123-456-7890
      </li>
    </ul>
  )
}

export default LeftSide
