import Image from "next/image";

export default function Visions() {
    return (
        <div className="bg-white">
            <div className="xl:max-w-[70rem] m-auto p-10 pb-14">
                <h3 className="font-coinage-caps-kruger-gray text-center font-extrabold tracking-widest text-[#fa0029] text-xl">
                    {"Our  Vision"}
                </h3>
                <div className="grid grid-cols-3 max-sm:grid-cols-1 max-sm:grid-rows-3 items-center justify-center text-sm mt-7 gap-10">
                    <div className="w-full h-full font-bold flex flex-col items-center justify-center border-[1px] border-[#b52806] gap-3 p-3 rounded-2xl">
                        <Image
                            src="/images/best-quality.png"
                            alt="G"
                            width={65}
                            height={65}
                            className="object-cover"
                            priority
                        />
                        <div className="rounded-e-full">
                            <h3 className="leading-none capitalize text-[#b52806] text-xs sm:text-[0.975rem]">
                                {"Best Quality"}
                            </h3>
                        </div>
                    </div>
                    <div className="w-full h-full font-bold flex flex-col items-center justify-center border-[1px] border-[#2a698a] gap-3 p-3 rounded-2xl">
                        <Image
                            src="/images/customer-centered-service.png"
                            alt="G"
                            width={65}
                            height={65}
                            className="object-cover"
                            priority
                        />
                        <div className="rounded-e-full">
                            <h3 className="leading-none capitalize text-[#2a698a] text-xs sm:text-[0.975rem]">
                                {"Customer centered service"}
                            </h3>
                        </div>
                    </div>
                    <div className="w-full h-full font-bold flex flex-col items-center justify-center border-[1px] border-[#f7ae3c] gap-3 p-3 rounded-2xl">
                        <Image
                            src="/images/on-time-delivery.png"
                            alt="G"
                            width={65}
                            height={65}
                            className="object-cover"
                            priority
                        />
                        <div className="rounded-e-full">
                            <h3 className="leading-none capitalize text-[#f7ae3c] text-xs sm:text-[0.975rem]">
                                {"On Time Delivery"}
                            </h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
