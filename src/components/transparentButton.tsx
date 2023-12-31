import React from "react";

type TransparentishButtonProps = {
  children: React.ReactNode;
};

function TransparentishButton({ children }: TransparentishButtonProps) {
  return (
    <div className=" p-[2px] bg-gradient-to-b from-[#6DA800] to-[#293C07] h-fit tablet:w-fit w-full">
      <button className=" font-normal text-base bg-white text-[#6DA800] w-full tablet:w-fit px-[25px] py-[8px] whitespace-nowrap hover:text-white hover:bg-transparent transition duration-300 ease-in-out">
        {children}
      </button>
    </div>
  );
}

export default TransparentishButton;
