import React, { useState, useEffect } from "react";
import SimpleImageSlider from "react-simple-image-slider";
import "./Slider.css";

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
  const desiredImageHeight = 560; // Set your desired image height

  return (
    <div>
      <SimpleImageSlider
        width={"100%"}
        height={sliderWidth < 1000 ? sliderWidth < 400 ? 100 : 200 : 560} // Use the desired image height
        images={images}
        showBullets={true}
        showNavs={true}
        autoPlay={true}
      />
    </div>
  );
};
