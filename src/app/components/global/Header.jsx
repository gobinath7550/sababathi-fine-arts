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

const MainLogo = () => {
    return (
        <a href="/" className="overflow-hidden flex">
            <Image
                src="/images/main-logo.png"
                alt="G"
                width={55}
                height={55}
                className="object-cover"
                priority
            />
        </a>
    );
};

const NavLink = ({ href, title, onClick }) => {
    return (
        <a
            href={href}
            title={title}
            onClick={onClick}
            className="border-b-[1px] border-transparent hover:border-black transition-all text-[11px]"
        >
            <span className="uppercase">{title}</span>
        </a>
    );
};

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
        <header className="sticky top-0 w-full bg-white shadow-md z-40">
            <div
                ref={mobileMenuRef}
                className={
                    isOpenMobileMenu
                        ? "fixed bg-slate-900 z-50 shadow-2xl transition-all top-0 bottom-0 w-2/3"
                        : "fixed bg-slate-900 z-50 shadow-2xl -translate-x-[100%] top-0 bottom-0 w-2/3 transition-all"
                }
            >
                <div className="w-full p-4 flex flex-col gap-9">
                    <div className="flex w-full items-center justify-between mr-2">
                        <MainLogo />
                        <button
                            className="w-5 h-5 mr-3"
                            title="Mobile Menu Close"
                            onClick={() => setIsOpenMobileMenu(false)}
                        >
                            <Close className="fill-white stroke-none" />
                        </button>
                    </div>
                    <nav className="flex flex-col sm:hidden tracking-widest w-full text-sm font-bold text-white font-sans px-2 gap-2">
                        <NavLink href={"/"} title={"Home"} />
                        <NavLink
                            href={"#about-us"}
                            title={"About Us"}
                            onClick={(e) => handleScroll(e, "about-us")}
                        />
                        <NavLink
                            href={"#our-products"}
                            title={"Products"}
                            onClick={(e) => handleScroll(e, "our-products")}
                        />
                        <NavLink
                            href={"#contact-us"}
                            title={"Contact Us"}
                            onClick={(e) => handleScroll(e, "contact-us")}
                        />
                    </nav>
                    <ul className="flex gap-3 w-full px-1">
                        <li className="bg-[#0d0029] group cursor-pointer hover:bg-[#e90388] border-2 border-transparent hover:border-2 hover:border-[#0d0029] rounded-full p-[8px] shadow-xl w-10 h-10 transition-all flex">
                            <WhatsApp_Svg />
                        </li>
                        <li className="bg-[#0d0029] group cursor-pointer hover:bg-[#e90388] border-2 border-transparent hover:border-2 hover:border-[#0d0029] rounded-full p-[8px] shadow-xl w-10 h-10 transition-all flex">
                            <Instagram_Svg />
                        </li>
                        <li className="bg-[#0d0029] group cursor-pointer hover:bg-[#e90388] border-2 border-transparent hover:border-2 hover:border-[#0d0029] rounded-full p-[8px] shadow-xl w-10 h-10 transition-all flex">
                            <Facebook_Svg />
                        </li>
                        <li className="bg-[#0d0029] group cursor-pointer hover:bg-[#e90388] border-2 border-transparent hover:border-2 hover:border-[#0d0029] rounded-full p-[8px] shadow-xl w-10 h-10 transition-all flex">
                            <Youtube_Svg />
                        </li>
                    </ul>
                </div>
            </div>
            <div className="m-auto xl:max-w-[70rem] py-3">
                <div className="flex justify-between items-center max-xl:mx-4">
                    <div className="flex gap-2 items-center justify-center">
                        <MainLogo />
                        <div className="flex flex-col divide-y-[1px] divide-black tracking-widest">
                            <span className="font-bold text-[#e90388]">
                                {"Sabapathi Fine Arts"}
                            </span>
                            <span className="text-[11px] text-black px-[1.2px]">
                                {"sabapathifinearts@gmail.com"}
                            </span>
                        </div>
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
                    <nav className="flex max-sm:hidden tracking-widest items-center justify-center gap-5 text-sm font-bold text-black mr-7 font-sans">
                        <NavLink href={"/"} title={"Home"} />
                        <NavLink
                            href={"#about-us"}
                            title={"About Us"}
                            onClick={(e) => handleScroll(e, "about-us")}
                        />
                        <NavLink
                            href={"#our-products"}
                            title={"Products"}
                            onClick={(e) => handleScroll(e, "our-products")}
                        />
                        <NavLink
                            href={"#contact-us"}
                            title={"Contact Us"}
                            onClick={(e) => handleScroll(e, "contact-us")}
                        />
                    </nav>
                </div>
            </div>
        </header>
    );
}
