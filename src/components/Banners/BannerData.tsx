import { IBannerData } from "../../interfaces"

export const BannerData: React.FC<IBannerData> = ({ banner, className}) => {
  return (
    <div className={`${className} relative`}>
      <img src={banner.img} alt={`${banner.title} banner`} className='banner-img' />
      <div className="container absolute left-0 right-0 top-1/2 -translate-y-1/2">
        <div className="banner-content">
          <p>{banner.sale}&nbsp;</p>
          <h1>{banner.title}</h1>
          <button>Shop Now</button>
        </div>
      </div>
    </div>
  )
}