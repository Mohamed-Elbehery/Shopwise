import { useState, useEffect } from 'react';
import Banner from "./Banner"

const Banners: React.FC = () => {
  const [banner, setBanner] = useState<number>(+JSON.parse(localStorage.getItem('banner')) >= 0 ? +JSON.parse(localStorage.getItem('banner')) : 0);

  useEffect(() => {
    localStorage.setItem('banner', JSON.stringify(banner));
  }, [banner])

  return (
    <section>
      <Banner bannerNumber={banner} setBanner={setBanner} />
    </section>
  )
}

export default Banners
