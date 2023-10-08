import React from "react";
import PurpleishButton2 from "./purpleishButton2";
import { type } from "os";

type GetQuickOVProps = {
  ShowIndi?: boolean;
  ShowBiz?: boolean;
  ShowDev?: boolean;
};

function GetQuickOV({ ShowIndi, ShowBiz, ShowDev }: GetQuickOVProps) {
  return (
    <section className=" mt-[10vh] bg-[#1E1E1E] text-white text-center py-[58px] flex flex-col justify-center items-center gap-[52px] px-[2.5%]">
      <h1 className=" font-bold text-3xl">Get a quick overview for</h1>
      {/* <div className=" tablet:flex justify-between w-full max-w-full"> */}
      {/* <GetQuickOV ShowDev ShowIndi /> */}

      <div className=" flex flex-col tablet:flex-row items-center tablet:items-baseline justify-between gap-[58px] w-full max-w-full">
        <div className={` ${ShowIndi ? "block" : "hidden"} w-full`}>
          <PurpleishButton2
            line1Text="Individuals"
            line2Text="Learn more"
            where="/why/individual"
            show={ShowIndi ? true : false}
          />
        </div>

        <div className={` ${ShowBiz ? "block" : "hidden"} w-full`}>
          <PurpleishButton2
            line1Text="Businesses"
            line2Text="Learn more"
            where="/why/business"
            show={ShowBiz ? true : false}
          />
        </div>
        <div className={` ${ShowDev ? "block" : "hidden"} w-full`}>
          <PurpleishButton2
            line1Text="Developers"
            line2Text="Learn more"
            where=""
            show={ShowDev ? true : false}
          />
        </div>
      </div>
      {/* </div> */}
    </section>
  );
}

export default GetQuickOV;
