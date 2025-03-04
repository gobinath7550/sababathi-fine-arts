export default function OurProcess() {
    return (
        <div className="bg-slate-900">
            <div className="xl:max-w-[70rem] m-auto p-10 pb-14">
                <h3 className="font-coinage-caps-kruger-gray text-center font-extrabold tracking-widest text-[#fa0029] text-xl">
                    {"Our Process"}
                </h3>
                <div className="grid grid-cols-3 grid-rows-1 max-lg:grid-rows-3 max-lg:grid-cols-1 mt-7 gap-6 text-xs">
                    <div className="w-full h-full text-green-500 rounded-full flex  items-center justify-start gap-4 border-[1px] border-green-500">
                        <div className="rounded-full p-2 flex items-center justify-center border-[#fa0029] border-[1px] scale-125 bg-slate-900">
                            <div className="w-10 h-10 relative after:content-[''] after:absolute after:inset-0 after:border-l-[1px] after:border-green-500 after:animate-spin after:rounded-full flex items-center justify-center rounded-full">
                                <span>{"1"}</span>
                            </div>
                        </div>
                        <div className="text-left tracking-wide capitalize p-2 text-xs sm:text-sm h-full w-full flex items-center justify-start">
                            <span>{"Share Your Ideas"}</span>
                        </div>
                    </div>
                    <div className="w-full h-full text-yellow-500 border-[1px] border-yellow-500 rounded-full flex max-lg:flex-row-reverse items-center justify-start gap-4">
                        <div className="rounded-full p-2 flex items-center justify-center border-[#fa0029] border-[1px] scale-125 bg-slate-900">
                            <div className="w-10 h-10 relative after:content-[''] after:absolute after:inset-0 after:border-l-[1px] after:border-green-500 after:animate-spin after:rounded-full flex items-center justify-center rounded-full">
                                <span>{"2"}</span>
                            </div>
                        </div>
                        <div className="text-left max-lg:text-right text-xs sm:text-sm tracking-wide capitalize p-2 h-full w-full flex items-center justify-start max-lg:justify-end">
                            <span>
                                {
                                    "will transform your ideas into captivating designs"
                                }
                            </span>
                        </div>
                    </div>
                    <div className="w-full h-full text-blue-500 border-[1px] border-blue-500 rounded-full flex  items-center justify-start gap-4">
                        <div className="rounded-full p-2 flex items-center justify-center border-[#fa0029] border-[1px] scale-125 bg-slate-900">
                            <div className="w-10 h-10 relative after:content-[''] after:absolute after:inset-0 after:border-l-[1px] after:border-green-500 after:animate-spin after:rounded-full flex items-center justify-center rounded-full">
                                <span>{"3"}</span>
                            </div>
                        </div>
                        <div className="text-left tracking-wide flex items-center justify-start p-2 text-xs sm:text-sm h-full w-full">
                            <span>
                                {
                                    "Will Bring Your Vision to Life With Superfine Printed Materials"
                                }
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
