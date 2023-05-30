"use client";

import React from "react";
import Image from "next/image";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

const Page = () => {
  const options = {
    type: "loop",
    gap: "1rem",
    autoplay: true,
    pauseOnHover: true,
    resetProgress: false,
    interval: 3000,
  };
  return (
    <div className="bg-black  h-[50rem]">
      <Splide
        options={options}
        aria-label="My Favorite Images"
        className="border border-black h-full"
      >
        <SplideSlide>
          <div className="h-[50rem] w-screen   ">
            <Image
              src="/images/carousel/img4.webp"
              alt="Image 1"
              fill
              className="rounded-md object-cover  blur-sm"
            />
          </div>
        </SplideSlide>
        <SplideSlide>
          <Image
            src="/images/carousel/img2.webp"
            alt="Image 2"
            fill={true}
            className="rounded-md object-cover"
          />
        </SplideSlide>
        <SplideSlide>
          <Image
            src="/images/carousel/img3.webp"
            alt="Image 2"
            fill={true}
            className="rounded-md object-cover"
          />
        </SplideSlide>
      </Splide>
    </div>
  );
};

export default Page;
