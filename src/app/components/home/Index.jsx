import Image from "next/image";
import Header from "../global/Header";
import {
    WhatsApp_Svg,
    Instagram_Svg,
    Facebook_Svg,
    Youtube_Svg,
    Heart_Positive,
    Heart_Negative,
} from "../svg-icons";
import MainBenner from "./sections/MainBanner";
import OurProcess from "./sections/OurProcess";
import AboutUs from "./sections/AboutUs";
import Visions from "./sections/Visions";
import OurServices from "./sections/OurServices";
import Products from "./sections/Products";

export default function Home() {
    return (
        <div className="flex flex-col items-center justify-center">
            <Header />
            <main className="w-full">
                <MainBenner />
                <AboutUs />
                <OurProcess />
                <Visions />
                <OurServices />
                <Products />
                <div className="xl:max-w-[70rem] m-auto p-7 my-8 max-sm:my-4">
                    <h3 className="px-2 uppercase text-[20px] text-center text-black font-extrabold tracking-wide">
                        {"Testimonials"}
                    </h3>
                    <div className="sm:px-14 mt-14 bg-gray-300 p-4 rounded-md  max-sm:mt-6">
                        <div className="flex items-center justify-center sm:px-14">
                            <Image
                                src="/images/awards-left.png"
                                alt="G"
                                width={100}
                                height={135}
                                className="object-cover rotate-[14deg] max-md:w-[60px] max-md:h-[90px]"
                                priority
                            />
                            <div className="flex flex-col md:gap-2 max-md:gap-3">
                                <div className="flex items-center justify-center gap-2">
                                    <div className="border-2 border-slate-800 rounded-full">
                                        <Image
                                            src="/images/customer.jpg"
                                            alt="G"
                                            width={40}
                                            height={40}
                                            className="object-cover rounded-full"
                                            priority
                                        />
                                    </div>
                                    <div className="text-slate-800 leading-none flex flex-col">
                                        <span className="font-extrabold text-[16px]">
                                            {"Robert C"}
                                        </span>
                                        <span className="font-normal text-[11px] ml-[1px]">
                                            {"Canada, USA"}
                                        </span>
                                    </div>
                                </div>
                                <div className="flex items-center justify-center">
                                    <span className="flex w-5 h-5">
                                        <Heart_Positive />
                                    </span>
                                    <span className="flex w-5 h-5">
                                        <Heart_Positive />
                                    </span>
                                    <span className="flex w-5 h-5">
                                        <Heart_Positive />
                                    </span>
                                    <span className="flex w-5 h-5">
                                        <Heart_Positive />
                                    </span>
                                    <span className="flex w-5 h-5">
                                        <Heart_Negative />
                                    </span>
                                </div>
                                <p className="text-center max-md:hidden italic text-sm">
                                    {
                                        '"The room was smaller than expected, and the service at the restaurant was slow. However, the location is great, and the staff was friendly. There&apos;s definitely room for improvement".'
                                    }
                                </p>
                            </div>
                            <Image
                                src="/images/awards-right.png"
                                alt="G"
                                width={100}
                                height={135}
                                className="object-cover -rotate-[14deg] max-md:w-[60px] max-md:h-[90px]"
                                priority
                            />
                        </div>
                        <p className="text-center max-md:pt-6 md:hidden italic text-sm">
                            {
                                '"The room was smaller than expected, and the service at the restaurant was slow. However, the location is great, and the staff was friendly. There&apos;s definitely room for improvement".'
                            }
                        </p>
                    </div>
                </div>
            </main>
            <footer className="bg-slate-900 text-white w-full" id="contact-us">
                <div className="xl:max-w-[70rem] m-auto p-7 my-8">
                    <div className="grid grid-cols-2 max-md:grid-cols-1 gap-10">
                        <div className="">
                            <form
                                action=""
                                className="flex flex-col justify-between h-full gap-3"
                            >
                                <div className="flex flex-col gap-1">
                                    <input
                                        type="text"
                                        name="user_name"
                                        className="min-h-9 bg-transparent p-2 border-[1px] tracking-wider leading-3 text-sm placeholder:text-gray-600"
                                        placeholder="Name"
                                    />
                                </div>
                                <div className="flex flex-col gap-1">
                                    <input
                                        type="email"
                                        name="user_email"
                                        className="min-h-9 bg-transparent p-2 border-[1px] tracking-wider leading-3 text-sm placeholder:text-gray-600"
                                        placeholder="Email"
                                    />
                                </div>
                                <div className="flex flex-col gap-1">
                                    <textarea
                                        className="min-h-9 bg-transparent p-2 border-[1px] tracking-wider leading-3 text-sm placeholder:text-gray-600"
                                        placeholder="Feedback"
                                    ></textarea>
                                </div>
                                <button className="bg-blue-600 p-4 tracking-wider font-semibold leading-3 text-sm">
                                    {"Send"}
                                </button>
                            </form>
                        </div>
                        <div>
                            <h3 className="tracking-wider font-semibold leading-3 text-md uppercase">
                                {"Contacts"}
                            </h3>
                            <div className="flex flex-col items-start justify-between h-full">
                                <address className="text-gray-400 mt-3 text-sm tracking-wider">
                                    {"Sababathi Fne Arts Private Limited,"}{" "}
                                    <br />
                                    {"14, Vel Road,"}
                                    <br />
                                    {"Chennai - 600096. Tamilnadu. INDIA"}
                                    <br />
                                    {"Phone : +91-4562-220141, 221141"}
                                    <br />
                                    {"Fax : +91-4562-223141"}
                                    <br />
                                </address>
                                <ul className="flex gap-3 mb-3">
                                    <li className="bg-[#0d0029] group cursor-pointer hover:bg-blue-600 border-2 border-transparent hover:border-2 hover:border-[#0d0029] rounded-full p-[8px] shadow-xl w-10 h-10 transition-all">
                                        <WhatsApp_Svg />
                                    </li>
                                    <li className="bg-[#0d0029] group cursor-pointer hover:bg-blue-600 border-2 border-transparent hover:border-2 hover:border-[#0d0029] rounded-full p-[8px] shadow-xl w-10 h-10 transition-all">
                                        <Instagram_Svg />
                                    </li>
                                    <li className="bg-[#0d0029] group cursor-pointer hover:bg-blue-600 border-2 border-transparent hover:border-2 hover:border-[#0d0029] rounded-full p-[8px] shadow-xl w-10 h-10 transition-all">
                                        <Facebook_Svg />
                                    </li>
                                    <li className="bg-[#0d0029] group cursor-pointer hover:bg-blue-600 border-2 border-transparent hover:border-2 hover:border-[#0d0029] rounded-full p-[8px] shadow-xl w-10 h-10 transition-all">
                                        <Youtube_Svg />
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xl:max-w-[70rem] m-auto my-4">
                    <p className="text-center text-gray-400 text-sm tracking-wider">
                        {"Copyright © Sababathi Fine Arts"}
                    </p>
                </div>
            </footer>
        </div>
    );
}
