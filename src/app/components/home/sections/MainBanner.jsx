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

    const handleScroll = (event, targetId) => {
        event.preventDefault();

        const targetElement = document.getElementById(targetId);
        const headerHeight = document.querySelector("header").offsetHeight; // Get the header height

        if (targetElement) {
            const elementPosition =
                targetElement.getBoundingClientRect().top +
                window.pageYOffset -
                headerHeight;
            window.scrollTo({
                top: elementPosition,
                behavior: "smooth",
            });
        }
    };

    return (
        <div
            style={backgroundStyle}
            className="bg-cover w-full bg-scroll transition-all duration-1000"
        >
            <div className="bg-black/70 py-14 sm:py-20 md:py-32 flex flex-col items-center justify-center gap-5 max-sm:gap-0">
                <div className="xl:max-w-[70rem] m-auto p-7">
                    <div className="flex flex-col items-center justify-center gap-6">
                        <h2 className="text-[calc(100vw-92vw)] text-center leading-none text-white tracking-widest text-shadow font-['Carattere']">
                            {"Your "}
                            <span className="text-[#e90388]">
                                {"trusted partner"}
                            </span>
                            {" for all "}
                            <span className="text-[#e90388]">
                                {" printing needs"}
                            </span>
                        </h2>
                        <h1 className="font-extrabold text-xs sm:text-[0.975rem] text-center leading-5 text-white text-shadow tracking-widest px-8">
                            {
                                "Take your business to the next level with our top-quality printed labels."
                            }
                        </h1>
                        <div className="text-white flex items-center justify-center gap-3 sm:pt-5">
                            <a
                                onClick={(e) => handleScroll(e, "about-us")}
                                className="text-sm tracking-widest font-extrabold max-sm:text-[9px] leading-none border-2 border-white rounded-full p-3 px-5 hover:text-[#e90388] hover:border-[#e90388] transition-all cursor-pointer"
                            >
                                Read More
                            </a>
                            <a
                                href="/products"
                                className="text-sm tracking-widest font-extrabold max-sm:text-[9px] leading-none border-2 border-white rounded-full p-3 px-5 bg-[#e90388] cursor-pointer hover:bg-transparent transition-all"
                            >
                                View Products
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
