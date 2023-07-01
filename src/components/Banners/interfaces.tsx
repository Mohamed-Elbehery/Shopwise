export interface IBannerStates {
  bannerNumber: number,
  setBanner: React.Dispatch<React.SetStateAction<number>>
}

export interface IBanner {
  img: string,
  sale?: string,
  title: string,
}