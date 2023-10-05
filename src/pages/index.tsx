import { Inter } from "next/font/google";
import Layout from "../components/layout";
import PurpleishButton from "@/components/purpleishButton";
import TransparentishButton from "@/components/transparentButton";
import Image from "next/image";
import imgref from "@/components/imgref";
import HalfSub from "@/components/halfSub";
import BenefitBoysArr from "@/components/benefitarr";
import HalfSubArr from "@/components/halfsubarr";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Layout>
      <section className=" tablet:flex min-h-screen px-[2.5%] items-center">
        <div className=" tablet:w-[60%]">
          <h1 className=" font-bold  text-transparent bg-clip-text bg-gradient-to-b from-[#5C1D70] to-[#2F073C] ">
            <span className="text-[50px] tablet:text-[64px] leading-[60px] tablet:leading-[73.54px]">
              The Future of Digital
            </span>{" "}
            <br />{" "}
            <span className="text-[50px] tablet:text-[64px] leading-[60px] tablet:leading-[84.54px]">
              Currency
            </span>
          </h1>
          <p className=" mt-[22px] font-light text-2xl">
            The future of Digital currency; A Multichain new generation open
            source P2P currency, the new kind of money; King of payment tokens.
            nBTC(New kind of Bitcoin)
          </p>
          <div className=" mt-[40px] flex flex-col tablet:flex-row gap-5">
            <PurpleishButton children={"Get Started with nBTC"} />
            <TransparentishButton children={"Buy nBTC"} />
          </div>
        </div>

        <aside>
          <Image src={imgref.polygonshape} alt="nBTC logo" className=" hidden tablet:inline-block" />
        </aside>
      </section>
      <div className=" mt-20 flex flex-col mb-[200px] gap-[200px] px-[2.5%]">
        {HalfSubArr.map((content, index) => (
          <section
            className={`${index % 2 === 0 ? "flex tablet:justify-end" : ""}`}
          >
            <HalfSub
              key={index}
              buttonContent={content.buttonContent}
              title={content.title}
              description={content.description}
            />
          </section>
        ))}
      </div>
      <div className=" bg-[#611F76] py-[84px] flex flex-col items-center text-white">
        <h1 className=" font-bold text-[40px] tablet:text-[50px] leading-[57.45px] text-center flex flex-col items-center gap-[11px]">
          Benefits for Merchants
          <Image
            src={imgref.underlineapparently}
            alt="just a simple underline"
          />
        </h1>
        {BenefitBoysArr.map((content, index) => (
          <div
            key={index}
            className={`${
              index === BenefitBoysArr.length - 1 ? "mb-0" : "mb-[23px]"
            } mt-[54px] px-[5%] tablet:px-0 flex flex-col gap-[23px] items-center text-center max-w-[862px]`}
          >
            <h2 className=" font-bold text-3xl">{content.title}</h2>
            <p className=" font-light text-xl">{content.description}</p>
          </div>
        ))}
      </div>
    </Layout>
  );
}
