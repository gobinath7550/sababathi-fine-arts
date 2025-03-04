import Image from "next/image";
import { RightArrow } from "../../svg-icons/Svg";

export default function CollageBackground() {
    return (
        <div className="bg-white relative overflow-hidden" id="our-products">
            <div className="absolute inset-0">
                <div className="grid grid-cols-3 h-full">
                    <div className="col-span-2">
                        <Image
                            src="/images/products/burger-boxes.png"
                            alt="G"
                            width={360}
                            height={65}
                            className="object-cover w-full h-full"
                            priority
                        />
                    </div>
                    <div className="grid grid-rows-2">
                        <Image
                            src="/images/products/doctor-prescription.jpg"
                            alt="G"
                            width={360}
                            height={65}
                            className="object-cover w-full h-full"
                            priority
                        />
                        <Image
                            src="/images/products/shirt-box.jpeg"
                            alt="G"
                            width={360}
                            height={65}
                            className="object-cover w-full h-full"
                            priority
                        />
                    </div>
                </div>
            </div>
            <div className="relative z-10 flex flex-col items-center justify-center gap-5 max-sm:gap-0">
                <div className="xl:max-w-[70rem] m-auto p-10">
                    <div className="flex flex-col items-center justify-start gap-2 font-carattere bg-white/80 p-5 text-gray-900">
                        <h2 className="w-full tracking-wider text-lg max-sm:text-sm">
                            {
                                "We provide premium quality printing service for notebooks, food packaging labels and boxes, sweet and bakery boxes, pharma labels and boxes, and other trademark businesses"
                            }
                        </h2>
                        <div className="flex w-full items-center text-[#fa0029] pt-3 justify-start">
                            <a
                                href="/products"
                                className="tracking-wider cursor-pointer flex items-center justify-center gap-3 max-sm:gap-2 text-lg sm:text-xl"
                            >
                                <span className="leading-none block">
                                    {"View Products"}
                                </span>
                                <span className="w-8 h-8 max-sm:w-4 max-sm:h-4 block">
                                    <RightArrow className={"fill-[#fa0029]"} />
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
