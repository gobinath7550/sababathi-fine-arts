import { WhatsApp_Svg, Call, Email } from "../svg-icons";

import GoogleForm from "./GoogleForm";

export default function Footer() {
    return (
        <footer className="bg-slate-900 text-[#e90388] w-full" id="contact-us">
            <div className="xl:max-w-[70rem] m-auto p-7">
                <div className="grid grid-cols-3 max-md:grid-cols-1 gap-10">
                    <div className="px-4 flex flex-col gap-6 md:col-span-2">
                        <h3 className="tracking-wider text-lg leading-none font-coinage-caps-kruger-gray font-semibold">
                            {"For Orders and Queries"}
                        </h3>
                        <GoogleForm />
                    </div>
                    <div className="px-4 flex flex-col gap-2">
                        <h3 className="font-coinage-caps-kruger-gray tracking-wider text-lg leading-none font-semibold">
                            {"Contacts"}
                        </h3>
                        <div className="flex flex-col gap-6 items-start justify-between h-full">
                            <address className="text-gray-400 text-xs sm:text-[0.975rem] leading-6 tracking-wider">
                                {"Sabapathi Fine Arts"}
                                <br />
                                {"4/725, I-6, PSK Nagar"}
                                <br />
                                {"Sivakasi, Tamilnadu - 626189"}
                                <br />
                                {"India."}
                                <a
                                    href="https://mail.google.com/mail/?view=cm&fs=1&to=sabapathifinearts@gmail.com"
                                    target="_blank"
                                    className="flex items-center justify-start gap-2 mt-1"
                                    aria-label="GMail"
                                >
                                    <span className="bg-[#0d0029] group cursor-pointer hover:bg-[#e90388] border-2 border-transparent hover:border-2 hover:border-[#0d0029] rounded-full p-[5px] shadow-xl transition-all w-8 h-8 block">
                                        <Email
                                            className={"fill-none stroke-white"}
                                        />
                                    </span>
                                    <span className="tracking-wider text-[12px]">
                                        {"sabapathifinearts@gmail.com"}
                                    </span>
                                </a>
                                <a
                                    href="https://wa.me/+918870342863"
                                    target="_blank"
                                    className="flex items-center justify-start gap-2 mt-1"
                                    aria-label="WhatsApp"
                                >
                                    <span className="bg-[#0d0029] group cursor-pointer hover:bg-[#e90388] border-2 border-transparent hover:border-2 hover:border-[#0d0029] rounded-full p-[5px] shadow-xl transition-all w-8 h-8 block">
                                        <WhatsApp_Svg
                                            className={"fill-white"}
                                        />
                                    </span>
                                    <span className="tracking-wider text-[12px]">
                                        {"+91 9498316221"}
                                    </span>
                                </a>
                                <a
                                    href="tel:9498316221"
                                    target="_blank"
                                    className="flex items-center justify-start gap-2 mt-1"
                                    aria-label="Mobile Number"
                                >
                                    <span className="bg-[#0d0029] group cursor-pointer hover:bg-[#e90388] border-2 border-transparent hover:border-2 hover:border-[#0d0029] rounded-full p-[5px] shadow-xl transition-all w-8 h-8 block">
                                        <Call className={"fill-white"} />
                                    </span>
                                    <span className="tracking-wider text-[12px]">
                                        {"+91 9498316221, +91 9443156003"}
                                    </span>
                                </a>
                            </address>
                        </div>
                    </div>
                </div>
            </div>
            <div className="xl:max-w-[70rem] m-auto my-4">
                <p className="text-center text-gray-400 text-xs tracking-wider">
                    {"Copyrights © Sabapathi Fine Arts"}
                </p>
            </div>
        </footer>
    );
}
