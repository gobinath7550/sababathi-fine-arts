export default function OurProcess() {
    return (
        <div className="bg-slate-900">
            <div className="xl:max-w-[70rem] m-auto p-10 pb-14">
                <h3 className="font-bebas-neue-regular text-center font-extrabold tracking-widest text-[#e90388] text-xl">
                    {"Our Process"}
                </h3>
                <div className="flex max-sm:flex-col items-center justify-center text-sm mt-7 gap-10">
                    <div className="relative w-full font-bold text-green-500">
                        <div className="absolute -left-1.5 -top-3.5 bg-white rounded-full w-14 h-14 flex items-center justify-center border-[#e90388] border-[1px]">
                            <div className="w-10 h-10 relative after:content-[''] after:absolute after:inset-0 after:border-l-[1px] after:border-green-500 after:animate-spin after:rounded-full flex items-center justify-center rounded-full">
                                <span>{"1"}</span>
                            </div>
                        </div>
                        <div className="border-l-0 border-[1px] border-green-500 bg-white p-2 rounded-e-full">
                            <span className="leading-none block text-center tracking-widest">
                                {"Ideas"}
                            </span>
                        </div>
                    </div>
                    <div className="relative w-full max-sm:hidden font-bold text-yellow-500">
                        <div className="absolute -left-1.5 -top-3.5 bg-white rounded-full w-14 h-14 flex items-center justify-center border-[#e90388] border-[1px]">
                            <div className="w-10 h-10 relative after:content-[''] after:absolute after:inset-0 after:border-l-[1px] after:border-yellow-500 after:animate-spin after:rounded-full flex items-center justify-center rounded-full">
                                <span>{"2"}</span>
                            </div>
                        </div>
                        <div className="border-l-0 border-[1px] border-yellow-500 bg-white p-2 rounded-e-full">
                            <span className="leading-none block text-center tracking-widest">
                                {"Design"}
                            </span>
                        </div>
                    </div>
                    <div className="relative w-full sm:hidden font-bold text-yellow-500">
                        <div className="absolute -right-1.5 -top-3.5 bg-white rounded-full w-14 h-14 flex items-center justify-center border-[#e90388] border-[1px]">
                            <div className="w-10 h-10 relative after:content-[''] after:absolute after:inset-0 after:border-l-[1px] after:border-yellow-500 after:animate-spin after:rounded-full flex items-center justify-center rounded-full">
                                <span>{"2"}</span>
                            </div>
                        </div>
                        <div className="border-r-0 border-[1px] border-yellow-500 bg-white p-2 rounded-s-full ">
                            <span className="leading-none block text-center tracking-widest">
                                {"Design"}
                            </span>
                        </div>
                    </div>
                    <div className="relative w-full font-bold text-blue-500">
                        <div className="absolute -left-1.5 -top-3.5 bg-white rounded-full w-14 h-14 flex items-center justify-center border-[#e90388] border-[1px]">
                            <div className="w-10 h-10 relative after:content-[''] after:absolute after:inset-0 after:border-l-[1px] after:border-blue-500 after:animate-spin after:rounded-full flex items-center justify-center rounded-full">
                                <span>{"3"}</span>
                            </div>
                        </div>
                        <div className="border-l-0 border-[1px] border-blue-500 bg-white p-2 rounded-e-full">
                            <span className="leading-none block text-center tracking-widest">
                                {"Print"}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
