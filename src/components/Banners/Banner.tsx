import { GoChevronLeft, GoChevronRight } from 'react-icons/go';
import { bannersContent } from "../../constants"
import { IBanner, IBannerStates } from './interfaces';

const Banner: React.FC<IBannerStates> = ({ bannerNumber, setBanner }) => {
  const handleClick = (process: string) => {
    if (process == "+") {
      if(bannerNumber == 2) setBanner(() => 0);
      else setBanner((prevNum) => prevNum + 1);
    } else {
      if(bannerNumber == 0) setBanner(() => 2)
      else setBanner((prevNum) => prevNum - 1)
    }
  };

  const bannerData = (banner: IBanner, className: string, key: number) =>
  <div className={className} key={key}>
    <img src={banner.img} alt={`${banner.title} banner`} className='banner-img' />
    <div className="banner-content">
      <p>{banner.sale}&nbsp;</p>
      <h1>{banner.title}</h1>
      <button>Shop Now</button>
    </div>
  </div>

  return (
    <div className="relative banner h-[500px] group">
      {/* Banners */}
      {bannersContent.map((banner, index) => {
        if(index == bannerNumber) {
        return ( bannerData(banner, "active-banner", index) )
        } else {
          return ( bannerData(banner, "nonactive-banner", index) )
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
