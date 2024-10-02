import { useEffect, useState } from "react";

export default function MainBenner() {
    const [images, setImages] = useState([]);
    const [currentImage, setCurrentImage] = useState(
        "/images/banner-images/banner-img-1.jpg"
    );
    const imageUrls = [
        "/images/banner-images/banner-img-2.jpg",
        "/images/banner-images/banner-img-3.jpg",
        "/images/banner-images/banner-img-4.jpg",
        "/images/banner-images/banner-img-5.jpg",
        "/images/banner-images/banner-img-6.jpg",
        "/images/banner-images/banner-img-7.jpg",
    ];

    useEffect(() => {
        // Preload images
        const preloadImages = async () => {
            const loadedImages = await Promise.all(
                imageUrls.map(
                    (url) =>
                        new Promise((resolve) => {
                            const img = new Image();
                            img.src = url;
                            img.onload = () => resolve(img.src); // Resolve the image source when loaded
                        })
                )
            );
            setImages(loadedImages);
        };

        preloadImages();

        let imageIndex = 0;
        const interval = setInterval(() => {
            setCurrentImage(images[imageIndex]);
            imageIndex = (imageIndex + 1) % images.length; // Loop through images
        }, 2000);
        return () => clearInterval(interval);
    }, [images.length]);

    const backgroundStyle = {
        backgroundImage: `url(${currentImage})`,
    };

    return (
        <div
            style={backgroundStyle}
            className="bg-cover w-full bg-scroll transition-all duration-1000"
        >
            <div className="bg-black/70 py-14 sm:py-20 md:py-32 flex flex-col items-center justify-center gap-5 max-sm:gap-0">
                <div className="xl:max-w-[70rem] m-auto p-7">
                    <div className="flex flex-col items-center justify-center gap-4">
                        <h1 className="font-extrabold text-[calc(100vw-93vw)] text-center leading-none text-white uppercase tracking-widest text-shadow font-bebas-neue-regular">
                            {"Your "}
                            <span className="text-[#e90388]">{"Vision"}</span>
                            {", Our "}
                            <span className="text-[#e90388]">{"Ink"}</span>
                        </h1>
                        <h1 className="font-extrabold text-sm max-sm:text-xs text-center leading-none text-white  text-shadow uppercase tracking-[0.2em]">
                            {"We’re here to make your print dreams a reality."}
                        </h1>
                    </div>
                </div>
                <div className="text-white flex items-center justify-center">
                    <a className="tracking-[0.2em] text-[11px] max-sm:text-[9px] leading-none border-[1px] border-white rounded-full p-3 px-5 hover:bg-[#e90388] uppercase cursor-pointer">
                        Read More
                    </a>
                </div>
            </div>
        </div>
    );
}
