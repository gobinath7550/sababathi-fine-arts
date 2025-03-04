import Image from "next/image";
import {
    MobileMenu,
    WhatsApp_Svg,
    Instagram_Svg,
    Facebook_Svg,
    Youtube_Svg,
    Call,
    Email,
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
            className="border-b-[1px] border-transparent hover:border-black transition-all"
        >
            <span>{title}</span>
        </a>
    );
};

export default function Header({ urlPath }) {
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
                    <nav className="flex flex-col sm:hidden tracking-widest w-full text-sm font-bold text-white px-2 gap-2 font-coinage-caps-kruger-gray">
                        <NavLink href={"/"} title={"Home"} />
                        {urlPath != "/products" && (
                            <>
                                <NavLink
                                    href={"#about-us"}
                                    title={"About Us"}
                                    onClick={(e) => handleScroll(e, "about-us")}
                                />
                                <NavLink
                                    href={"#our-products"}
                                    title={"Products"}
                                    onClick={(e) =>
                                        handleScroll(e, "our-products")
                                    }
                                />
                            </>
                        )}
                        <NavLink
                            href={"#contact-us"}
                            title={"Contact Us"}
                            onClick={(e) => handleScroll(e, "contact-us")}
                        />
                    </nav>
                    <nav className="flex gap-3 w-full px-1">
                        <a
                            href="https://mail.google.com/mail/?view=cm&fs=1&to=sabapathifinearts@gmail.com"
                            target="_blank"
                            className="flex items-center justify-start gap-2"
                        >
                            <span className="bg-[#0d0029] group cursor-pointer hover:bg-[#fa0029] border-2 border-transparent hover:border-2 hover:border-[#0d0029] rounded-full p-[5px] shadow-xl transition-all w-8 h-8 block">
                                <Email className={"fill-none stroke-white"} />
                            </span>
                        </a>
                        <a
                            href="https://wa.me/+919498316221"
                            target="_blank"
                            className="flex items-center justify-start gap-2"
                        >
                            <span className="bg-[#0d0029] group cursor-pointer hover:bg-[#fa0029] border-2 border-transparent hover:border-2 hover:border-[#0d0029] rounded-full p-[5px] shadow-xl transition-all w-8 h-8 block">
                                <WhatsApp_Svg className={"fill-white"} />
                            </span>
                        </a>
                        <a
                            href="tel:9498316221"
                            target="_blank"
                            className="flex items-center justify-start gap-2"
                        >
                            <span className="bg-[#0d0029] group cursor-pointer hover:bg-[#fa0029] border-2 border-transparent hover:border-2 hover:border-[#0d0029] rounded-full p-[5px] shadow-xl transition-all w-8 h-8 block">
                                <Call className={"fill-white"} />
                            </span>
                        </a>
                    </nav>
                </div>
            </div>
            <div className="m-auto xl:max-w-[70rem] py-3">
                <div className="flex justify-between items-center max-xl:mx-4">
                    <div className="flex gap-2 items-center justify-center">
                        <MainLogo />
                        <div className="flex flex-col divide-y-[1px] divide-gray-800">
                            <span className="text-[#fa0029] font-['Carattere'] tracking-wide leading-none text-[1.5rem]">
                                {"Sabapathi Fine Arts"}
                            </span>
                            <span className="text-[11px] text-gray-800 font-bold tracking-widest px-[1.2px]">
                                {"Best quality offset printing"}
                            </span>
                        </div>
                    </div>
                    <div className="sm:hidden flex">
                        <button
                            className="w-10 h-10"
                            title="Mobile Menu Open"
                            onClick={() => setIsOpenMobileMenu(true)}
                        >
                            <MobileMenu className={"stroke-gray-800"} />
                        </button>
                    </div>
                    <nav className="flex max-sm:hidden tracking-widest items-center justify-center gap-5 text-sm font-bold text-black mr-7 font-coinage-caps-kruger-gray">
                        <NavLink href={"/"} title={"Home"} />
                        {urlPath != "/products" && (
                            <>
                                <NavLink
                                    href={"#about-us"}
                                    title={"About Us"}
                                    onClick={(e) => handleScroll(e, "about-us")}
                                />
                                <NavLink
                                    href={"#our-products"}
                                    title={"Products"}
                                    onClick={(e) =>
                                        handleScroll(e, "our-products")
                                    }
                                />
                            </>
                        )}
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
