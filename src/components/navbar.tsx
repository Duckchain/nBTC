import React, { useState } from "react";
import Image from "next/image";
import imgref from "./imgref";
import Link from "next/link";

const navElements = [
  { name: "Why nBTC?", href: "/" },
  { name: "nBTC", href: "/" },
  { name: "Whitepaper", href: "/" },
  { name: "Community", href: "/" },
  { name: "ENG", href: "/" },
];

function Navbar() {
  const [openModal, setOpenModal] = useState(false);
  function handleOpenModal() {
    setOpenModal(!openModal);
    
  }

  return (
    <nav
      className={` bg-[#1E1E1E] px-[5%] ipad:px-[72px] py-[5%] ipad:py-[35.72px] flex items-center justify-between w-full labsolute  lh-[20%] ${
        openModal ? "fixed" : "relative"
      }`}
    >
      <Image
        src={imgref.nbtclogo}
        alt="nBTC logo"
        className=" tablet:w-[132px] tablet:h-[32.56px] w-[66px] h-[16.26]"
      />

      <ul className="hidden ipad:flex text-white gap-[63px]">
        {navElements.map((navElement, index) => (
          <Link href={navElement.href}>
            <li
              key={index}
              className={`${
                index === navElements.length - 2 ? "text-[#6DA800]" : ""
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
        ))}
      </ul>
      <button
        onClick={() => setOpenModal(!openModal)}
        className="ipad:hidden flex flex-col gap-1 relative"
      >
        <div
          className={` ${
            openModal ? "absolute" : ""
          } sm:h-[5px] sm:w-[20px] w-3 h-[3px] bg-white self-end rounded-md`}
        ></div>
        <div
          className={` ${
            openModal ? "hidden" : ""
          } sm:h-[5px] sm:w-[30px] w-5 h-[3px] bg-white self-end rounded-md`}
        ></div>
        <div
          className={` ${
            openModal ? " absolute" : ""
          } sm:h-[5px] sm:w-[20px] w-3 h-[3px] bg-white self-end rounded-md`}
        ></div>
      </button>
      {/* This is the nav is responsive view  */}
      <div
        className={`${
          openModal ? "block" : "hidden"
        } text-white absolute w-full h-full flex-grow min-h-[100vh] lbottom-0 top-[100%] left-0 bg-black z-10 px-[10%]`}
      >
        <ul className=" flex flex-col items-start text-white gap-[2rem] mt-[2rem]">
          {navElements.map((navElement, index) => (
            <Link href={navElement.href}>
              <li
              onClick={handleOpenModal}
                key={index}
                className={`${
                  index === navElements.length - 2 ? "text-[#6DA800]" : ""
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
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
