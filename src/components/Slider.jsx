import React, { useState, useEffect } from "react";
import SimpleImageSlider from "react-simple-image-slider";

const images = [
  { url: "https://hypefly-assets.s3.ap-south-1.amazonaws.com/media/collections/YEEZY_COLLECTION_BANNER.jpg" },
  { url: "https://hypefly-assets.s3.ap-south-1.amazonaws.com/media/carousel_images/PANDA_DUNK_ALL_TIME.jpg" },
  { url: "https://hypefly-assets.s3.ap-south-1.amazonaws.com/media/collections/YEEZY_COLLECTION_BANNER.jpg" },
  { url: "https://hypefly-assets.s3.ap-south-1.amazonaws.com/media/carousel_images/58_SHOP_NOW.jpg" },
  { url: "https://hypefly-assets.s3.ap-south-1.amazonaws.com/media/collections/YEEZY_COLLECTION_BANNER.jpg" },
  { url: "https://hypefly-assets.s3.ap-south-1.amazonaws.com/media/carousel_images/PANDA_DUNK_ALL_TIME.jpg" },
  { url: "https://hypefly-assets.s3.ap-south-1.amazonaws.com/media/carousel_images/58_SHOP_NOW.jpg" },
];

export const Slider = () => {
  const [sliderWidth, setSliderWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setSliderWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Calculate the aspect ratio of the images
  const imageAspectRatio = 604 / 1024; // Assuming a standard width for aspect ratio calculations

  return (
    <div>
      <SimpleImageSlider
        width={"100%"}
        height={sliderWidth * imageAspectRatio} // Adjust the height based on aspect ratio
        images={images}
        showBullets={true}
        showNavs={true}
        autoPlay={true}
      />
    </div>
  );
};
