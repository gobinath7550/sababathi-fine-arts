export default function AboutUs() {
    return (
        <div className="bg-white">
            <div className="xl:max-w-[70rem] m-auto p-10" id="about-us">
                <h3 className="font-carattere text-center font-extrabold leading-none tracking-widest text-[#e90388] text-xl border-b-[1px] border-gray-800 pb-1">
                    {"About US"}
                </h3>
                <p className="text-xs text-justify text-gray-800 mt-1 leading-6 indent-11">
                    {
                        "We have 30+ years of experience in supplying trademark labels of offset printing. Our company is situated in Sivakasi, a bustling industrial town in Tamilnadu. We provide high quality printing service in both papers and boards for trademark packaging requirements. We feel privileged for being able to provide service to wide range of customers all over India. Adapted to the change in technologies from hand-made drawings to computer-based designs; negative based plates to computer-based plates (CTP), thereby being in close touch with the technological developments."
                    }
                </p>
            </div>
        </div>
    );
}
