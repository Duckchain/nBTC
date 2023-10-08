import React from "react";

type PurpleishButtonProps = {
  children: React.ReactNode;
};

function PurpleishButton({ children }: PurpleishButtonProps) {
  return (
    <button className="tablet:w-fit w-full font-normal text-base text-white px-[25px] py-[8px] bg-gradient-to-b from-[#601E75] to-[#2A0536] hover:text-[#601E75] hover:bg-gradient-to-b hover:from-transparent hover:to-white hover:border hover:border-[#601E75] transition duration-300 ease-in-out">
      {children}
    </button>
  );
}

export default PurpleishButton;
