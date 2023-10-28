import GetQuickOV from "@/components/getquickoverview";
import imgref from "@/components/imgref";
import Layout from "@/components/layout";
import PurpleishButton from "@/components/purpleishButton";
import WhiteCard from "@/components/whitecard";
import Image from "next/image";

function Business() {
  const WhitecardArr = [
    {
      header: "Low fees, Ultra efficiency",
      description:
        "Build DeFi products and solutions utilizing nbtc as the payment token . ",
    },
    {
      header: "No chargebacks, Guaranteed Security",
      description:
        "There are many grants available for developers utilizing nbtc as the payment currency in their Dapps ..",
    },
    {
      header: "Attract new customers",
      description:
        "Payments made more accessible by allowing utilize the fastest growing payment token nBtc .",
    },
    {
      header: "Free marketing and Press coverage",
      description:
        "Very soon developers will be able to write smart contract on nbtc chain to drive Defi applications.",
    },
  ];

  return (
    <Layout>
      <section className=" flex flex-col tablet:flex-row min-h-screen px-[2.5%] justify-center tablet:justify-between tablet:items-center">
        <div className=" tablet:w-[60%] flex flex-col gap-10">
          <h1 className="font-bold text-[50px] tablet:text-[64px] leading-[60px] tablet:leading-[73.54px] text-transparent bg-clip-text bg-gradient-to-b from-[#5C1D70] to-[#2F073C]">
            nBTC <span className=" font-normal"> for Developers</span>
          </h1>
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
          Benefits for Developers
        </h2>
        <p className=" text-[#1E1E1E] font-normal text-2xl">
          Learn nBTC and start building nBTC- based application.
        </p>
        <div className=" mt-[25px] mx-auto flex flex-wrap justify-center items-center gap-8">
          {WhitecardArr.map((things, index) => (
            <WhiteCard
              key={index}
              header={things.header}
              hideTitle={true}
              description={things.description}
            />
          ))}
        </div>
        <div className="mt-[80px]">
          <PurpleishButton children={"Get Started with nBTC"} />
        </div>
      </section>
      <GetQuickOV ShowIndi ShowBiz />
    </Layout>
  );
}

export default Business;
