import React from "react";
import Card from "../components/card/card";
import { GiFactory } from "react-icons/gi";

export default function Page() {
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
  );
}
