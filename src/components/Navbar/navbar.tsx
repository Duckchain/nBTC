import React, { useState } from "react";
import Image from "next/image";
import imgref from "../imgref";
import Link from "next/link";
import { MenuBurger } from "../Menu";



export const Navbar = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <nav
      className={` bg-[#1E1E1E] px-[5%] ipad:px-[72px] py-[5%] ipad:py-[35.72px] flex items-center justify-between w-full ${
        openModal ? "fixed" : "relative"
      }`}
    >
      <Link href="/">
        <Image
          src={imgref.nbtclogo}
          alt="nBTC logo"
          className=" tablet:w-[132px] tablet:h-[32.56px] w-[66px] h-[16.26]"
        />
      </Link>

      <ul className="hidden ipad:flex text-white gap-[63px]">
        {navlist(navElements)}
      </ul>
      <MenuBurger openModal={openModal} setOpenModal={setOpenModal} />
      {/*responsive view*/}
      <div
        className={`${
          openModal ? "block" : "hidden"
        } text-white absolute w-full h-full flex-grow min-h-[100vh] top-[100%] left-0 bg-black z-10 px-[10%]`}
      >
        <ul className=" flex flex-col items-start text-white gap-[2rem] mt-[2rem]">
          {navlist(navElements)}
        </ul>
      </div>
    </nav>
  );
};

const navElements = [
  { name: "Why nBTC?", href: "/why" },
  { name: "nBTC", href: "/" },
  { name: "Whitepaper", href: "https://gitinfo.gitbook.io/_nbtc/" },
  { name: "Community", href: "https://t.me/nBTC_TG" },
  { name: "Utility", href: "/cybria_utility" },
  { name: "ENG", href: "/" },
];

const navlist = (navElements: { name: string; href: string }[]) => {
  return navElements.map((navElement, index) => (
    <Link
      href={navElement.href}
      target={
        navElement.name === "Community"
          ? "_blank"
          : navElement.name === "Whitepaper"
          ? "_blank"
          : ""
      }
    >
      <li
        key={index}
        className={`${
          index === navElements.length - 3 ? "text-[#6DA800]" : ""
        } ${index === navElements.length - 1 ? "flex gap-5" : ""}`}
      >
        {navElement.name}
        {index === navElements.length - 1 && (
          <Image
            src={imgref.translationicon}
            alt="translation icon"
            width={20}
            height={20}
          />
        )}
      </li>
    </Link>
  ));
};