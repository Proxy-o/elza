"use client";

import React from "react";
import "@splidejs/react-splide/css";
import { GiFactory } from "react-icons/gi";
import Card from "./components/card/card";
import Carousel from "./components/carousel";
import Image from "next/image";
import Divider from "./components/divider/divider";
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
      <div className="md:h-[40rem] h-[60rem] pt-10 md:pt-0  bg-green-500 relative flex flex-col  md:items-center">
        <div className="z-10  flex justify-center items-center flex-col text-center mt-6">
          <h1 className="font-bold text-[#F68D00] text-3xl">À propos Elza</h1>
          <p className="text-white md:text-xl ">
            L’entreprise Elza Power a été créé en 2022, dynamique, née d`une
            véritable passion pour la conception et la réalisation
            d‘installations électriques. Notre savoir-faire et nos compétences
            reposent sur une équipe opérationnelle, nos compétences terrain et
            des personnels expérimentés et motivés. Quel que soit votre projet,
            l’entreprise Elza Power vous accompagne, identifie l`ensemble de vos
            besoins et vous propose une installation personnalisée répondant à
            votre attente
          </p>
        </div>
        <div className=" h-5 text-center w-full md:grid grid-cols-3 mt-10 text-yellow-100 gap-3 z-10  ">
          <div className="mx-2 mb-6 shadow-2xl border rounded-lg bg-black-400 brightness-200  hover:scale-105 transition duration-200 cursor-pointer">
            <h1 className="border-b-2 py-6 bg-gradient-to-r from-red-600 to-orange-600 rounded-lg">Notre philosophie </h1>
            <p className="p-10">
              Réaliser des prestations de qualité dans une recherche constante
              de la satisfaction du client
            </p>
          </div>
          <div className="mx-2 mb-6 shadow-2xl border rounded-lg bg-black-400 brightness-200  hover:scale-105 transition duration-200 cursor-pointer">
            <h1 className="border-b-2 py-6 bg-gradient-to-r from-red-600 to-orange-600 rounded-lg">Notre philosophie </h1>
            <p className="p-10">
              Réaliser des prestations de qualité dans une recherche constante
              de la satisfaction du client
            </p>
          </div>
          <div className="mx-2 mb-6 shadow-2xl border rounded-lg bg-black-400 brightness-200  hover:scale-105 transition duration-200 cursor-pointer">
            <h1 className="border-b-2 py-6 bg-gradient-to-r from-red-600 to-orange-600 rounded-lg">Notre philosophie </h1>
            <p className="p-10">
              Réaliser des prestations de qualité dans une recherche constante
              de la satisfaction du client
            </p>
          </div>
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
        <div className=" m-2 bg-black bg-opacity-70  z-10 absolute flex justify-center items-center flex-col text-center p-12">
          <h1 className="font-bold text-[#F68D00] text-3xl">à propos Elza</h1>
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
