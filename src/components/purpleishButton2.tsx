import Link from "next/link";
import React from "react";

interface PurpleishButton2Props {
  line1Text: string;
  line2Text: string;
  where?: string;
  show: boolean
}
const customStyles = {
  color: "rgba(255, 255, 255, 0.50)",
};

const PurpleishButton2: React.FC<PurpleishButton2Props> = ({
  line1Text,
  line2Text,
  where,
  show,
}) => {
  return (
    <Link href={where || ""} className=" max-w-[360px] w-full">
      <button className={` ${show ? "block" : "hidden"} max-w-[360px] px-2 lmb-[58px] h-[106.2px] font-normal min-w-full text-white bg-gradient-to-b from-[#601E75] to-[#2A0536] justify-center items-center cursor-pointer`}>
        <p>{line1Text} </p>
        <p style={customStyles}>{line2Text}</p>
      </button>
    </Link>
  );
};

export default PurpleishButton2;
