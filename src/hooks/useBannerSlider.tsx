import { useEffect, useCallback } from 'react';

const useBannerSlider= (bannerNumber:number, setBanner: React.Dispatch<React.SetStateAction<number>>) => {
  const handleClick = useCallback((operation: string) => {
    if (operation == "+") {
      if(bannerNumber == 2) {
        setBanner(() => 0);
      }
      else {
        setBanner((prevNum) => prevNum + 1);
      }
    } else {
      if(bannerNumber == 0) {
        setBanner(() => 2);
      }
      else {
        setBanner((prevNum) => prevNum - 1);
      }
    }
  },[bannerNumber, setBanner]
)

useEffect(() => {
  const timer = setInterval(() => {
    handleClick("+");
  }, 7000)

  return () => clearInterval(timer);
}, [handleClick])

return { handleClick };
}

export default useBannerSlider
