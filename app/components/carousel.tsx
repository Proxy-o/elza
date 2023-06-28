import React from "react";
import Image from "next/image";
import { Splide, SplideSlide } from "@splidejs/react-splide";

function Carousel() {
  const options = {
    type: "loop",
    gap: "0rem",
    autoplay: true,
    pauseOnHover: false,
    resetProgress: false,
    interval: 5000,

    arrows: false,
  };
  return (
    <div>
      <Splide
        options={options}
        aria-label="My Favorite Images"
        className="border  h-full"
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
              className="object-cover  brightness-50"
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
              className="object-cover brightness-50"
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
              className="object-cover brightness-50"
            />
          </div>
        </SplideSlide>
      </Splide>
    </div>
  );
}

export default Carousel;
