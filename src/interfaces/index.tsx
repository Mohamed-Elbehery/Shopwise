//! Banner
export interface IBanner {
  img: string,
  title: string,
  sale?: string,
  order?: number,
}

export interface IBannerStates {
  bannerNumber: number,
  setBanner: React.Dispatch<React.SetStateAction<number>>
}

export interface IBannerData {
  banner: IBanner,
  className: string,
}

export interface IProduct {
  id?: number,
  title: string,
  price: number,
  description: string,
  category: string,
  image: string,
  rating: {
    rate: number,
    count: number
  }
}