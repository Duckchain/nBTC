import React from "react";
import Image from "next/image";
import imgref from "./imgref";
import Link from "next/link";

const navElements = [
  { logo: imgref.githublogo, linkto: "https://gitinfo.gitbook.io/_nbtc/" },
  {
    logo: imgref.twitterlogo,
    linkto: "https://x.com/_nBTC",
  },
  { logo: imgref.telegramlogo, linkto: "https://t.me/nBTC_TG" },
  { logo: imgref.discordlogo, linkto: "https://linktr.ee/_nbtc" },
];

function Footer() {
  return (
    <footer className=" px-[5%] ipad:px-[18px] py-[2.5%] ipad:py-[35.72px] flex flex-col tablet:flex-row items-center justify-center tablet:justify-between w-full pt-[1rem] tablet:pt-[2.5%] gap-[2rem] tablet:gap-0 ">
      <Link href="/">
        <Image
          src={imgref.nbtcbnw}
          alt="nBTC logo"
          className=" tablet:w-[132px] tablet:h-[32.56px] w-[66px] h-[16.26]"
        />
      </Link>

      <div className=" flex text-white gap-[63px]">
        {navElements.map((navElement, index) => (
          <a href={navElement.linkto} target="_blank">
            <Image
              key={index}
              src={navElement.logo}
              alt="translation icon"
              width={20}
              height={20}
            />
          </a>
        ))}
      </div>
    </footer>
  );
}

export default Footer;
