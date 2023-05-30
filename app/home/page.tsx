"use client";

import React from "react";
import Image from "next/image";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

const Page = () => {
  return (
    <div className="bg-green-600">
      <Splide aria-label="My Favorite Images">
        <SplideSlide>
          <div className="w-full md: bg-red-400">
            <Image src="/images/carousel/img1.webp" alt="Image 1" fill={true} />
          </div>
        </SplideSlide>
        <SplideSlide>
          <Image src="/images/carousel/img2.webp" alt="Image 2" fill={true} />
        </SplideSlide>
        <SplideSlide>
          <Image src="/images/carousel/img3.webp" alt="Image 2" fill={true} />
        </SplideSlide>
      </Splide>
    </div>
  );
};

export default Page;
