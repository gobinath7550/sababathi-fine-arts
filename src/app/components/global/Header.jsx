import Image from "next/image";
import {
  MobileMenu,
  WhatsApp_Svg,
  Instagram_Svg,
  Facebook_Svg,
  Youtube_Svg,
  Close,
} from "../svg-icons";
import { useEffect, useState, useRef } from "react";

export default function Header() {
  const [isOpenMobileMenu, setIsOpenMobileMenu] = useState(false);
  const mobileMenuRef = useRef(null);

  const handleClickOutside = (event) => {
    if (
      mobileMenuRef.current &&
      !mobileMenuRef.current.contains(event.target)
    ) {
      setIsOpenMobileMenu(false);
    }
  };

  const handleScroll = (event, targetId) => {
    event.preventDefault();

    const targetElement = document.getElementById(targetId);
    const headerHeight = document.querySelector("header").offsetHeight; // Get the header height

    if (targetElement) {
      const elementPosition =
        targetElement.getBoundingClientRect().top +
        window.pageYOffset -
        headerHeight;
      setIsOpenMobileMenu(false);
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    if (isOpenMobileMenu) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpenMobileMenu]);

  return (
    <header className="fixed top-0 w-full bg-white shadow-md z-40">
      <div
        ref={mobileMenuRef}
        className={
          isOpenMobileMenu
            ? "fixed bg-white z-50 shadow-2xl transition-all top-0 bottom-0 w-2/3"
            : "fixed bg-white z-50 shadow-2xl -translate-x-[100%] top-0 bottom-0 w-2/3 transition-all"
        }
      >
        <div className="mt-3 w-full flex items-center justify-between">
          <div className="w-40 h-20 overflow-hidden flex">
            <Image
              src="/images/main-logo.png"
              alt="G"
              width={385}
              height={135}
              className="object-cover"
              priority
            />
          </div>
          <button
            className="w-7 h-7 mr-8"
            title="Mobile Menu Close"
            onClick={() => setIsOpenMobileMenu(false)}
          >
            <Close />
          </button>
        </div>
        <ul className="flex flex-col sm:hidden tracking-wide gap-3 p-8 py-5 text-sm font-bold text-black">
          <li>
            <a
              href="#"
              title="Home"
              className="border-b-2 border-transparent hover:border-black transition-all"
            >
              <span>{"Home"}</span>
            </a>
          </li>
          <li>
            <a
              href="#about-us"
              title="About Us"
              onClick={(e) => handleScroll(e, "about-us")}
              className="border-b-2 border-transparent hover:border-black transition-all"
            >
              <span>{"About Us"}</span>
            </a>
          </li>
          <li>
            <a
              href="#our-products"
              title="Products"
              onClick={(e) => handleScroll(e, "our-products")}
              className="border-b-2 border-transparent hover:border-black transition-all"
            >
              <span>{"Products"}</span>
            </a>
          </li>
          <li>
            <a
              href="#contact-us"
              title="Contact Us"
              onClick={(e) => handleScroll(e, "contact-us")}
              className="border-b-2 border-transparent hover:border-black transition-all"
            >
              <span>{"Contact Us"}</span>
            </a>
          </li>
        </ul>
        <ul className="flex gap-3 px-8 py-8">
          <li className="bg-[#0d0029] group cursor-pointer hover:bg-blue-600 border-2 border-transparent hover:border-2 hover:border-[#0d0029] rounded-full p-[8px] shadow-xl w-10 h-10 transition-all flex">
            <WhatsApp_Svg />
          </li>
          <li className="bg-[#0d0029] group cursor-pointer hover:bg-blue-600 border-2 border-transparent hover:border-2 hover:border-[#0d0029] rounded-full p-[8px] shadow-xl w-10 h-10 transition-all flex">
            <Instagram_Svg />
          </li>
          <li className="bg-[#0d0029] group cursor-pointer hover:bg-blue-600 border-2 border-transparent hover:border-2 hover:border-[#0d0029] rounded-full p-[8px] shadow-xl w-10 h-10 transition-all flex">
            <Facebook_Svg />
          </li>
          <li className="bg-[#0d0029] group cursor-pointer hover:bg-blue-600 border-2 border-transparent hover:border-2 hover:border-[#0d0029] rounded-full p-[8px] shadow-xl w-10 h-10 transition-all flex">
            <Youtube_Svg />
          </li>
        </ul>
      </div>
      <div className="m-auto xl:max-w-[70rem]">
        <div className="flex justify-between items-center max-xl:mx-4">
          <div className="w-40 h-20 overflow-hidden flex">
            <Image
              src="/images/main-logo.png"
              alt="G"
              width={385}
              height={135}
              className="object-cover"
              priority
            />
          </div>
          <div className="sm:hidden flex">
            <button
              className="w-10 h-10"
              title="Mobile Menu Open"
              onClick={() => setIsOpenMobileMenu(true)}
            >
              <MobileMenu />
            </button>
          </div>
          <ul className="flex max-sm:hidden tracking-wide items-center justify-center gap-5 text-sm font-bold text-black mr-7">
            <li>
              <a
                href="#"
                title="Home"
                className="border-b-2 border-transparent hover:border-black transition-all"
              >
                <span>{"Home"}</span>
              </a>
            </li>
            <li>
              <a
                href="#about-us"
                title="About Us"
                onClick={(e) => handleScroll(e, "about-us")}
                className="border-b-2 border-transparent hover:border-black transition-all"
              >
                <span>{"About Us"}</span>
              </a>
            </li>
            <li>
              <a
                href="#our-products"
                title="Products"
                onClick={(e) => handleScroll(e, "our-products")}
                className="border-b-2 border-transparent hover:border-black transition-all"
              >
                <span>{"Products"}</span>
              </a>
            </li>
            <li>
              <a
                href="#contact-us"
                title="Contact Us"
                onClick={(e) => handleScroll(e, "contact-us")}
                className="border-b-2 border-transparent hover:border-black transition-all"
              >
                <span>{"Contact Us"}</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
