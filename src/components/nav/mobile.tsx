import { useEffect, useMemo, useRef } from "preact/hooks";

const toggleVisible = (nav: HTMLElement, visible?: boolean) => {
  const isVisible =
    typeof visible !== "undefined" ? visible : nav.classList.contains("max-h-screen");
  if (isVisible) {
    nav.classList.add("max-h-0");
    nav.classList.remove("max-h-screen");
    nav.classList.remove("outline");
    return;
  }
  nav.classList.remove("max-h-0");
  nav.classList.add("max-h-screen");
  nav.classList.add("outline");
};

const clickHandler = (e: Event, nav: HTMLElement) => {
  if (!nav) {
    console.log("No nav", nav);
    return;
  }
  if (!e.target || !("closest" in e.target) || typeof e.target.closest !== "function") {
    return;
  }
  const closest: HTMLElement | null = e.target.closest("#main_nav");
  if (closest) return;
  toggleVisible(nav, true);
};

export const MobileNav = () => {
  const button = useRef<HTMLButtonElement>(null);
  const nav = useMemo(() => {
    if (typeof document === "undefined") return null;
    return document.getElementById("nav-items");
  }, []);

  useEffect(() => {
    if (typeof document === "undefined") return;
    document.getRootNode().addEventListener("click", (e) => {
      if (!e || !nav) return;
      clickHandler(e, nav);
    });
  }, [nav]);

  return (
    <>
      <button
        type={"button"}
        ref={button}
        class={"lg:hidden cursor-pointer px-4 py-2"}
        onClick={() => {
          if (!nav) return;
          toggleVisible(nav);
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          className={"ml-auto"}
          width={30}
          height={30}
        >
          <title>Nav Menu Button</title>
          <g fill="#0F0F0F">
            <path d="M1 12a1 1 0 0 1 1-1h20a1 1 0 1 1 0 2H2a1 1 0 0 1-1-1M1 4a1 1 0 0 1 1-1h20a1 1 0 1 1 0 2H2a1 1 0 0 1-1-1M1 20a1 1 0 0 1 1-1h20a1 1 0 1 1 0 2H2a1 1 0 0 1-1-1" />
          </g>
        </svg>
      </button>
    </>
  );
};
