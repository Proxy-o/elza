"use client";

import React from "react";
import "@splidejs/react-splide/css";
import { GiFactory } from "react-icons/gi";
import Card from "../components/card/card";
import Carousel from "../components/carousel";

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
    <div className=" ">
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
    </div>
  );
};

export default Page;
