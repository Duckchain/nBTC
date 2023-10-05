import React from "react";
import Image from "next/image";
import imgref from "./imgref";

const navElements = [
  imgref.githublogo,
  imgref.twitterlogo,
  imgref.telegramlogo,
  imgref.discordlogo,
];

function Footer() {
  return (
    <footer className=" px-[5%] ipad:px-[18px] py-[2.5%] ipad:py-[35.72px] flex flex-col tablet:flex-row items-center justify-center tablet:justify-between w-full pt-[1rem] tablet:pt-[2.5%] gap-[2rem] tablet:gap-0 ">
      <Image
        src={imgref.nbtcbnw}
        alt="nBTC logo"
        className=" tablet:w-[132px] tablet:h-[32.56px] w-[66px] h-[16.26]"
      />

      <div className=" flex text-white gap-[63px]">
        {navElements.map((navElement, index) => (
          <Image
            key={index}
            src={navElement}
            alt="translation icon"
            width={20}
            height={20}
          />
        ))}
      </div>
    </footer>
  );
}

export default Footer;
