import React from "react";
import SubHeader from "./SubHeader";
import Image from "next/image";
import { AiOutlineLinkedin } from "react-icons/ai";

export default function Header() {
  return (
    <div className="fixed w-full z-50">
      <div className="navbar bg-base-100 lg:px-32">
        <div className="navbar-start ">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a href="/">Accueill</a>
              </li>
              <li tabIndex={0}>
                <a className="justify-between">
                  Pols
                  <svg
                    className="fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                  </svg>
                </a>
                <ul className="p-2 bg-base-100">
                  <li>
                    <a>imad bgha ychof</a>
                  </li>
                  <li>
                    <a>...</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>References</a>
              </li>
              <li>
                <a>Projects</a>
              </li>
              <li>
                <a href="/coordonnees">Coordonnées</a>
              </li>
            </ul>
          </div>
          <a
            className="btn btn-ghost normal-case text-xl hidden lg:flex"
            href="/"
          >
            <Image
              src="/images/elza.jpg"
              width={50}
              height={50}
              alt="Elza Power"
            />
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a href="/">Accueil</a>
            </li>
            <li tabIndex={0}>
              <a>
                Pols
                <svg
                  className="fill-current rotate-90"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                </svg>
              </a>
              <ul className="p-2 bg-base-100 min-w-[12rem]">
                <li>
                  <a>imad bgha ychof</a>
                </li>
                <li>
                  <a>...</a>
                </li>
              </ul>
            </li>
            <li>
              <a>
                Activité
                <svg
                  className="fill-current rotate-90"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                </svg>
              </a>
              <ul className="p-2 bg-base-100 min-w-[12rem]">
                <li>
                  <a href="/industriel">Activité Industriel</a>
                </li>
                <li>
                  <a>...</a>
                </li>
              </ul>
            </li>
            <li>
              <a>References</a>
            </li>
            <li>
              <a>Projects</a>
            </li>
            <li>
              <a href="/coordonnees">Coordonnées</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <span className="text-sm hidden lg:flex">
            <a href="">
              <AiOutlineLinkedin size={50} className="ml-1 mr-1 -my-1.5" />
            </a>
          </span>
          <a
            className="btn btn-ghost normal-case text-xl flex lg:hidden"
            href="/"
          >
            <Image
              src="/images/elza.jpg"
              width={50}
              height={50}
              alt="Elza Power"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
