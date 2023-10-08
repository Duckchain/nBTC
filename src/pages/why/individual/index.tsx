import GetQuickOV from "@/components/getquickoverview";
import imgref from "@/components/imgref";
import Layout from "@/components/layout";
import PurpleishButton from "@/components/purpleishButton";
import PurpleishButton2 from "@/components/purpleishButton2";
import WhiteCard from "@/components/whitecard";
import Image from "next/image";

function Individual() {
  const WhitecardArr = [
    {
      header: "Easily accessible",
      description:
        "Utilize nBTC tokens across multiple blockchains. Explore the ecosystem developed around nBTC.",
    },
    {
      header: "Quick transfer",
      description:
        "Swift global transfers without concerns about traditional banking's sluggish processing.",
    },
    {
      header: "Low fees",
      description:
        "Transfer varying amounts affordably using Tether tokens, whether small or substantial.",
    },
  ];

  return (
    <Layout>
      <section className=" flex flex-col tablet:flex-row min-h-screen px-[2.5%] justify-center tablet:justify-between tablet:items-center">
        <div className=" tablet:w-[60%] flex flex-col gap-10">
          <h1 className="font-bold text-[50px] tablet:text-[64px] leading-[60px] tablet:leading-[73.54px] text-transparent bg-clip-text bg-gradient-to-b from-[#5C1D70] to-[#2F073C]">
            nBTC <span className=" font-normal"> for Individuals</span>
          </h1>
          <PurpleishButton>
            <h2 className="text-left font-medium text-xl">
              Experience the Future of Money Transfer
            </h2>
            <p className=" mt-6 text-left font-light text-base">
              With nBTC, sending money becomes a seamless global affair.
              Operating 24/7, 365 days a year, nBTC enables you to transfer
              funds to anyone, anywhere in the world. You're in control, without
              the need for third-party approval or permission.
            </p>
          </PurpleishButton>
        </div>
        <aside>
          <Image
            src={imgref.polygonshape}
            alt="nBTC logo"
            className=" hidden tablet:inline-block"
          />
        </aside>
      </section>

      <section className="mt-[10vh] flex flex-col gap-[25px] min-h-screen px-[2.5%] items-center text-center">
        <h2 className=" text-[#611F76] font-bold text-3xl">
          Benefits for Individuals
        </h2>
        <p className=" text-[#1E1E1E] font-normal text-2xl">
          nBTC tokens offer a range of valuable advantages.
        </p>
        <div className=" mt-[25px] mb-[80px] flex flex-col tablet:flex-row justify-between tablet:w-full gap-4 tablet:gap-0">
          {WhitecardArr.map((things, index) => (
            <WhiteCard
              key={index}
              header={things.header}
              description={things.description}
            />
          ))}
        </div>
        <PurpleishButton children={"Get Started with nBTC"} />
      </section>
          <GetQuickOV ShowBiz ShowDev />
    </Layout>
  );
}

export default Individual;
