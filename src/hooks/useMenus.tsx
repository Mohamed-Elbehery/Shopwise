import { useState } from "react";

const useMenus = () => {
  const [isHomeMenuHidden, setIsHomeMenuHidden] = useState<boolean | null>(false);
  const [isPagesMenuHidden, setIsPagesMenuHidden] = useState<boolean | null>(false);
  const [isProductsMenuHidden, setIsProductsMenuHidden] = useState<boolean | null>(false);
  const [isBlogMenuHidden, setIsBlogMenuHidden] = useState<boolean | null>(false);
  const [isShopMenuHidden, setIsShopMenuHidden] = useState<boolean | null>(false);

  return { isHomeMenuHidden, setIsHomeMenuHidden , isPagesMenuHidden, setIsPagesMenuHidden
    , isProductsMenuHidden, setIsProductsMenuHidden, isBlogMenuHidden, setIsBlogMenuHidden
    , isShopMenuHidden, setIsShopMenuHidden }
}

export default useMenus
