import { useEffect, useState } from "preact/hooks";

export const useScroll = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    window.onscroll = () => {
      const hasScrolled = window.scrollY > 10;
      setScrolled(hasScrolled);
      const nav = document.getElementById("main_nav");
      if (hasScrolled) {
        nav?.classList.add("bg-white");
      } else {
        nav?.classList.remove("bg-white");
      }
    };
  }, []);

  return { scrolled };
};
