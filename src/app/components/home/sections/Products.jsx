import Image from "next/image";

export default function Products() {
    return (
        <div className="bg-white">
            <div className="xl:max-w-[70rem] m-auto p-10 pb-14">
                <h3 className="font-bebas-neue-regular text-center font-extrabold tracking-widest text-[#e90388] text-xl">
                    {"Our Products"}
                </h3>
                <div className="grid grid-cols-3 max-sm:grid-cols-1 max-sm:grid-rows-5 items-center justify-center text-sm mt-7 gap-10">
                    <div className="w-full h-full flex flex-col gap-4 items-center justify-between font-bold shadow-xl p-5 rounded-md bg-white border-2">
                        <div className="w-fit h-fit">
                            <Image
                                src="/images/products/burger-boxes.png"
                                alt="G"
                                width={360}
                                height={65}
                                className="object-cover w-full h-full"
                                priority
                            />
                        </div>
                        <div className="w-full">
                            <h3 className="leading-none capitalize text-[16px] text-slate-600 font-extrabold">
                                {"Burger Boxes"}
                            </h3>
                        </div>
                    </div>
                    <div className="w-full h-full flex flex-col gap-4 items-center justify-between font-bold shadow-xl p-5 rounded-md bg-white border-2">
                        <div className="w-fit h-fit">
                            <Image
                                src="/images/products/doctor-prescription.jpg"
                                alt="G"
                                width={360}
                                height={65}
                                className="object-cover w-full h-full"
                                priority
                            />
                        </div>
                        <div className="w-full">
                            <h3 className="leading-none capitalize text-[16px] text-slate-600 font-extrabold">
                                {"Doctor prescription pad"}
                            </h3>
                        </div>
                    </div>
                    <div className="w-full h-full flex flex-col gap-4 items-center justify-between font-bold shadow-xl p-5 rounded-md bg-white border-2">
                        <div className="w-fit h-fit">
                            <Image
                                src="/images/products/hospital-report.jpg"
                                alt="G"
                                width={360}
                                height={65}
                                className="object-cover w-full h-full"
                                priority
                            />
                        </div>
                        <div className="w-full">
                            <h3 className="leading-none capitalize text-[16px] text-slate-600 font-extrabold">
                                {"Medical Report"}
                            </h3>
                        </div>
                    </div>
                    <div className="w-full h-full flex flex-col gap-4 items-center justify-between font-bold shadow-xl p-5 rounded-md bg-white border-2">
                        <div className="w-fit h-fit">
                            <Image
                                src="/images/products/shirt-box.jpeg"
                                alt="G"
                                width={360}
                                height={65}
                                className="object-cover w-full h-full"
                                priority
                            />
                        </div>
                        <div className="w-full">
                            <h3 className="leading-none capitalize text-[16px] text-slate-600 font-extrabold">
                                {"Shirt boxes"}
                            </h3>
                        </div>
                    </div>
                    <div className="w-full h-full flex flex-col gap-4 items-center justify-between font-bold shadow-xl p-5 rounded-md bg-white border-2">
                        <div className="w-fit h-fit">
                            <Image
                                src="/images/products/sweet-box.jpg"
                                alt="G"
                                width={360}
                                height={65}
                                className="object-cover w-full h-full"
                                priority
                            />
                        </div>
                        <div className="w-full">
                            <h3 className="leading-none capitalize text-[16px] text-slate-600 font-extrabold">
                                {"Sweet boxes"}
                            </h3>
                        </div>
                    </div>
                    <div className="w-full h-full flex flex-col gap-4 items-center justify-between font-bold shadow-xl p-5 rounded-md bg-white border-2">
                        <div className="w-fit h-fit">
                            <Image
                                src="/images/products/asafoetida-box.jpg"
                                alt="G"
                                width={360}
                                height={65}
                                className="object-cover w-full h-full"
                                priority
                            />
                        </div>
                        <div className="w-full">
                            <h3 className="leading-none capitalize text-[16px] text-slate-600 font-extrabold">
                                {"Asafoetida Boxes"}
                            </h3>
                        </div>
                    </div>
                    <div className="w-full h-full flex flex-col gap-4 items-center justify-between font-bold shadow-xl p-5 rounded-md bg-white border-2">
                        <div className="w-fit h-fit">
                            <Image
                                src="/images/products/asafoetida-label.jpg"
                                alt="G"
                                width={360}
                                height={65}
                                className="object-cover w-full h-full"
                                priority
                            />
                        </div>
                        <div className="w-full">
                            <h3 className="leading-none capitalize text-[16px] text-slate-600 font-extrabold">
                                {"Asafoetida Labels"}
                            </h3>
                        </div>
                    </div>
                    <div className="w-full h-full flex flex-col gap-4 items-center justify-between font-bold shadow-xl p-5 rounded-md bg-white border-2">
                        <div className="w-fit h-fit">
                            <Image
                                src="/images/products/bidi-ticket-label.jpg"
                                alt="G"
                                width={360}
                                height={65}
                                className="object-cover w-full h-full"
                                priority
                            />
                        </div>
                        <div className="w-full">
                            <h3 className="leading-none capitalize text-[16px] text-slate-600 font-extrabold">
                                {"Bidi Ticket Labels"}
                            </h3>
                        </div>
                    </div>
                    <div className="w-full h-full flex flex-col gap-4 items-center justify-between font-bold shadow-xl p-5 rounded-md bg-white border-2">
                        <div className="w-fit h-fit">
                            <Image
                                src="/images/products/bidi-bundle-wrapper.jpg"
                                alt="G"
                                width={360}
                                height={65}
                                className="object-cover w-full h-full"
                                priority
                            />
                        </div>
                        <div className="w-full">
                            <h3 className="leading-none capitalize text-[16px] text-slate-600 font-extrabold">
                                {"Bidi Bundle Wrapper"}
                            </h3>
                        </div>
                    </div>
                    <div className="w-full h-full flex flex-col gap-4 items-center justify-between font-bold shadow-xl p-5 rounded-md bg-white border-2">
                        <div className="w-fit h-fit">
                            <Image
                                src="/images/products/bidi-kattu-label.jpg"
                                alt="G"
                                width={360}
                                height={65}
                                className="object-cover w-full h-full"
                                priority
                            />
                        </div>
                        <div className="w-full">
                            <h3 className="leading-none capitalize text-[16px] text-slate-600 font-extrabold">
                                {"Bidi Kattu Labels"}
                            </h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
