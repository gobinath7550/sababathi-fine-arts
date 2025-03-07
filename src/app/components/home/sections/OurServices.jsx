import Image from "next/image";

export default function OurServices() {
    return (
        <div className="bg-slate-900">
            <div className="xl:max-w-[70rem] m-auto p-10 pb-14">
                <h3 className="font-coinage-caps-kruger-gray text-center font-extrabold tracking-widest text-[#fa0029] text-xl">
                    {"Our Services"}
                </h3>
                <div className="grid grid-cols-3 max-sm:grid-cols-1 max-sm:grid-rows-5 items-center justify-center text-sm mt-7 gap-10">
                    <div className="w-full relative h-full max-h-[220px] font-bold">
                        <Image
                            src="/images/services/offset_printing.jpg"
                            alt="G"
                            width={360}
                            height={65}
                            className="object-cover rounded-md w-full h-full"
                            priority
                        />
                        <div className="absolute bottom-0 p-4 py-6 rounded-md bg-[#fa0029]/50 right-0 left-0">
                            <h3 className="leading-none capitalize text-white text-md font-extrabold tracking-widest text-xs sm:text-[0.975rem]">
                                {"Offset Printing"}
                            </h3>
                        </div>
                    </div>
                    <div className="w-full relative h-full max-h-[220px] font-bold">
                        <Image
                            src="/images/services/foils.jpg"
                            alt="G"
                            width={330}
                            height={65}
                            className="object-cover rounded-md w-full h-full"
                            priority
                        />
                        <div className="absolute bottom-0 p-4 py-6 rounded-md bg-[#fa0029]/40 right-0 left-0">
                            <h3 className="leading-none capitalize text-white text-md font-extrabold tracking-widest text-xs sm:text-[0.975rem]">
                                {"Embossing / Foils"}
                            </h3>
                        </div>
                    </div>
                    <div className="w-full relative h-full max-h-[220px] font-bold">
                        <Image
                            src="/images/services/uv-coating.jpg"
                            alt="G"
                            width={330}
                            height={65}
                            className="object-cover rounded-md w-full h-full"
                            priority
                        />
                        <div className="absolute bottom-0 p-4 py-6 rounded-md bg-[#fa0029]/40 right-0 left-0">
                            <h3 className="leading-none capitalize text-white text-md font-extrabold tracking-widest text-xs sm:text-[0.975rem]">
                                {"UV Coating"}
                            </h3>
                        </div>
                    </div>
                    <div className="w-full relative h-full max-h-[220px] font-bold">
                        <Image
                            src="/images/services/varnish.jpg"
                            alt="G"
                            width={330}
                            height={65}
                            className="object-cover rounded-md w-full h-full"
                            priority
                        />
                        <div className="absolute bottom-0 p-4 py-6 rounded-md bg-[#fa0029]/60 right-0 left-0">
                            <h3 className="leading-none capitalize text-white text-md font-extrabold tracking-widest text-xs sm:text-[0.975rem]">
                                {"Varnish Coating"}
                            </h3>
                        </div>
                    </div>
                    <div className="w-full relative h-full max-h-[220px] font-bold">
                        <Image
                            src="/images/services/lamination.jpg"
                            alt="G"
                            width={360}
                            height={65}
                            className="object-cover rounded-md w-full h-full"
                            priority
                        />
                        <div className="absolute bottom-0 p-4 py-6 rounded-md bg-[#fa0029]/50 right-0 left-0">
                            <h3 className="leading-none capitalize text-white text-md font-extrabold tracking-widest text-xs sm:text-[0.975rem]">
                                {"Lamination"}
                            </h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
