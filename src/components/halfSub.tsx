import React from 'react'
import TransparentishButton from './transparentButton'

type HalfSubProps = {
  buttonContent: string;
  description: string;
  title: string;
  additionalClasses?: string;
};

function HalfSub({ buttonContent, description, title, additionalClasses}: HalfSubProps) {
  return (
    <div className={` tablet:w-[50%] ${additionalClasses} `}>
      <h1 className=" font-bold text-[40px] leading-[45.96px] text-[#611F76]">
        {title}
      </h1>
      <p className=" mt-[22px] mb-[40px] font-normal text-xl text-[#1E1E1E]">
        {description}
      </p>
      <TransparentishButton children={buttonContent} />
    </div>
  );
}

export default HalfSub