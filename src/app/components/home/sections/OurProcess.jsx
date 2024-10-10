export default function OurProcess() {
    return (
        <div className="bg-slate-900">
            <div className="xl:max-w-[70rem] m-auto p-10 pb-14">
                <h3 className="font-carattere text-center font-extrabold tracking-widest text-[#e90388] text-xl">
                    {"Our Process"}
                </h3>
                <div className="grid grid-cols-3 grid-rows-1 max-sm:grid-rows-3 max-sm:grid-cols-1 mt-7 gap-6 text-xs">
                    <div className="w-full h-full text-green-500 rounded-full flex  items-center justify-start gap-4 border-[1px] border-green-500">
                        <div className="rounded-full p-2 flex items-center justify-center border-[#e90388] border-[1px] scale-125 bg-slate-900">
                            <div className="w-10 h-10 relative after:content-[''] after:absolute after:inset-0 after:border-l-[1px] after:border-green-500 after:animate-spin after:rounded-full flex items-center justify-center rounded-full">
                                <span>{"1"}</span>
                            </div>
                        </div>
                        <div className="text-left tracking-wide capitalize p-2">
                            {"Share Your Ideas"}
                        </div>
                    </div>
                    <div className="w-full h-full text-yellow-500 border-[1px] border-yellow-500 rounded-full flex max-sm:flex-row-reverse items-center justify-start gap-4">
                        <div className="rounded-full p-2 flex items-center justify-center border-[#e90388] border-[1px] scale-125 bg-slate-900">
                            <div className="w-10 h-10 relative after:content-[''] after:absolute after:inset-0 after:border-l-[1px] after:border-green-500 after:animate-spin after:rounded-full flex items-center justify-center rounded-full">
                                <span>{"2"}</span>
                            </div>
                        </div>
                        <div className="text-left max-sm:text-right tracking-wide capitalize p-2">
                            {
                                "will transform your ideas into captivating designs"
                            }
                        </div>
                    </div>
                    <div className="w-full h-full text-blue-500 border-[1px] border-blue-500 rounded-full flex  items-center justify-start gap-4">
                        <div className="rounded-full p-2 flex items-center justify-center border-[#e90388] border-[1px] scale-125 bg-slate-900">
                            <div className="w-10 h-10 relative after:content-[''] after:absolute after:inset-0 after:border-l-[1px] after:border-green-500 after:animate-spin after:rounded-full flex items-center justify-center rounded-full">
                                <span>{"3"}</span>
                            </div>
                        </div>
                        <div className="text-left tracking-wide p-2">
                            {
                                "Will Bring Your Vision to Life With Superfine Printed Materials"
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
