import Image from "next/image";
import React from "react";
import { GiElectric } from "react-icons/gi";
import { LiaScrewdriverSolid } from "react-icons/lia";
import { PiPlugChargingLight } from "react-icons/pi";

export default function Page() {
  return (
    <>
      <div className=" grid grid-cols-1 gap-4 bg-white pt-28 pb-20">
        <h1 className="text-primary w-full text-3xl font-bold text-center">
          Activités industrielles{" "}
        </h1>
        <div className="md:h-96 md:grid md:grid-cols-3 mx-11 border-1 mt-10">
          <div className="  relative ">
            <Image
              src="/images/carousel/img1.webp"
              fill
              alt="image"
              className="object-cover rounded-lg"
            />
            <svg
              className="invisible md:visible md:absolute bottom-0 right-0 h-96  z-[40]"
              width="60"
              height="1000"
              viewBox="0 0 60 1000"
              fill="#f9f9f9"
              preserveAspectRatio="none"
            >
              <g clip-path="url(#clip0)">
                <path
                  d="M85.5 1079.95C43.7072 966.929 19.9593 852.301 14.5 737.24C8 600.336 29.872 512.409 41.5 424.739C59.279 290.7 60.81 99.3082 -16.5 -142.448H85.5L85.5 1079.95Z"
                  fill="#f9f9f9"
                ></path>
              </g>
              <defs>
                <clipPath id="clip0">
                  <rect
                    width="1000"
                    height="60"
                    fill="#f9f9f9"
                    transform="translate(0 1000) rotate(-90)"
                  ></rect>
                </clipPath>
              </defs>
            </svg>
          </div>
          <div className="md:col-span-2">
            <div className="flex text-primary justify-end border-b-2 w-1/3 ml-auto border-primary">
              <GiElectric size={30} />
              <LiaScrewdriverSolid className="" size={30} />
              <PiPlugChargingLight size={30} />
            </div>
            <p className=" text-center md:text-left text-lg p-4  flex items-center h-full">
              Chez Elza Power, notre domaine d&apos;expertise se concentre sur
              les activités du courant fort et du courant faible. Forts de notre
              solide expérience, nous sommes en mesure d&apos;entreprendre des
              projets variés, couvrant les secteurs de l&apos;industrie, du
              tertiaire et des unités de production. Nous sommes spécialisés
              dans l&apos;étude approfondie, le dimensionnement précis et le
              câblage complet de tableaux de distribution et de coffrets de
              régulation, en respectant rigoureusement les normes de l&apos;art
              industriel.
            </p>
          </div>
        </div>
        <div className="md:h-96 md:grid md:grid-cols-3 mx-11 border-1 mt-10">
          <div className="md:col-span-2">
            <div className="flex text-primary justify-end border-b-2 w-1/3  border-primary">
              <GiElectric size={30} />
              <LiaScrewdriverSolid className="" size={30} />
              <PiPlugChargingLight size={30} />
            </div>
            <p className=" text-center md:text-left text-lg p-4  flex items-center h-full">
              En ce qui concerne la distribution HTA (Haute Tension Aérienne),
              nous excellons dans la construction de postes de transformations
              HTA/BT 20000 ; 22000/400V, ainsi que dans l&apos;établissement de
              réseaux HTA/BT. De plus, nous prenons en charge la distribution de
              courants forts jusqu&apos;aux tableaux généraux basse tension.
            </p>
          </div>
          <div className="  relative ">
            <Image
              src="/images/carousel/img2.webp"
              fill
              alt="image"
              className="object-cover rounded-lg"
            />
            <svg
              className="invisible md:visible md:absolute bottom-0 rotate-180 h-96  z-[40]"
              width="60"
              height="1000"
              viewBox="0 0 60 1000"
              fill="#f9f9f9"
              preserveAspectRatio="none"
            >
              <g clip-path="url(#clip0)">
                <path
                  d="M85.5 1079.95C43.7072 966.929 19.9593 852.301 14.5 737.24C8 600.336 29.872 512.409 41.5 424.739C59.279 290.7 60.81 99.3082 -16.5 -142.448H85.5L85.5 1079.95Z"
                  fill="#f9f9f9"
                ></path>
              </g>
              <defs>
                <clipPath id="clip0">
                  <rect
                    width="1000"
                    height="60"
                    fill="#f9f9f9"
                    transform="translate(0 1000) rotate(-90)"
                  ></rect>
                </clipPath>
              </defs>
            </svg>
          </div>
        </div>
      </div>
    </>
  );
}
