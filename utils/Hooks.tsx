import { useEffect, useState } from "react";

export const useMobile = () => {
  const [isMobile, setMobile] = useState<boolean>(false);

  useEffect(() => {
    const updateSize = () => {
      if (window.innerWidth < 1024) {
        setMobile(true);
      } else setMobile(false);
    };

    window.addEventListener("resize", updateSize);    

    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return isMobile;
};
