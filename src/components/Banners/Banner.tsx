import { GoChevronLeft, GoChevronRight } from 'react-icons/go';
import { bannersContent } from "../../constants"
import { IBannerStates } from '../../interfaces';
import useBannerSlider from '../../hooks/useBannerSlider';
import { BannerData } from './BannerData';

const Banner: React.FC<IBannerStates> = ({ bannerNumber, setBanner }) => {
  const { handleClick } = useBannerSlider(bannerNumber, setBanner);
  
  return (
    <div className="relative banner h-[500px] group">
      {/* Banners */}
      {bannersContent.map((banner, index) => {
        if(index == bannerNumber) {
        return ( <BannerData banner={banner} className="active-banner" key={index} />  )
        } else {
          return ( <BannerData banner={banner} className="nonactive-banner" key={index} /> )
      }
      })}
      {/* Arrows */}
      <button>
        <GoChevronLeft onClick={() => handleClick("-")} className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-white p-2 cursor-pointer hover:text-white hover:bg-primary transition-all duration-500 opacity-0 group-hover:opacity-100 z-20" />
        <GoChevronRight onClick={() => handleClick("+")} className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-white p-2 cursor-pointer hover:text-white hover:bg-primary transition-all duration-500 opacity-0 group-hover:opacity-100 z-20" />
      </button>
    </div>
  )
}

export default Banner
