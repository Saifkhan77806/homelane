import { useState, useEffect } from "react";

type ScreenSize = "sm" | "md" | "lg";

export function useScreenSize(): ScreenSize {
  const getSize = (): ScreenSize => {
    const width = window.innerWidth;
    if (width < 640) return "sm"; // Tailwind's sm breakpoint
    if (width < 1024) return "md"; // Tailwind's lg breakpoint
    return "lg";
  };

  const [size, setSize] = useState<ScreenSize>(getSize);

  useEffect(() => {
    const handleResize = () => {
      setSize(getSize());
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return size;
}
