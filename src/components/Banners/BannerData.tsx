import { IBannerData } from "./interfaces"

export const BannerData: React.FC<IBannerData> = ({ banner, className}) => {
  return (
    <div className={className}>
    <img src={banner.img} alt={`${banner.title} banner`} className='banner-img' />
    <div className="banner-content">
      <p>{banner.sale}&nbsp;</p>
      <h1>{banner.title}</h1>
      <button>Shop Now</button>
    </div>
  </div>
  )
}