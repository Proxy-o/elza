"use client";

import React from "react";
import "@splidejs/react-splide/css";
import { GiFactory } from "react-icons/gi";
import Card from "../components/card/card";
import Carousel from "../components/carousel";
import Image from "next/image";
import Divider from "../components/divider/divider";
const Page = () => {
  const cards = [
    {
      icon: <GiFactory size={100} />,
      title: "titre",
      description:
        "lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor.",
    },
    {
      icon: <GiFactory size={100} />,
      title: "titre",
      description: "lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
    },
    {
      icon: <GiFactory size={100} />,
      title: "titre",
      description: "lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
    },
  ];
  return (
    <div className=" relative">
      <div>
        <Carousel />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3">
        {cards.map((card, index) => {
          return (
            <Card
              key={index}
              icon={card.icon}
              title={card.title}
              description={card.description}
            />
          );
        })}
      </div>
      <div className="h-96 bg-green-500 relative flex justify-center items-center">
        <div className="z-10 absolute flex justify-center items-center flex-col text-center p-12">
          <h1 className="font-bold text-red-600 text-3xl">à propos Elza</h1>
          <p className="text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in
            dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula. Sed
            auctor neque eu tellus rhoncus ut eleifend nibh porttitor.
          </p>
        </div>
        <Image
          src="/images/hands.webp"
          alt="Image 1"
          fill
          className="object-cover brightness-[0.2]"
        />
        <Divider />
      </div>
      <div className="h-[40rem] relative flex justify-center items-center">
        <div className=" m-2 bg-red-400 bg-opacity-25  z-10 absolute flex justify-center items-center flex-col text-center p-12">
          <h1 className="font-bold text-red-600 text-3xl">à propos Elza</h1>
          <ul className="list-disc	text-white">
            <li>lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
            <li>lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
            <li>lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
          </ul>
        </div>
        <Image
          src="/images/carousel/img1.webp"
          alt="Image 1"
          fill
          className="object-cover brightness-[0.5]"
        />
      </div>
    </div>
  );
};

export default Page;
