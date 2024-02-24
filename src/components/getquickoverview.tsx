import React from "react";
import PurpleishButton2 from "./purpleishButton2";

type GetQuickOVProps = {
  ShowIndi?: boolean;
  ShowBiz?: boolean;
  ShowDev?: boolean;
};

function GetQuickOV({ ShowIndi, ShowBiz, ShowDev }: GetQuickOVProps) {
  const sections = [
    { show: ShowIndi, line1: "Individuals", where: "/why/individual" },
    { show: ShowBiz, line1: "Businesses", where: "/why/business" },
    { show: ShowDev, line1: "Developers", where: "/why/developers" },
  ];

  return (
    <section className="mt-[10vh] bg-[#1E1E1E] text-white text-center py-[58px] flex flex-col justify-center items-center gap-[52px] px-[2.5%]">
      <h1 className="font-bold text-3xl">Get a quick overview for</h1>
      <div className="flex flex-col tablet:flex-row items-center tablet:items-baseline justify-between gap-[58px] w-full max-w-full">
        {sections.map(
          (section, index) =>
            section.show && (
              <div key={index} className="w-full">
                <PurpleishButton2
                  line1Text={section.line1}
                  line2Text="Learn more"
                  where={section.where}
                  show={section.show}
                />
              </div>
            )
        )}
      </div>
    </section>
  );
}

export default GetQuickOV;
