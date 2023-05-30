"use client";

import React from "react";
import Image from "next/image";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

const Page = () => {
  const options = {
    type: "loop",
    gap: "1rem",
    autoplay: false,
    pauseOnHover: true,
    resetProgress: false,
    interval: 3000,
    arrows: false,
  };
  return (
    <div className=" ">
      <Splide
        options={options}
        aria-label="My Favorite Images"
        className="border border-black h-full"
      >
        <SplideSlide>
          <div className="h-[30rem] md:h-[40rem] w-screen  flex ">
            <div className="bg-primary opacity-80 relative z-10 my-auto h-1/3 m-auto w-4/6 md:mx-0 md:w-4/6 flex">
              <h1 className="text-white  font-bold  m-auto text-center text-lg md:text-2xl">
                Une recherche constante de la satisfaction du client
              </h1>
            </div>
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
