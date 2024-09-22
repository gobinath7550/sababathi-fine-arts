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
    "/images/banner-images/banner-img-8.jpg",
    "/images/banner-images/banner-img-9.jpg",
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
      <div className="bg-black/50 max-sm:min-h-[20rem] min-h-[35rem] lg:min-h-[45rem] flex items-center justify-center">
        <div className="xl:max-w-[70rem] w-full m-auto p-7">
          <div className="flex flex-col items-center justify-center gap-2 mt-16">
            <h1 className="font-extrabold text-[calc(100vw-92vw)] xl:text-[94px] leading-none text-white tracking-widest uppercase text-shadow">
              {"Sababathi"}
            </h1>
            <h3 className="font-extrabold text-orange-100 mx-[2px] sm:mx-2 text-[calc(100vw-97vw)] xl:text-[44px] leading-none tracking-[0.2em] text-left flex justify-end">
              {"Fine Arts"}
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}
