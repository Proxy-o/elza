"use client";

import React from "react";
import Image from "next/image";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { GiFactory } from "react-icons/gi";
import Card from "../components/card/card";

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
  const cards = [
    {
      icon: <GiFactory size={100}/>,
      title: "titre",
      description: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor.",
    },
    {
      icon: <GiFactory size={100}/>,
      title: "titre",
      description: "lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
    },
  ];
  return (
    <div className=" ">
      <Splide
        options={options}
        aria-label="My Favorite Images"
        className="border border-black h-full"
      >
        <SplideSlide>
          <div className="h-[30rem] md:h-[40rem] w-screen  flex justify-center items-center">
            <div className="relative z-10 text-white flex justify-center flex-col ">
              <h1 className="   m-auto text-center text-2xl md:text-5xl font-extrabold">
                Une recherche constante de la satisfaction du client
              </h1>
              <button className="bg-none text-center mt-20 border rounded-lg w-1/3 h-10 mx-auto">
                En savoir plus
              </button>
            </div>
            <Image
              src="/images/carousel/img4.webp"
              alt="Image 1"
              fill
              className="rounded-md object-cover  brightness-50"
            />
          </div>
        </SplideSlide>
        <SplideSlide>
          <div className="h-[30rem] md:h-[40rem] w-screen  flex justify-center items-center">
            <div className="relative z-10 text-white flex justify-center flex-col ">
              <h1 className="   m-auto text-center text-2xl md:text-5xl font-extrabold">
                Une recherche constante de la satisfaction du client
              </h1>
              <button className="bg-none text-center mt-20 border rounded-lg w-1/3 h-10 mx-auto">
                En savoir plus
              </button>
            </div>
            <Image
              src="/images/carousel/img2.webp"
              alt="Image 2"
              fill={true}
              className="rounded-md object-cover brightness-50"
            />
          </div>
        </SplideSlide>
        <SplideSlide>
          <div className="h-[30rem] md:h-[40rem] w-screen  flex justify-center items-center">
            <div className="relative z-10 text-white flex justify-center flex-col ">
              <h1 className="   m-auto text-center text-2xl md:text-5xl font-extrabold">
                Une recherche constante de la satisfaction du client
              </h1>
              <button className="bg-none text-center mt-20 border rounded-lg w-1/3 h-10 mx-auto">
                En savoir plus
              </button>
            </div>
            <Image
              src="/images/carousel/img3.webp"
              alt="Image 2"
              fill={true}
              className="rounded-md object-cover brightness-50"
            />
          </div>
        </SplideSlide>
      </Splide>
    

    <div className="flex ">
      {cards.map((card) => {
        return (
          <Card
            icon={card.icon}
            title={card.title}
            description={card.description}
          />
        );
      })}
    </div>
    </div>
  );
};

export default Page;
