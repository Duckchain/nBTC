import React from "react";

type PurpleishButtonProps = {
  children: React.ReactNode;
};

function PurpleishButton({ children }: PurpleishButtonProps) {
  return (
    <button className=" font-normal text-base text-white px-[25px] py-[8px] bg-gradient-to-b from-[#601E75] to-[#2A0536] whitespace-nowrap">
      {children}
    </button>
  );
}

export default PurpleishButton;
