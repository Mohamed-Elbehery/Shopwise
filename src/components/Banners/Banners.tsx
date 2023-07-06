import { useState } from 'react';
import Banner from "./Banner"

const Banners: React.FC = () => {
  const [banner, setBanner] = useState<number>(0);

  return (
    <section>
      <Banner bannerNumber={banner} setBanner={setBanner} />
    </section>
  )
}

export default Banners
