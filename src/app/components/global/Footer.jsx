import {
    WhatsApp_Svg,
    Instagram_Svg,
    Facebook_Svg,
    Youtube_Svg,
} from "../svg-icons";

export default function Footer() {
    return (
        <footer className="bg-slate-900 text-[#e90388] w-full" id="contact-us">
            <div className="xl:max-w-[70rem] m-auto p-7">
                <div className="grid grid-cols-3 max-md:grid-cols-1 gap-10">
                    <div className="px-4 flex flex-col gap-6">
                        <h3 className="tracking-wider text-base leading-none font-semibold">
                            {"For Orders and Queries"}
                        </h3>
                        <form
                            action=""
                            className="flex flex-col justify-between h-full gap-2"
                        >
                            <div className="flex flex-col gap-1">
                                <input
                                    type="text"
                                    name="user_name"
                                    className="min-h-9 bg-transparent p-2 border-[1px] tracking-wider leading-3 text-sm text-gray-300 placeholder:text-gray-600"
                                    placeholder="Name"
                                />
                            </div>
                            <div className="flex flex-col gap-1">
                                <input
                                    type="email"
                                    name="user_email"
                                    className="min-h-9 bg-transparent p-2 border-[1px] tracking-wider leading-3 text-sm text-gray-300 placeholder:text-gray-600"
                                    placeholder="Email"
                                />
                            </div>
                            <div className="flex flex-col gap-1">
                                <textarea
                                    className="min-h-9 bg-transparent p-2 border-[1px] tracking-wider leading-3 text-sm text-gray-300 placeholder:text-gray-600"
                                    placeholder="Feedback"
                                ></textarea>
                            </div>
                            <button className="bg-[#e90388] text-white p-3 tracking-widest font-semibold leading-3 text-sm font-carattere">
                                {"Send"}
                            </button>
                        </form>
                    </div>
                    <div className="px-4 flex flex-col gap-2">
                        <h3 className="tracking-wider text-base leading-none font-semibold">
                            {"Contacts"}
                        </h3>
                        <div className="flex flex-col gap-6 items-start justify-between h-full">
                            <address className="text-gray-400 text-sm tracking-wider">
                                {"Sabapathi Fine Arts"}
                                <br />
                                {"4/725, I-6, PSK Nagar"}
                                <br />
                                {"Sivakasi, Tamilnadu - 626189"}
                                <br />
                                {"India."}
                                <br />
                                {"Phone : +91 8870342863"}
                            </address>
                            <nav className="flex gap-3 mb-3">
                                <a
                                    href="https://wa.me/+918870342863"
                                    target="_blank"
                                    className="flex items-center justify-center gap-2"
                                >
                                    <span className="bg-[#0d0029] group cursor-pointer hover:bg-[#e90388] border-2 border-transparent hover:border-2 hover:border-[#0d0029] rounded-full p-[8px] shadow-xl transition-all w-10 h-10 block">
                                        <WhatsApp_Svg
                                            className={"fill-white"}
                                        />
                                    </span>
                                    <span className="text-white text-sm tracking-wider">
                                        {"WhatsApp"}
                                    </span>
                                </a>
                                {/* <li className="bg-[#0d0029] group cursor-pointer hover:bg-[#e90388] border-2 border-transparent hover:border-2 hover:border-[#0d0029] rounded-full p-[8px] shadow-xl w-10 h-10 transition-all">
                                    <Instagram_Svg />
                                </li>
                                <li className="bg-[#0d0029] group cursor-pointer hover:bg-[#e90388] border-2 border-transparent hover:border-2 hover:border-[#0d0029] rounded-full p-[8px] shadow-xl w-10 h-10 transition-all">
                                    <Facebook_Svg />
                                </li>
                                <li className="bg-[#0d0029] group cursor-pointer hover:bg-[#e90388] border-2 border-transparent hover:border-2 hover:border-[#0d0029] rounded-full p-[8px] shadow-xl w-10 h-10 transition-all">
                                    <Youtube_Svg />
                                </li> */}
                            </nav>
                        </div>
                    </div>
                    {/* <div className="px-4 flex flex-col gap-3">
                        <h3 className="tracking-wider text-base leading-none font-semibold">
                            {"Find US On"}
                        </h3>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d352.43244153533857!2d77.81026110812232!3d9.455661697325956!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zOcKwMjcnMjAuMyJOIDc3wrA0OCczNy4wIkU!5e1!3m2!1sen!2sin!4v1728194815178!5m2!1sen!2sin"
                            width="auto"
                            height="auto"
                            allowfullscreen=""
                            loading="lazy"
                            referrerpolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div> */}
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
